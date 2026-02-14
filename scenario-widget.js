/**
 * ParanLab Scenario Widget v1.1
 * - Renders clickable daily-life scenarios
 * - "튜토리얼로 채우기" fills inputs step-by-step (goal → 기준 → 선택지 …) with guided reloads
 * - Auto-places the widget right above "주요 참고 문헌" section when found
 */
(function(){
  function escapeHtml(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#39;");
  }

  function inferToolId(){
    const el = document.getElementById("scenario-examples");
    const t = el && el.getAttribute("data-tool");
    if (t) return t;
    // fallback from path
    const parts = (location.pathname || "").split("/").filter(Boolean);
    // last folder name (handle /repo/tool/)
    return parts[parts.length-1] || "";
  }

  function findReferencesSection(){
    // Try to find the References section header used across tools
    const headers = Array.from(document.querySelectorAll('h4, h3, h2'));
    const hit = headers.find(h => (h.textContent || '').includes('주요 참고 문헌') || (h.textContent || '').toLowerCase().includes('references'));
    if (!hit) return null;
    return hit.closest('section') || hit.parentElement;
  }

  function moveSectionAboveReferences(section){
    try{
      const refSection = findReferencesSection();
      if (refSection && refSection.parentNode){
        refSection.parentNode.insertBefore(section, refSection);
      }
    }catch(e){ /* no-op */ }
  }

  function splitPayloadIntoStages(payload){
    const p = payload || {};
    const keys = Object.keys(p);
    const stage1Keys = ['goal','problem','subject','title','topic','situation','question'];
    const stage2Keys = ['criteria','whys','items','reasons','tasks','strengths','weaknesses','opportunities','threats','pros','cons','risks','benefits'];
    const stage3Keys = ['alternatives','options','actions','steps','forcesDriving','forcesRestraining','hats'];

    function pick(list){
      return list.filter(k => k in p);
    }

    const s1 = pick(stage1Keys);
    const s2 = pick(stage2Keys).filter(k => !s1.includes(k));
    const s3 = pick(stage3Keys).filter(k => !s1.includes(k) && !s2.includes(k));
    const used = new Set([...s1, ...s2, ...s3, 'scenarioContext', 'isDefault']);
    const rest = keys.filter(k => !used.has(k));

    const stages = [];
    if (s1.length) stages.push({ title: '1) 목표/문제', keys: s1 });
    if (s2.length) stages.push({ title: '2) 기준/이유', keys: s2 });
    if (s3.length) stages.push({ title: '3) 선택지/아이디어', keys: s3 });
    if (rest.length) stages.push({ title: '4) 세부 입력', keys: rest });
    if (!stages.length) stages.push({ title: '1) 예시 적용', keys: keys });
    return stages;
  }

  function tutorialKey(toolId){
    return 'paranlab-tutorial-' + toolId;
  }

  function readTutorial(toolId){
    try{ return JSON.parse(localStorage.getItem(tutorialKey(toolId)) || 'null'); }catch(e){ return null; }
  }

  function writeToolData(toolId, data){
    localStorage.setItem('paranlab-' + toolId, JSON.stringify(data));
  }

  function applyTutorialStage(toolId, tutorial){
    const full = tutorial.fullPayload || {};
    const stages = tutorial.stages || splitPayloadIntoStages(full);
    const step = Math.max(0, Math.min(tutorial.step || 0, stages.length-1));
    const picked = {};
    for (let i = 0; i <= step; i++){
      (stages[i].keys || []).forEach(k => { picked[k] = full[k]; });
    }
    picked.scenarioContext = tutorial.scenarioContext || full.scenarioContext || { title: tutorial.title || '', origin: tutorial.origin || '' };
    picked.isDefault = false;
    writeToolData(toolId, picked);
  }

  function autoHighlightFirstField(){
    const field = document.querySelector('textarea, input[type="text"], input:not([type]), select');
    if (!field) return;
    field.classList.add('ring-4','ring-blue-200');
    try{ field.scrollIntoView({ behavior: 'smooth', block: 'center' }); }catch(e){}
    setTimeout(() => field.classList.remove('ring-4','ring-blue-200'), 1800);
  }

  function tryAutoAdvance(){
    // Best-effort: click the first "다음" button if present
    const btns = Array.from(document.querySelectorAll('button'));
    const next = btns.find(b => ((b.textContent||'').trim().startsWith('다음') || (b.textContent||'').includes('다음:')));
    if (next) next.click();
  }

  function renderTutorialToast(toolId, tutorial){
    const stages = tutorial.stages || [];
    const step = tutorial.step || 0;
    const title = tutorial.title || '예시';
    const toast = document.createElement('div');
    toast.id = 'paranlab-tutorial-toast';
    toast.className = 'fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[420px] z-[60] no-print';
    toast.innerHTML = `
      <div class="bg-white/90 backdrop-blur border border-slate-200 shadow-xl rounded-2xl p-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-xs font-black text-blue-600">PARANLAB 튜토리얼</div>
            <div class="text-sm font-extrabold text-slate-900 mt-1">${escapeHtml(title)} — ${escapeHtml((stages[step] && stages[step].title) || '진행')}</div>
            <div class="text-xs text-slate-600 mt-1">현재 단계 입력이 채워졌습니다. 수정하거나 <b>다음 단계</b>로 진행하세요.</div>
          </div>
          <button type="button" class="px-3 py-1 rounded-xl bg-slate-900 text-white text-xs font-black tutorial-exit">종료</button>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <button type="button" class="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-black tutorial-next">다음 단계 자동 채우기</button>
          <button type="button" class="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-black tutorial-autonext">다음 화면까지 자동 진행</button>
        </div>
        <div class="mt-3 text-[11px] text-slate-500">진행: ${step+1}/${Math.max(1, stages.length)} · (아래 입력칸이 살짝 강조됩니다)</div>
      </div>
    `;
    document.body.appendChild(toast);

    toast.addEventListener('click', (e) => {
      const t = e.target;
      if (t.closest('.tutorial-exit')){
        localStorage.removeItem(tutorialKey(toolId));
        toast.remove();
        return;
      }
      if (t.closest('.tutorial-next')){
        const nextStep = Math.min((tutorial.step||0) + 1, (tutorial.stages||[]).length - 1);
        if (nextStep === (tutorial.step||0)){
          // already final
          localStorage.removeItem(tutorialKey(toolId));
          toast.remove();
          alert('마지막 단계까지 적용되었습니다! 이제 실행/결과를 확인해 보세요.');
          return;
        }
        tutorial.step = nextStep;
        localStorage.setItem(tutorialKey(toolId), JSON.stringify(tutorial));
        applyTutorialStage(toolId, tutorial);
        window.location.reload();
        return;
      }
      if (t.closest('.tutorial-autonext')){
        // Fill next stage and also click "다음" 버튼을 가능한 경우 자동으로 눌러 이동
        const nextStep = Math.min((tutorial.step||0) + 1, (tutorial.stages||[]).length - 1);
        tutorial.step = nextStep;
        localStorage.setItem(tutorialKey(toolId), JSON.stringify(tutorial));
        applyTutorialStage(toolId, tutorial);
        window.location.reload();
        // after reload we'll attempt auto-advance
        localStorage.setItem(tutorialKey(toolId) + '-autoadvance', '1');
        return;
      }
    });
  }

  function render(){
    const section = document.getElementById("scenario-examples");
    if(!section) return;

    // Place scenarios right above the References section (if exists)
    moveSectionAboveReferences(section);

    const toolId = inferToolId();
    const dataEl = document.getElementById("scenario-data");
    if(!dataEl) return;

    let scenarios = [];
    try { scenarios = JSON.parse(dataEl.textContent || "[]"); } catch(e){ scenarios = []; }

    const key = "paranlab-" + toolId;

    // If tutorial is active, show helper toast (data is already saved before reload)
    const activeTutorial = readTutorial(toolId);
    if (activeTutorial && activeTutorial.fullPayload){
      try{
        if (!activeTutorial.stages) activeTutorial.stages = splitPayloadIntoStages(activeTutorial.fullPayload);
        // Render toast + highlight
        setTimeout(() => {
          renderTutorialToast(toolId, activeTutorial);
          autoHighlightFirstField();
          if (localStorage.getItem(tutorialKey(toolId) + '-autoadvance') === '1'){
            localStorage.removeItem(tutorialKey(toolId) + '-autoadvance');
            setTimeout(tryAutoAdvance, 250);
          }
        }, 150);
      }catch(e){ /* ignore */ }
    }
    const itemsHtml = scenarios.map((s, idx) => {
      const title = escapeHtml(s.title || ("시나리오 " + (idx+1)));
      const summary = escapeHtml(s.summary || "");
      const detail = escapeHtml((s.detail || "")).replaceAll("\n","<br/>");
      return `
        <div class="rounded-2xl border border-slate-100 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
          <button type="button" class="w-full text-left px-5 py-4 flex items-start justify-between gap-4 scenario-toggle" data-idx="${idx}">
            <div>
              <div class="text-lg font-extrabold text-slate-900">${idx+1}. ${title}</div>
              <div class="text-slate-600 mt-1">${summary}</div>
            </div>
            <div class="shrink-0 text-slate-400 font-black text-xl leading-none select-none">+</div>
          </button>
          <div class="hidden px-5 pb-5 scenario-body" data-idx="${idx}">
            <div class="text-slate-700 leading-relaxed mt-1">${detail}</div>
            <div class="mt-4 flex flex-wrap gap-2">
              <button type="button" class="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold scenario-apply" data-idx="${idx}">
                튜토리얼로 채우기
              </button>
              <button type="button" class="px-4 py-2 rounded-xl border border-slate-200 bg-white font-bold scenario-copy" data-idx="${idx}">
                예시 JSON 복사
              </button>
            </div>
            <div class="text-xs text-slate-500 mt-3">
              * 버튼을 누르면 <b>목표/문제 → 기준/이유 → 선택지…</b> 순서로 단계별로 채워지며, 각 단계마다 화면이 갱신됩니다.
            </div>
          </div>
        </div>
      `;
    }).join("");

    section.innerHTML = `
      <div class="max-w-5xl mx-auto px-4 pb-16">
        <div class="mt-10 bg-white/70 backdrop-blur rounded-[2rem] border border-slate-100 shadow-sm p-6 md:p-8">
          <h2 class="text-2xl md:text-3xl font-black text-slate-900">클릭해서 따라하는 일상 시나리오 10개</h2>
          <p class="text-slate-600 mt-2">카드를 눌러 자세히 보고, <b>튜토리얼로 채우기</b>를 누르면 <b>단계별로</b> 자동 입력이 진행됩니다.</p>
          <div class="mt-6 grid gap-3">
            ${itemsHtml || `<div class="text-slate-500">시나리오 데이터가 없습니다.</div>`}
          </div>
        </div>
      </div>
    `;

    section.addEventListener("click", async (e) => {
      const tgt = e.target;
      const toggleBtn = tgt.closest && tgt.closest(".scenario-toggle");
      if (toggleBtn){
        const idx = toggleBtn.getAttribute("data-idx");
        const body = section.querySelector(`.scenario-body[data-idx="${idx}"]`);
        const plus = toggleBtn.querySelector("div.shrink-0");
        if(body){
          const isHidden = body.classList.contains("hidden");
          body.classList.toggle("hidden");
          if (plus) plus.textContent = isHidden ? "–" : "+";
        }
        return;
      }

      const applyBtn = tgt.closest && tgt.closest(".scenario-apply");
      if (applyBtn){
        const idx = Number(applyBtn.getAttribute("data-idx"));
        const s = scenarios[idx];
        if(!s || !s.payload) return;
        try{
          const payload = Object.assign({}, s.payload);
          const t = {
            id: s.id || ("s"+(idx+1)),
            title: s.title || "",
            origin: s.id || ("s"+(idx+1)),
            scenarioContext: { title: s.title || "", origin: s.id || ("s"+(idx+1)) },
            step: 0,
            fullPayload: payload,
            stages: splitPayloadIntoStages(payload)
          };
          localStorage.setItem(tutorialKey(toolId), JSON.stringify(t));
          applyTutorialStage(toolId, t);
          window.location.reload();
        }catch(err){
          alert("예시를 적용하는 중 오류가 발생했습니다.");
          console.error(err);
        }
        return;
      }

      const copyBtn = tgt.closest && tgt.closest(".scenario-copy");
      if (copyBtn){
        const idx = Number(copyBtn.getAttribute("data-idx"));
        const s = scenarios[idx];
        if(!s || !s.payload) return;
        try{
          await navigator.clipboard.writeText(JSON.stringify(s.payload, null, 2));
          alert("예시 JSON이 복사되었습니다.");
        }catch(err){
          alert("복사에 실패했습니다. 브라우저 권한을 확인해 주세요.");
        }
        return;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
