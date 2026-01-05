/**
 * Paran Lab Core Framework v12.0
 * 네비게이션 버그 수정 및 검색 최적화 데이터 보강
 */

const ParanLabCore = {
    toolsList: [
        { id: "ahp", name: "AHP 분석", href: "/ahp/", category: "결정", desc: "여러 후보 중 최선의 선택지를 수학적으로 도출", tags: ["이직", "자동차", "이사", "결혼", "쇼핑"], icon: "📊", guide: "여러 대안을 놓고 고민 중일 때, 주관적 선호를 수치화하여 가장 합리적인 순위를 매겨줍니다." },
        { id: "pros-cons", name: "Pros & Cons", href: "/pros-cons/", category: "결정", desc: "단일 안건의 긍정/부정 요인 가중치 비교", tags: ["투자", "연애", "결혼", "할까말까", "퇴사"], icon: "⚖️", guide: "특정 일을 '할까 말까' 고민될 때, 장점과 단점의 무게를 달아 추진 여부를 결정합니다." },
        { id: "eisenhower", name: "아이젠하워", href: "/eisenhower/", category: "결정", desc: "긴급성과 중요도 기준 우선순위 분류", tags: ["업무", "시간관리", "공부", "번아웃", "할일"], icon: "📅", guide: "할 일이 너무 많아 혼란스러울 때, 긴급도와 중요도에 따라 지금 당장 할 일을 분류합니다." },
        { id: "payoff", name: "Payoff 분석", href: "/payoff/", category: "결정", desc: "노력 대비 결과가 큰 가성비 과제 발굴", tags: ["가성비", "효율", "기획", "사업"], icon: "💰", guide: "최소한의 노력으로 최대의 효과를 낼 수 있는 '가성비' 높은 아이템을 찾아냅니다." },
        { id: "weighted", name: "가중치 점수 모델", href: "/weighted/", category: "결정", desc: "기준별 가중치를 적용한 간편 점수 평가", tags: ["비교", "선택", "평가", "순위"], icon: "📝", guide: "AHP보다 간편하게, 각 기준에 점수를 매겨 여러 후보의 우열을 가립니다." },
        { id: "tree", name: "결정 트리", href: "/tree/", category: "결정", desc: "시나리오별 확률과 기대 가치 분석", tags: ["리스크", "미래예측", "투자", "주식"], icon: "🌳", guide: "미래의 불확실한 상황을 확률로 계산하여, 어떤 선택이 가장 이득인지 예측합니다." },
        { id: "paired", name: "쌍대 비교법", href: "/paired/", category: "결정", desc: "1:1 토너먼트 방식의 절대 순위 도출", tags: ["순위", "우선순위", "단순비교", "메뉴선정"], icon: "⚔️", guide: "모든 항목을 1:1로 맞붙여서, 내 마음속의 진짜 1순위가 무엇인지 찾아냅니다." },
        { id: "cba", name: "비용-편익 분석", href: "/cba/", category: "결정", desc: "투입 비용 대비 경제적 이득 수치화", tags: ["투자", "쇼핑", "창업", "가성비"], icon: "📈", guide: "들어가는 돈과 시간 대비 얻는 가치가 1.0 이상(이득)인지 냉정하게 계산합니다." },
        { id: "force-field", name: "Force Field", href: "/force-field/", category: "결정", desc: "변화의 추진력과 저항력의 균형 분석", tags: ["변화", "습관", "다이어트", "금연"], icon: "🏹", guide: "새로운 변화를 시도할 때, 나를 밀어주는 힘과 가로막는 힘을 분석하여 성공 전략을 짭니다." },
        { id: "swot", name: "SWOT 전략", href: "/swot/", category: "전략", desc: "내외부 환경 분석을 통한 전략 수립", tags: ["창업", "자기분석", "경쟁력", "마케팅"], icon: "🧩", guide: "나의 강점/약점과 외부의 기회/위협을 교차 분석하여 승리하는 전략을 도출합니다." },
        { id: "pest", name: "PEST 분석", href: "/pest/", category: "전략", desc: "정치/경제/사회/기술 거시 환경 분석", tags: ["시장조사", "트렌드", "사업계획", "미래"], icon: "🌐", guide: "내가 통제할 수 없는 거대한 외부 흐름(정치, 경제 등)을 읽고 리스크에 대비합니다." },
        { id: "3c", name: "3C 분석", href: "/3c/", category: "전략", desc: "고객/경쟁사/자사 중심 시장 분석", tags: ["마케팅", "경쟁", "비즈니스", "창업"], icon: "🎯", guide: "고객의 니즈, 경쟁사의 전략, 나의 강점을 분석하여 시장에서의 필승 지점을 찾습니다." },
        { id: "vrio", name: "VRIO 분석", href: "/vrio/", category: "전략", desc: "보유 자원의 내부 핵심 역량 검증", tags: ["강점", "필살기", "차별화", "재능"], icon: "💎", guide: "내가 가진 자원이 남들이 흉내 낼 수 없는 '진짜 필살기'인지 4단계로 검증합니다." },
        { id: "ansoff", name: "안소프 매트릭스", href: "/ansoff/", category: "전략", desc: "제품과 시장 기준 성장 방향 결정", tags: ["확장", "매출증대", "신제품", "성장"], icon: "🚀", guide: "기존 사업을 키울지, 신제품을 만들지, 새로운 시장에 갈지 성장 경로를 결정합니다." },
        { id: "bcg", name: "BCG 매트릭스", href: "/bcg/", category: "전략", desc: "사업 포트폴리오 집중 및 유지 결정", tags: ["정리", "투자배분", "수익성", "선택과집중"], icon: "⭐", guide: "여러 사업 중 어떤 것에 집중 투자하고 어떤 것을 정리해야 할지 명확히 구분합니다." },
        { id: "porter", name: "5 Forces", href: "/porter/", category: "전략", desc: "산업의 경쟁 강도 및 매력도 측정", tags: ["레드오션", "블루오션", "시장진입", "경쟁"], icon: "🛡️", guide: "진입하려는 시장이 얼마나 치열한 곳인지, 수익을 낼 수 있는 구조인지 분석합니다." },
        { id: "value-chain", name: "가치 사슬 분석", href: "/value-chain/", category: "전략", desc: "비즈니스 프로세스별 부가가치 창출 구조 분석", tags: ["운영", "프로세스", "효율화", "원가절감"], icon: "⛓️", guide: "제품이나 서비스가 고객에게 전달되는 전 과정을 분석하여, 어디서 가치가 만들어지고 어디서 비용이 새는지 파악합니다." },
        { id: "pmi", name: "PMI 아이디어", href: "/pmi/", category: "기획", desc: "아이디어의 장점/단점/흥미로운 점 평가", tags: ["아이디어", "창의력", "검토", "기획"], icon: "💡", guide: "아이디어를 단순히 좋다/나쁘다가 아니라 '흥미로운 잠재력'까지 포함해 다각도로 봅니다." },
        { id: "5whys", name: "5 Whys 분석", href: "/5whys/", category: "기획", desc: "질문 반복을 통한 문제의 근본 원인 파악", tags: ["문제해결", "원인분석", "실수", "반성"], icon: "❓", guide: "문제의 겉모습에 속지 않고, '왜?'라는 질문을 5번 던져 진짜 뿌리 원인을 찾아냅니다." },
        { id: "smart", name: "SMART 목표", href: "/smart/", category: "기획", desc: "막연한 목표를 실행 가능한 계획으로 구체화", tags: ["목표설정", "계획", "성공", "다이어트"], icon: "📍", guide: "막연한 소망을 구체적이고 측정 가능한 '실행 계획'으로 필터링하여 달성률을 높입니다." },
        { id: "scamper", name: "SCAMPER 기법", href: "/scamper/", category: "기획", desc: "7가지 질문을 통한 창의적 아이디어 확장", tags: ["발명", "개선", "브레인스토밍", "혁신"], icon: "🔧", guide: "기존의 것을 뒤집고, 합치고, 바꿔보며 생각의 한계를 깨는 7가지 질문을 던집니다." },
        { id: "logic-tree", name: "로직 트리", href: "/logic-tree/", category: "기획", desc: "복잡한 문제를 논리적으로 하위 분해", tags: ["논리", "구조화", "정리", "문제해결"], icon: "🌿", guide: "거대한 문제를 작은 단위로 쪼개어, 지금 당장 실행할 수 있는 구체적인 액션을 찾습니다." },
        { id: "6hats", name: "여섯 색깔 모자", href: "/6hats/", category: "기획", desc: "관점을 분리하여 다각도로 사고하기", tags: ["회의", "토론", "다각도", "협업"], icon: "🎩", guide: "감정, 비판, 낙관 등 6가지 관점의 모자를 번갈아 쓰며 편향 없는 결론을 내립니다." },
        { id: "affinity", name: "친화도법", href: "/affinity/", category: "기획", desc: "흩어진 아이디어를 그룹화하여 핵심 도출", tags: ["정리", "포스트잇", "그룹화", "브레인스토밍"], icon: "📎", guide: "어지럽게 널린 수많은 아이디어를 비슷한 것끼리 묶어 핵심 키워드를 뽑아냅니다." },
        { id: "mandalart", name: "만다라트", href: "/mandalart/", category: "기획", desc: "핵심 목표 중심의 64개 세부 계획 수립", tags: ["오타니", "계획표", "목표달성", "새해다짐"], icon: "🕸️", guide: "하나의 핵심 목표를 8개의 세부 목표와 64개의 실행 과제로 확장하는 강력한 계획표입니다." },
        { id: "wheel", name: "인생의 수레바퀴", href: "/wheel/", category: "자기계발", desc: "삶의 8대 영역 균형 상태 점검", tags: ["밸런스", "라이프스타일", "점검", "행복"], icon: "🎡", guide: "건강, 재정, 관계 등 삶의 주요 영역을 점검하여 내가 놓치고 있는 균형을 시각화합니다." },
        { id: "ikigai", name: "이키가이 찾기", href: "/ikigai/", category: "자기계발", desc: "좋아하고 잘하는 일의 교집합 발견", tags: ["진로", "직업", "행복", "적성"], icon: "🌸", guide: "좋아하는 일, 잘하는 일, 돈 되는 일, 세상이 원하는 일의 교집합인 '삶의 목적'을 찾습니다." },
        { id: "johari", name: "조하리의 창", href: "/johari/", category: "자기계발", desc: "나와 타인의 인식을 통한 소통 분석", tags: ["인간관계", "심리", "소통", "성격"], icon: "🪟", guide: "내가 아는 나와 남이 보는 나를 비교하여, 인간관계의 소통 문제를 진단합니다." },
        { id: "okr", name: "OKR 설정", href: "/okr/", category: "자기계발", desc: "도전적 목표와 수치적 핵심 결과 관리", tags: ["성과", "구글", "목표달성", "비즈니스"], icon: "🎯", guide: "가슴 뛰는 목표(O)와 이를 증명할 수 있는 수치적 결과(KR)를 정해 성과를 관리합니다." },
        { id: "grow", name: "GROW 모델", href: "/grow/", category: "자기계발", desc: "4단계 질문을 통한 셀프 코칭 가이드", tags: ["코칭", "상담", "변화", "멘토링"], icon: "🌱", guide: "목표, 현실, 대안, 의지의 4단계 질문에 스스로 답하며 문제 해결의 실마리를 찾습니다." },
        { id: "time-audit", name: "시간 기록 분석", href: "/time-audit/", category: "자기계발", desc: "하루 시간 사용의 효율성 및 낭비 점검", tags: ["시간관리", "갓생", "효율", "습관"], icon: "⏳", guide: "나의 24시간이 생산적인지, 소모적인지 시각화하여 시간 사용의 우선순위를 조정합니다." }
    ],

    scenariosList: [
        { id: "career", title: "커리어 전환", subtitle: "철수의 인생 2막: 대기업 vs 스타트업", icon: "💼", story: "10년 차 과장 철수는 연봉 8,500만 원의 안정적인 대기업에 재직 중입니다. 하지만 왕복 2시간 30분의 출퇴근 거리와 보수적인 문화로 인해 삶의 질이 급격히 떨어졌습니다. 최근 집 앞 10분 거리의 스타트업에서 연봉 7,800만 원과 스톡옵션을 제안받았습니다. 성장이냐 안정냐, 철수의 선택은 무엇일까요?", data: ["현재 연봉: 8,500만원", "제안 연봉: 7,800만원 + 옵션", "출퇴근 시간: 150분 vs 20분", "조직 문화: 보수적 vs 혁신적"], academic: { theory: "Herzberg(1959) 동기-위생 이론", desc: "연봉은 불만족을 방지하는 '위생 요인'일 뿐이며, 성취감과 성장이 '동기 요인'으로서 장기적 행복을 결정함을 입증한 연구입니다.", paper: "Herzberg, F. (1959). The Motivation to Work. John Wiley & Sons." }, tools: ["ahp", "pros-cons", "grow"] },
        { id: "startup", title: "창업 타당성", subtitle: "영희의 유기농 베이커리 도전기", icon: "🚀", story: "베테랑 제빵사 영희는 신도시 아파트 단지에 유기농 빵집 창업을 꿈꿉니다. 하지만 인근에 대형 프랜차이즈 빵집 2곳이 이미 성업 중입니다. 영희는 '글루텐 프리'라는 차별화로 승부하려 하지만, 높은 원재료비와 임대료 부담 사이에서 수익성을 냉정하게 분석해야 합니다.", data: ["임대료: 월 350만원", "원가율: 일반 대비 3배", "경쟁사: 대형 프랜차이즈 2개", "차별화: 유기농/글루텐 프리"], academic: { theory: "Michael Porter(1979) 5 Forces 모델", desc: "산업의 매력도를 결정하는 5가지 경쟁 압력을 분석하여 신규 진입자가 수익을 낼 수 있는 구조인지 파악하는 경영학의 고전 이론입니다.", paper: "Porter, M. E. (1979). How Competitive Forces Shape Strategy. Harvard Business Review." }, tools: ["swot", "porter", "3c", "value-chain"] },
        { id: "shopping", title: "합리적 소비", subtitle: "민수의 첫 내 집 마련: 아파트 vs 빌라", icon: "💰", story: "결혼을 앞둔 민수는 5억 원의 예산으로 신혼집을 찾고 있습니다. 직장 근처의 낡은 18평 아파트와 차로 40분 거리의 넓은 32평 신축 빌라 사이에서 갈등 중입니다. 출퇴근의 편의성이냐, 주거의 쾌적함과 향후 자산 가치냐. 민수의 가치관을 수치화해야 합니다.", data: ["예산: 5억원", "아파트: 18평/노후/직주근접", "빌라: 32평/신축/원거리", "예상 시세차익 분석 필요"], academic: { theory: "Lancaster(1966) 소비자 속성 이론", desc: "소비자는 상품 자체가 아니라 상품이 가진 '속성(평수, 위치 등)'의 묶음을 구매하며, 각 속성의 효용을 극대화하는 선택을 한다는 이론입니다.", paper: "Lancaster, K. J. (1966). A New Approach to Consumer Theory. Journal of Political Economy." }, tools: ["ahp", "cba", "weighted"] },
        { id: "burnout", title: "번아웃 탈출", subtitle: "김 팀장의 업무 과부하 해결", icon: "📅", story: "마케팅팀 김 팀장은 매일 30개가 넘는 할 일 목록에 치여 삽니다. 갑작스러운 보고서 지시와 팀원들의 업무 대행으로 정작 중요한 캠페인 기획은 손도 못 대고 있습니다. 에너지는 고갈되었고, 우선순위 재정립이 시급한 상황입니다.", data: ["일일 업무량: 30개 이상", "야근 빈도: 주 5회", "핵심 과제: 캠페인 기획", "방해 요소: 수시 슬랙 메시지"], academic: { theory: "Stephen Covey 시간 관리 매트릭스", desc: "긴급함(Urgency)과 중요함(Importance)을 기준으로 업무를 4분할하여, 삶의 질을 결정하는 '중요하지만 긴급하지 않은' 영역을 확보하는 원칙입니다.", paper: "Covey, S. R. (1989). The 7 Habits of Highly Effective People." }, tools: ["eisenhower", "time-audit", "payoff"] }
    ],

    familySites: [{ name: "FactBomber", href: "https://factbomber.kr" }],

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
            return `<header class="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-[9999] no-print"><div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"><a href="/" class="text-2xl font-black text-blue-600 tracking-tighter">PARAN LAB</a><div class="flex items-center gap-4"><div class="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100"><span class="hidden md:inline text-[10px] font-black ${isAutoSaveOn ? 'text-blue-600' : 'text-rose-500'} uppercase">${isAutoSaveOn ? 'Auto-Save ON' : 'Privacy Mode'}</span><button onclick="ParanLabCore.toggleAutoSave()" class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${isAutoSaveOn ? 'bg-blue-600' : 'bg-slate-300'}"><span class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${isAutoSaveOn ? 'translate-x-5' : 'translate-x-1'}"></span></button></div><div class="relative group"><button class="flex items-center gap-1 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all">전체 도구</button><div class="absolute right-0 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-y-auto max-h-[80vh] z-[10000]">${menuHtml}</div></div></div></div></header>`;
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
window.addEventListener('load', () => ParanLabCore.render());
