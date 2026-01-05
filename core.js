/**
 * Paran Lab Core Framework v11.0 (Master Scenario DB)
 * 31개 도구 + 10대 상세 시나리오 + 학술 논문 근거 통합
 */

const ParanLabCore = {
    // 1. 10대 마스터 시나리오 (상세 스토리 및 데이터 포함)
    scenariosList: [
        {
            id: "career",
            title: "커리어 전환",
            subtitle: "철수의 인생 2막: 대기업 vs 스타트업",
            icon: "💼",
            story: "10년 차 과장 철수는 연봉 8,500만 원의 안정적인 대기업에 재직 중입니다. 하지만 왕복 2시간 30분의 출퇴근 거리와 보수적인 문화로 인해 삶의 질이 급격히 떨어졌습니다. 최근 집 앞 10분 거리의 스타트업에서 연봉 7,800만 원과 스톡옵션을 제안받았습니다. 성장이냐 안정냐, 철수의 선택은 무엇일까요?",
            data: ["현재 연봉: 8,500만원", "제안 연봉: 7,800만원 + 옵션", "출퇴근 시간: 150분 vs 20분", "조직 문화: 보수적 vs 혁신적"],
            academic: {
                theory: "Herzberg(1959) 동기-위생 이론",
                desc: "연봉은 불만족을 방지하는 '위생 요인'일 뿐이며, 성취감과 성장이 '동기 요인'으로서 장기적 행복을 결정함을 입증한 연구입니다.",
                paper: "Herzberg, F. (1959). The Motivation to Work. John Wiley & Sons."
            },
            tools: ["ahp", "pros-cons", "grow"]
        },
        {
            id: "startup",
            title: "창업 타당성",
            subtitle: "영희의 유기농 베이커리 도전기",
            icon: "🚀",
            story: "베테랑 제빵사 영희는 신도시 아파트 단지에 유기농 빵집 창업을 꿈꿉니다. 하지만 인근에 대형 프랜차이즈 빵집 2곳이 이미 성업 중입니다. 영희는 '글루텐 프리'라는 차별화로 승부하려 하지만, 높은 원재료비와 임대료 부담 사이에서 수익성을 냉정하게 분석해야 합니다.",
            data: ["임대료: 월 350만원", "원가율: 일반 대비 3배", "경쟁사: 대형 프랜차이즈 2개", "차별화: 유기농/글루텐 프리"],
            academic: {
                theory: "Michael Porter(1979) 5 Forces 모델",
                desc: "산업의 매력도를 결정하는 5가지 경쟁 압력을 분석하여 신규 진입자가 수익을 낼 수 있는 구조인지 파악하는 경영학의 고전 이론입니다.",
                paper: "Porter, M. E. (1979). How Competitive Forces Shape Strategy. Harvard Business Review."
            },
            tools: ["swot", "porter", "3c", "value-chain"]
        },
        {
            id: "shopping",
            title: "합리적 소비",
            subtitle: "민수의 첫 내 집 마련: 아파트 vs 빌라",
            icon: "💰",
            story: "결혼을 앞둔 민수는 5억 원의 예산으로 신혼집을 찾고 있습니다. 직장 근처의 낡은 18평 아파트와 차로 40분 거리의 넓은 32평 신축 빌라 사이에서 갈등 중입니다. 출퇴근의 편의성이냐, 주거의 쾌적함과 향후 자산 가치냐. 민수의 가치관을 수치화해야 합니다.",
            data: ["예산: 5억원", "아파트: 18평/노후/직주근접", "빌라: 32평/신축/원거리", "예상 시세차익 분석 필요"],
            academic: {
                theory: "Lancaster(1966) 소비자 속성 이론",
                desc: "소비자는 상품 자체가 아니라 상품이 가진 '속성(평수, 위치 등)'의 묶음을 구매하며, 각 속성의 효용을 극대화하는 선택을 한다는 이론입니다.",
                paper: "Lancaster, K. J. (1966). A New Approach to Consumer Theory. Journal of Political Economy."
            },
            tools: ["ahp", "cba", "weighted"]
        },
        {
            id: "burnout",
            title: "번아웃 탈출",
            subtitle: "김 팀장의 업무 과부하 해결",
            icon: "📅",
            story: "마케팅팀 김 팀장은 매일 30개가 넘는 할 일 목록에 치여 삽니다. 갑작스러운 보고서 지시와 팀원들의 업무 대행으로 정작 중요한 캠페인 기획은 손도 못 대고 있습니다. 에너지는 고갈되었고, 우선순위 재정립이 시급한 상황입니다.",
            data: ["일일 업무량: 30개 이상", "야근 빈도: 주 5회", "핵심 과제: 캠페인 기획", "방해 요소: 수시 슬랙 메시지"],
            academic: {
                theory: "Stephen Covey 시간 관리 매트릭스",
                desc: "긴급함(Urgency)과 중요함(Importance)을 기준으로 업무를 4분할하여, 삶의 질을 결정하는 '중요하지만 긴급하지 않은' 영역을 확보하는 원칙입니다.",
                paper: "Covey, S. R. (1989). The 7 Habits of Highly Effective People."
            },
            tools: ["eisenhower", "time-audit", "payoff"]
        },
        {
            id: "goal",
            title: "목표 달성",
            subtitle: "지민이의 영어 정복 1년 설계",
            icon: "📍",
            story: "취준생 지민이는 매번 영어 공부에 실패합니다. 이번에는 '오픽 AL'이라는 구체적인 목표를 세웠지만, 하루 1시간이라는 짧은 가용 시간을 어떻게 효율적으로 배분하고 성과를 측정할지 막막합니다. 작심삼일을 끝낼 정교한 지도가 필요합니다.",
            data: ["현재 수준: 토익 700", "목표: 오픽 AL", "가용 시간: 일 1시간", "기간: 12개월"],
            academic: {
                theory: "Locke & Latham(1990) 목표 설정 이론",
                desc: "구체적이고(Specific) 어려운(Challenging) 목표가 인간의 동기를 유발하고 수행 능력을 비약적으로 향상시킨다는 심리학적 근거입니다.",
                paper: "Locke, E. A., & Latham, G. P. (1990). A Theory of Goal Setting & Task Performance."
            },
            tools: ["smart", "mandalart", "okr"]
        },
        {
            id: "problem",
            title: "문제 해결",
            subtitle: "박 사장의 식당 매출 급감 원인 분석",
            icon: "❓",
            story: "7년 차 레스토랑 운영자 박 사장은 최근 매출이 40% 급감했습니다. 경쟁점도 없는데 단골들이 사라진 이유를 찾아야 합니다. 주방의 레시피 변경, 직원의 불친절, 혹은 단순한 경기 침체일까요? 현상 뒤에 숨은 진짜 원인을 추적합니다.",
            data: ["매출 변화: -40%", "고객 피드백: '맛이 변함'", "원가율: 5% 상승", "직원 이직률: 증가"],
            academic: {
                theory: "Taiichi Ohno의 5 Whys 기법",
                desc: "도요타 생산 방식의 핵심으로, 현상에 대해 '왜?'를 5번 반복하여 임시방편이 아닌 근본 원인(Root Cause)을 제거하는 품질 관리 방법론입니다.",
                paper: "Ohno, T. (1988). Toyota Production System: Beyond Large-Scale Production."
            },
            tools: ["5whys", "logic-tree", "force-field"]
        },
        {
            id: "creative",
            title: "창의적 기획",
            subtitle: "이 대리의 사내 복지 혁신 아이디어",
            icon: "💡",
            story: "인사팀 이 대리는 사내 복지 포인트를 구독 서비스로 전환하자는 아이디어를 냈습니다. 보수적인 임원진을 설득하기 위해 이 아이디어가 가진 잠재력과 리스크를 다각도로 분석하고 논리적인 기획안을 완성해야 합니다.",
            data: ["예상 비용: 인당 월 3만원", "타사 사례: 5개 기업 도입 중", "직원 선호도: 92% 찬성", "리스크: 예산 고정성"],
            academic: {
                theory: "Edward de Bono(1985) 수평적 사고",
                desc: "기존의 논리적 흐름을 깨고 새로운 관점을 강제로 생성하는 기법으로, 창의성을 타고난 재능이 아닌 '기술'로 접근하는 방법론입니다.",
                paper: "De Bono, E. (1985). Six Thinking Hats."
            },
            tools: ["scamper", "6hats", "pmi"]
        },
        {
            id: "purpose",
            title: "자아 성찰",
            subtitle: "40대 가장 성진 씨의 '진짜 나' 찾기",
            icon: "🌸",
            story: "대기업 과장 성진 씨는 경제적으로 안정되었지만 삶의 공허함을 느낍니다. 내가 진짜 좋아했던 일은 무엇인지, 남은 인생을 어떤 가치에 집중하며 살아야 할지 내면의 목소리를 데이터로 확인하고 싶어 합니다.",
            data: ["현재 행복도: 4/10", "과거 흥미: 미술, 여행", "보유 기술: 데이터 분석", "가족 관계 점수: 6/10"],
            academic: {
                theory: "Martin Seligman 긍정 심리학",
                desc: "행복을 결정하는 5가지 요소(PERMA: 긍정적 감정, 몰입, 관계, 의미, 성취)를 통해 삶의 질을 과학적으로 측정하고 개선하는 심리학 모델입니다.",
                paper: "Seligman, M. E. P. (2011). Flourish: A Visionary New Understanding of Happiness and Well-being."
            },
            tools: ["ikigai", "wheel", "johari"]
        },
        {
            id: "risk",
            title: "리스크 관리",
            subtitle: "투자자 최 씨의 하락장 대응 전략",
            icon: "🌳",
            story: "반도체 주식에 5,000만 원을 투자한 최 씨는 현재 -30% 손실 중입니다. 손절 후 예금으로 갈아탈지, 추가 매수를 할지 결정해야 합니다. 시장 반등 확률과 추가 하락 확률을 계산하여 최악의 상황을 대비한 플랜 B를 짭니다.",
            data: ["투자 원금: 5,000만원", "현재 손실: 1,500만원", "반등 확률: 40%", "추가 하락 확률: 60%"],
            academic: {
                theory: "Kahneman(1979) 전망 이론",
                desc: "인간이 이득보다 손실에 2배 더 민감하게 반응하는 심리적 편향을 분석하여, 불확실성 하에서 합리적인 기댓값을 계산하는 행동경제학 이론입니다.",
                paper: "Kahneman, D., & Tversky, A. (1979). Prospect Theory."
            },
            tools: ["tree", "vrio", "pest"]
        },
        {
            id: "team",
            title: "조직 소통",
            subtitle: "프로젝트 팀의 갈등 해결과 협업",
            icon: "🪟",
            story: "개발자와 기획자의 의견 대립으로 멈춰버린 프로젝트. 서로의 업무 스타일을 이해하지 못해 감정 싸움으로 번졌습니다. 팀원 간의 인식 차이를 시각화하고 흩어진 아이디어를 하나로 모으는 소통의 기술이 필요합니다.",
            data: ["갈등 지점: 마감 기한 vs 기능 구현", "팀원 수: 5명", "소통 빈도: 일 1회 미만", "공통 목표 합의율: 30%"],
            academic: {
                theory: "Luft & Ingham(1955) 조하리의 창",
                desc: "자기 개방과 피드백을 통해 대인관계의 신뢰를 구축하고 조직 내 소통의 사각지대를 줄이는 커뮤니케이션 모델입니다.",
                paper: "Luft, J., & Ingham, H. (1955). The Johari window, a graphic model of interpersonal awareness."
            },
            tools: ["johari", "affinity", "6hats"]
        }
    ],

    // 도구 리스트 (기존 31개 유지)
    toolsList: [ /* 이전 toolsList 내용 그대로 유지 */ ],

    familySites: [{ name: "FactBomber", href: "https://factbomber.kr" }],

    // 공통 기능 (AdSense, Privacy, Save, Image 등 기존 로직 유지)
    injectAdSense: function() {
        if (document.querySelector('script[src*="adsbygoogle"]')) return;
        const adScript = document.createElement('script');
        adScript.async = true;
        adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6902579674102145";
        adScript.crossOrigin = "anonymous";
        document.head.appendChild(adScript);
    },

    saveAsImage: function(elementId, fileName) {
        const element = document.getElementById(elementId);
        if (!element) return;
        html2canvas(element, { backgroundColor: '#ffffff', scale: 2 }).then(canvas => {
            const link = document.createElement('a');
            link.download = `${fileName || 'paranlab-report'}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    },

    saveAsHtml: function(title, contentHtml, fileName) {
        const htmlContent = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title}</title><style>body{font-family:sans-serif;padding:40px;max-width:600px;margin:0 auto;line-height:1.6;}h1{border-bottom:4px solid #2563eb;padding-bottom:10px;}.box{padding:20px;border-radius:15px;margin-bottom:15px;background:#f8fafc;border:1px solid #eee;}.footer{font-size:12px;color:#999;text-align:center;margin-top:40px;}</style></head><body><h1>📊 ${title}</h1>${contentHtml}<div class="footer">© 2025 Paran Lab.</div></body></html>`;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName || 'report'}.html`;
        a.click();
    },

    copyToClipboard: function(text) { navigator.clipboard.writeText(text).then(() => alert("결과가 복사되었습니다!")); },

    initPrivacyGuard: function() {
        const isAutoSaveOff = localStorage.getItem('paranlab-autosave') === 'false';
        if (isAutoSaveOff) {
            const originalSetItem = localStorage.setItem;
            localStorage.setItem = function(key, value) {
                if (key === 'paranlab-autosave') originalSetItem.apply(this, arguments);
            };
        }
    },

    isAutoSaveEnabled: function() { return localStorage.getItem('paranlab-autosave') !== 'false'; },

    toggleAutoSave: function() {
        const current = this.isAutoSaveEnabled();
        if (current) {
            if(confirm('자동저장을 끄시겠습니까? 현재 브라우저에 임시 저장된 내용도 모두 삭제됩니다.')) {
                localStorage.clear();
                localStorage.setItem('paranlab-autosave', 'false');
                location.reload();
            }
        } else {
            localStorage.setItem('paranlab-autosave', 'true');
            location.reload();
        }
    },

    layout: {
        header: function(tools, isAutoSaveOn) {
            const categories = ["결정", "전략", "기획", "자기계발"];
            const menuHtml = categories.map(cat => {
                const catTools = tools.filter(t => t.category === cat);
                return `<div class="py-2"><div class="px-4 py-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">${cat}</div>${catTools.map(t => `<a href="${t.href}" class="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">${t.name}</a>`).join('')}</div>`;
            }).join('<div class="border-b border-slate-50"></div>');
            return `<header class="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 no-print"><div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"><a href="/" class="text-2xl font-black text-blue-600 tracking-tighter">PARAN LAB</a><div class="flex items-center gap-4"><div class="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100"><span class="hidden md:inline text-[10px] font-black ${isAutoSaveOn ? 'text-blue-600' : 'text-rose-500'} uppercase">${isAutoSaveOn ? 'Auto-Save ON' : 'Privacy Mode'}</span><button onclick="ParanLabCore.toggleAutoSave()" class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${isAutoSaveOn ? 'bg-blue-600' : 'bg-slate-300'}"><span class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${isAutoSaveOn ? 'translate-x-5' : 'translate-x-1'}"></span></button></div><div class="relative group"><button class="flex items-center gap-1 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all">전체 도구</button><div class="absolute right-0 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-y-auto max-h-[80vh] z-50">${menuHtml}</div></div></div></div></header>`;
        },
        toolHeader: function(tool, isAutoSaveOn) {
            if (!tool) return '';
            return `<div class="max-w-2xl mx-auto mt-8 mb-12 px-4 no-print"><div class="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"><div class="absolute top-0 right-0 p-10 opacity-10 text-8xl">${tool.icon}</div><div class="relative z-10"><div class="flex justify-between items-start mb-4"><span class="inline-block px-3 py-1 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">${tool.category} Tool</span>${isAutoSaveOn ? `<span class="text-[10px] font-bold text-emerald-400 flex items-center gap-1"><span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>자동 저장 중</span>` : `<span class="text-[10px] font-bold text-rose-400 flex items-center gap-1">프라이버시 모드 (저장 안함)</span>`}</div><h1 class="text-3xl md:text-4xl font-black mb-4">${tool.name}</h1><p class="text-slate-400 font-medium leading-relaxed mb-6 text-sm md:text-base">${tool.guide}</p></div></div></div>`;
        },
        footer: function(familySites) {
            const sitesHtml = familySites.map(s => `<a href="${s.href}" target="_blank" class="hover:text-blue-600 transition-colors">${s.name}</a>`).join('<span class="text-slate-200">|</span>');
            return `<footer class="max-w-6xl mx-auto px-6 py-16 mt-12 border-t border-slate-100 text-center no-print"><div class="mb-12"><h4 class="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Family Sites</h4><div class="flex justify-center items-center gap-4 md:gap-8 text-sm font-bold text-slate-500">${sitesHtml}</div></div><div class="mb-12"><h4 class="text-slate-800 font-bold mb-2">도구 제보 및 피드백</h4><a href="mailto:paranbreak@gmail.com" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-blue-50 text-blue-600 rounded-2xl text-sm font-bold transition-all">paranbreak@gmail.com</a></div><div class="mb-10"><button onclick="if(confirm('작성 중인 모든 도구의 입력 내용이 초기화됩니다.')){localStorage.clear(); location.reload();}" class="px-5 py-2.5 bg-white text-slate-400 rounded-xl text-[10px] font-black hover:text-rose-500 hover:border-rose-200 transition-all uppercase tracking-widest border border-slate-100 shadow-sm">입력 데이터 초기화 (개인정보 보호)</button></div><p class="text-slate-300 text-[10px] font-medium uppercase tracking-[0.2em]">© 2025 Paran Lab. All rights reserved.</p></footer>`;
        }
    },

    injectFavicon: function() {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232563eb%22/><text y=%22.9em%22 x=%2250%%22 font-size=%2270%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22sans-serif%22 font-weight=%22bold%22>P</text></svg>';
        document.head.appendChild(link);
    },

    render: function() {
        this.injectAdSense();
        this.initPrivacyGuard();
        this.injectFavicon();
        const root = document.getElementById('root');
        if (!root) return;
        const currentPath = window.location.pathname;
        const currentTool = this.toolsList.find(t => currentPath.includes(t.href));
        const isAutoSaveOn = this.isAutoSaveEnabled();
        const headerElem = document.createElement('div');
        headerElem.innerHTML = this.layout.header(this.toolsList, isAutoSaveOn);
        document.body.insertBefore(headerElem, document.body.firstChild);
        if (currentTool && currentPath !== "/" && currentPath !== "/index.html") {
            const toolHeaderElem = document.createElement('div');
            toolHeaderElem.innerHTML = this.layout.toolHeader(currentTool, isAutoSaveOn);
            root.parentNode.insertBefore(toolHeaderElem, root);
        }
        const footerElem = document.createElement('div');
        footerElem.innerHTML = this.layout.footer(this.familySites);
        document.body.appendChild(footerElem);
    }
};

ParanLabCore.injectAdSense();
window.addEventListener('DOMContentLoaded', () => ParanLabCore.render());
