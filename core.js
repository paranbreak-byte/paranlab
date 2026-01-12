/**
 * Paran Lab Master Core v7.8
 * 전역 스코프 보장 및 경로 최적화 버전
 */

window.ParanLabCore = {
    config: {
        adsenseId: "ca-pub-6902579674102145",
        contactEmail: "paranbreak@gmail.com",
        sisterSite: "https://factbomber.kr",
        baseKey: "paranlab-"
    },

    toolsList: [
        { id: 'ahp', name: 'AHP 분석', icon: '📊', category: 'Decision', href: '/ahp/' },
        { id: 'pros-cons', name: 'Pros & Cons', icon: '⚖️', category: 'Decision', href: '/pros-cons/' },
        { id: 'swot', name: 'SWOT 전략', icon: '🧩', category: 'Strategy', href: '/swot/' },
        { id: 'mandalart', name: '만다라트', icon: '🕸️', category: 'Goal', href: '/mandalart/' },
        { id: 'eisenhower', name: '아이젠하워', icon: '📅', category: 'Time', href: '/eisenhower/' },
        { id: 'grow', name: 'GROW 코칭', icon: '🌱', category: 'Coaching', href: '/grow/' },
        { id: 'smart', name: 'SMART 목표', icon: '📏', category: 'Goal', href: '/smart/' },
        { id: 'okr', name: 'OKR 설정', icon: '🎯', category: 'Goal', href: '/okr/' },
        { id: '5whys', name: '5 Whys', icon: '❓', category: 'Problem', href: '/5whys/' },
        { id: 'logic-tree', name: '로직 트리', icon: '🌳', category: 'Problem', href: '/logic-tree/' },
        { id: 'porter', name: '5 Forces', icon: '🛡️', category: 'Strategy', href: '/porter/' },
        { id: 'cba', name: '비용편익분석', icon: '📈', category: 'Finance', href: '/cba/' },
        { id: 'weighted', name: '가중치 점수', icon: '📝', category: 'Decision', href: '/weighted/' },
        { id: 'ikigai', name: '이키가이', icon: '🌸', category: 'Self', href: '/ikigai/' },
        { id: 'wheel', name: '인생 수레바퀴', icon: '🎡', category: 'Self', href: '/wheel/' },
        { id: 'johari', name: '조하리의 창', icon: '🪟', category: 'Team', href: '/johari/' },
        { id: 'scamper', name: 'SCAMPER', icon: '🔧', category: 'Creative', href: '/scamper/' },
        { id: 'pmi', name: 'PMI 평가', icon: '💡', category: 'Creative', href: '/pmi/' },
        { id: 'tree', name: '결정 트리', icon: '🌲', category: 'Risk', href: '/tree/' },
        { id: 'vrio', name: 'VRIO 분석', icon: '💎', category: 'Strategy', href: '/vrio/' },
        { id: 'pest', name: 'PEST 분석', icon: '🌐', category: 'Strategy', href: '/pest/' },
        { id: 'affinity', name: '친화도법', icon: '📎', category: 'Team', href: '/affinity/' },
        { id: 'force-field', name: '역장 분석', icon: '🏹', category: 'Problem', href: '/force-field/' },
        { id: 'value-chain', name: '가치 사슬', icon: '⛓️', category: 'Strategy', href: '/value-chain/' },
        { id: 'time-audit', name: '시간 감사', icon: '⏳', category: 'Time', href: '/time-audit/' },
        { id: 'payoff', name: 'Payoff 분석', icon: '💰', category: 'Time', href: '/payoff/' },
        { id: '3c', name: '3C 분석', icon: '🏢', category: 'Strategy', href: '/3c/' },
        { id: 'ansoff', name: '안소프 매트릭스', icon: '📈', category: 'Strategy', href: '/ansoff/' },
        { id: 'bcg', name: 'BCG 매트릭스', icon: '⭐', category: 'Strategy', href: '/bcg/' },
        { id: 'paired', name: '쌍대 비교', icon: '⚔️', category: 'Decision', href: '/paired/' },
        { id: '6hats', name: '여섯 색깔 모자', icon: '🎩', category: 'Creative', href: '/6hats/' }
    ],

    scenariosList: [
        { id: 'career', icon: '💼', title: 'Career', subtitle: '철수의 인생 2막: 대기업 vs 스타트업', story: '10년 차 과장 철수는 안정적인 대기업과 혁신적인 스타트업 사이에서 고민 중입니다.', tools: ['ahp', 'pros-cons', 'grow'] },
        { id: 'burnout', icon: '📅', title: 'Productivity', subtitle: '김 팀장의 업무 과부하 해결', story: '매일 30개가 넘는 할 일에 치이는 김 팀장. 에너지는 고갈되었고 우선순위 재정립이 시급합니다.', tools: ['eisenhower', 'time-audit', 'payoff'] },
        { id: 'startup', icon: '🚀', title: 'Startup', subtitle: '영희의 유기농 베이커리 도전기', story: '신도시 아파트 단지에 유기농 빵집을 차리려는 영희. 대형 프랜차이즈 사이에서 살아남을 전략이 필요합니다.', tools: ['swot', 'porter', 'value-chain'] }
    ],

    payloads: {
        career: {
            ahp: { goal: "철수의 최적 이직처 결정", criteria: ["연봉/복지", "출퇴근거리", "성장가능성"], alternatives: ["현재 대기업", "핀테크 스타트업"], criteriaComparisons: {"0-1": -3, "0-2": -5, "1-2": 2}, alternativeComparisons: {0:{"0-1":-7}, 1:{"0-1":8}, 2:{"0-1":9}} }
        }
    },

    init() {
        this.renderHeader();
        this.renderFooter();
    },

    tossData(toolId, scenarioId) {
        const scenario = this.scenariosList.find(s => s.id === scenarioId);
        const payload = (this.payloads[scenarioId] && this.payloads[scenarioId][toolId]) || {};
        payload.scenarioContext = { title: scenario.subtitle, origin: scenario.id };
        localStorage.setItem(this.config.baseKey + toolId, JSON.stringify(payload));
        // 경로 수정: 절대 경로가 아닌 상대 경로로 안전하게 이동
        window.location.href = '../' + toolId + '/';
    },

    saveAsImage(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return;
        html2canvas(element, { scale: 2, useCORS: true }).then(canvas => {
            const link = document.createElement('a');
            link.download = `paranlab-report-${new Date().getTime()}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    },

    downloadHTML(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return;
        const htmlContent = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Paran Lab Report</title><style>body{font-family:sans-serif;padding:40px;}</style></head><body>${element.outerHTML}</body></html>`;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const link = document.createElement('a');
        link.download = 'paranlab-report.html';
        link.href = URL.createObjectURL(blob);
        link.click();
    },

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => alert('결과가 클립보드에 복사되었습니다.'));
    },

    renderHeader() {
        const header = document.getElementById('header-root');
        if (header) {
            header.innerHTML = `<header class="bg-white border-b no-print"><div class="container mx-auto px-6 py-4 flex justify-between items-center"><a href="/" class="text-2xl font-black text-blue-600 tracking-tighter">PARAN LAB</a><nav class="flex gap-6 text-sm font-bold text-slate-600"><a href="/" class="hover:text-blue-600">도구함</a><a href="/scenarios/" class="hover:text-blue-600">시나리오</a></nav></div></header>`;
        }
    },

    renderFooter() {
        const footer = document.getElementById('footer-root');
        if (footer) {
            footer.innerHTML = `<footer class="bg-slate-100 border-t mt-20 py-12 no-print"><div class="container mx-auto px-6 text-center md:text-left"><div class="flex flex-col md:flex-row justify-between items-center gap-6"><div><p class="text-slate-900 font-black text-lg">PARAN LAB</p><p class="text-slate-500 text-sm mt-1">데이터 기반 의사결정 과학 플랫폼</p></div><div class="text-sm font-bold text-slate-600">Contact: <a href="mailto:${this.config.contactEmail}" class="text-blue-600">${this.config.contactEmail}</a></div></div></div></footer>`;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => ParanLabCore.init());
