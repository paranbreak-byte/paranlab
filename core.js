/**
 * Paran Lab Master Core v3.0
 * 인프라: 애드센스(ca-pub-6902579674102145), 메일(paranbreak@gmail.com), 자매사(factbomber.kr)
 */

const ParanLabCore = {
    config: {
        adsenseId: "ca-pub-6902579674102145",
        contactEmail: "paranbreak@gmail.com",
        sisterSite: "https://factbomber.kr",
        baseKey: "paranlab-"
    },

    // 1. 31개 도구 마스터 리스트
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
        { id: 'grow', name: 'GROW 모델', icon: '🌱', category: 'Coaching', href: '/grow/' },
        { id: 'paired', name: '쌍대 비교', icon: '⚔️', category: 'Decision', href: '/paired/' }
    ],

    // 2. 10개 시나리오 마스터 데이터 (Payload 포함)
    scenariosList: [
        {
            id: 'career', icon: '💼', title: 'Career', subtitle: '철수의 인생 2막: 대기업 vs 스타트업',
            story: '10년 차 과장 철수는 안정적인 대기업과 혁신적인 스타트업 사이에서 고민 중입니다.',
            data: ['현재 연봉: 8,500만원', '제안 연봉: 7,800만원 + 스톡옵션', '출퇴근 시간: 왕복 150분 vs 20분'],
            academic: { desc: "Herzberg의 '동기-위생 이론'에 따르면 연봉은 불만족 방지 요인일 뿐이며, 성취감이 장기적 행복을 결정합니다.", paper: "Herzberg (1959)" },
            tools: ['ahp', 'pros-cons', 'grow'],
            payloads: {
                ahp: { goal: "철수의 최적 이직처 결정", criteria: ["연봉", "거리", "성장성", "문화"], alternatives: ["대기업", "스타트업"], comparisons: {"0-1": -3, "0-2": -2, "0-3": 1, "1-2": -2, "1-3": 4, "2-3": 5}, scores: {"0-0": 9, "1-0": 7, "0-1": 2, "1-1": 9, "0-2": 4, "1-2": 9, "0-3": 7, "1-3": 5} },
                'pros-cons': { subject: "스타트업 이직 추진", pros: [{text: "출퇴근 130분 단축", score: 10}, {text: "스톡옵션 기회", score: 8}], cons: [{text: "연봉 700만원 삭감", score: 6}, {text: "생존 불확실성", score: 9}] },
                grow: { goal: "스타트업 핵심 인재 안착", reality: "대기업 방식 익숙함", options: "기술 스택 학습", will: "오늘 인강 결제" }
            }
        },
        {
            id: 'burnout', icon: '📅', title: 'Productivity', subtitle: '김 팀장의 업무 과부하 해결',
            story: '매일 30개가 넘는 할 일에 치이는 김 팀장. 에너지는 고갈되었고 우선순위 재정립이 시급합니다.',
            data: ['일일 업무량: 30개 이상', '야근 빈도: 주 5회', '방해 요소: 수시 슬랙 메시지'],
            academic: { desc: "Stephen Covey의 '시간 관리 매트릭스'는 긴급함보다 중요도에 집중하여 삶의 질을 높입니다.", paper: "The 7 Habits of Highly Effective People" },
            tools: ['eisenhower', 'time-audit', 'payoff'],
            payloads: {
                eisenhower: { tasks: [{text: "보고서 작성", urgent: 10, important: 10}, {text: "캠페인 기획", urgent: 4, important: 10}, {text: "슬랙 응대", urgent: 9, important: 2}] },
                'time-audit': { acts: [{name: "회의", h: 6, cat: "productive"}, {name: "메신저", h: 3, cat: "waste"}] },
                payoff: { tasks: [{text: "캠페인 기획", effort: 8, impact: 10}, {text: "오타 수정", effort: 2, impact: 3}] }
            }
        },
        {
            id: 'startup', icon: '🚀', title: 'Startup', subtitle: '영희의 유기농 베이커리 도전기',
            story: '신도시 아파트 단지에 유기농 빵집을 차리려는 영희. 대형 프랜차이즈 사이에서 살아남을 전략이 필요합니다.',
            data: ['임대료: 월 350만원', '원가율: 일반의 3배', '경쟁사: 프랜차이즈 2곳'],
            academic: { desc: "Michael Porter의 '5 Forces 모델'은 산업의 매력도와 경쟁 압력을 분석하여 수익 구조를 파악합니다.", paper: "Porter (1979)" },
            tools: ['swot', 'porter', 'value-chain'],
            payloads: {
                swot: { subject: "영희의 빵집 전략", data: { s: "유기농 레시피", w: "자본 부족", o: "신도시 입주", t: "프랜차이즈" }, strategies: { so: "신도시 주부층 공략", wt: "테이크아웃 특화" } },
                porter: { scores: { rivalry: 9, entrants: 7, substitutes: 4, suppliers: 8, buyers: 5 } },
                'value-chain': { data: { inbound: "유기농 밀가루 직거래", ops: "당일 생산", marketing: "인스타 지역 광고" } }
            }
        },
        {
            id: 'goal', icon: '📍', title: 'Goal Setting', subtitle: '지민이의 영어 정복 1년 설계',
            story: '취준생 지민이는 매번 영어 공부에 실패합니다. 작심삼일을 끝낼 정교한 지도가 필요합니다.',
            data: ['현재 수준: 토익 700점', '최종 목표: 오픽 AL 등급', '가용 시간: 일일 1시간'],
            academic: { desc: "Locke & Latham의 '목표 설정 이론'에 따르면 구체적이고 도전적인 목표가 수행 능력을 향상시킵니다.", paper: "A Theory of Goal Setting (1990)" },
            tools: ['smart', 'mandalart', 'okr'],
            payloads: {
                smart: { goal: "영어 회화 마스터", data: { s: "오픽 AL 획득", m: "매일 쉐도잉 30분", a: "퇴근 후 1시간 확보", r: "이직 필수 역량", t: "12월 31일까지" } },
                mandalart: { mainGoal: "오픽 AL 달성", subGoals: ["쉐도잉", "단어암기", "화상영어", "미드시청", "발음교정", "문법정리", "자신감", "시험전략"] },
                okr: { obj: "글로벌 인재 소통 능력", krs: ["오픽 AL 획득", "뉴스 90% 이해", "화상영어 100회"] }
            }
        },
        {
            id: 'shopping', icon: '💰', title: 'Shopping', subtitle: '민수의 첫 내 집 마련: 아파트 vs 빌라',
            story: '5억 원의 예산으로 신혼집을 찾는 민수. 직주근접 아파트와 넓은 신축 빌라 사이에서 갈등 중입니다.',
            data: ['예산: 5억원', '아파트: 18평/노후/직주근접', '빌라: 32평/신축/원거리'],
            academic: { desc: "Lancaster의 '소비자 속성 이론'에 따르면 소비자는 상품의 속성 묶음에서 효용을 극대화합니다.", paper: "Journal of Political Economy (1966)" },
            tools: ['ahp', 'cba', 'weighted'],
            payloads: {
                ahp: { goal: "민수의 신혼집 결정", criteria: ["편의성", "쾌적함", "자산가치", "인프라"], alternatives: ["아파트", "빌라"], comparisons: {"0-1": 2, "0-2": 4, "0-3": 1, "1-2": 3, "1-3": 2, "2-3": -2}, scores: {"0-0": 9, "1-0": 3, "0-1": 4, "1-1": 9, "0-2": 8, "1-2": 4, "0-3": 7, "1-3": 5} },
                cba: { costs: [{text: "대출 이자", value: 80}, {text: "좁은 평수", value: 60}], benefits: [{text: "출퇴근 시간 절약", value: 95}, {text: "시세 차익", value: 85}] },
                weighted: { alts: ["아파트", "빌라"], crits: [{text: "위치", w: 9}, {text: "평수", w: 6}, {text: "투자성", w: 8}], scores: {"0-0": 9, "1-0": 3, "0-1": 4, "1-1": 9, "0-2": 8, "1-2": 4} }
            }
        },
        // 링크 추천형 시나리오 (데이터셋 확장 가능)
        { id: 'creative', icon: '💡', title: 'Creative', subtitle: '이 대리의 사내 복지 혁신 아이디어', story: '인사팀 이 대리는 사내 복지 포인트를 구독 서비스로 전환하려 합니다.', data: ['예상 비용: 인당 3만원', '직원 선호도: 92% 찬성'], academic: { desc: "에드워드 드 보노의 '수평적 사고'는 기존 논리를 깨고 새로운 관점을 생성합니다.", paper: "Six Thinking Hats (1985)" }, tools: ['scamper', '6hats', 'pmi'], payloads: {} },
        { id: 'problem', icon: '❓', title: 'Problem Solving', subtitle: '박 사장의 식당 매출 급감 원인 분석', story: '7년 차 레스토랑 박 사장은 최근 매출이 40% 급감한 이유를 찾아야 합니다.', data: ['매출 변화율: -40%', '고객 피드백: 맛 변화'], academic: { desc: "도요타의 '5 Whys' 기법은 현상 뒤에 숨은 근본 원인을 제거합니다.", paper: "Toyota Production System" }, tools: ['5whys', 'logic-tree', 'force-field'], payloads: {} },
        { id: 'purpose', icon: '🌸', title: 'Self-Reflection', subtitle: "40대 가장 성진 씨의 '진짜 나' 찾기", story: '경제적으로 안정되었지만 삶의 공허함을 느끼는 성진 씨의 내면 탐색.', data: ['행복도: 4/10', '과거 흥미: 미술, 여행'], academic: { desc: "마틴 셀리그만의 'PERMA 모델'은 행복의 5가지 요소를 과학적으로 측정합니다.", paper: "Flourish (2011)" }, tools: ['ikigai', 'wheel', 'johari'], payloads: {} },
        { id: 'risk', icon: '🌳', title: 'Risk Management', subtitle: '투자자 최 씨의 하락장 대응 전략', story: '반도체 주식 손실 중인 최 씨. 손절이냐 추매냐, 플랜 B가 필요합니다.', data: ['손실액: 1,500만원', '하락 확률: 60%'], academic: { desc: "카네만의 '전망 이론'은 손실에 민감한 심리적 편향을 분석합니다.", paper: "Kahneman & Tversky (1979)" }, tools: ['tree', 'vrio', 'pest'], payloads: {} },
        { id: 'team', icon: '🪟', title: 'Teamwork', subtitle: '프로젝트 팀의 갈등 해결과 협업', story: '개발자와 기획자의 대립으로 멈춰버린 프로젝트를 다시 가동해야 합니다.', data: ['갈등 지점: 마감 vs 기능', '합의율: 30% 미만'], academic: { desc: "'조하리의 창' 모델은 피드백을 통해 소통의 사각지대를 줄입니다.", paper: "Luft & Ingham (1955)" }, tools: ['johari', 'affinity', '6hats'], payloads: {} }
    ],

    init() {
        this.renderHeader();
        this.renderFooter();
        this.injectAdSense();
    },

    // 데이터 토스 시스템
    tossData(toolId, scenarioId) {
        const scenario = this.scenariosList.find(s => s.id === scenarioId);
        if (scenario && scenario.payloads[toolId]) {
            const data = scenario.payloads[toolId];
            data.scenarioContext = { title: scenario.subtitle, origin: scenario.title };
            localStorage.setItem(this.config.baseKey + toolId, JSON.stringify(data));
            localStorage.setItem(this.config.baseKey + 'autosave', 'true');
        }
        window.location.href = '/' + toolId + '/';
    },

    // 애드센스 동적 주입 (필요 시 호출)
    injectAdSense() {
        const ads = document.querySelectorAll('.adsbygoogle-placeholder');
        ads.forEach(div => {
            div.innerHTML = `<ins class="adsbygoogle" style="display:block" data-ad-client="${this.config.adsenseId}" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
            (adsbygoogle = window.adsbygoogle || []).push({});
        });
    },

    renderHeader() {
        const header = document.getElementById('header-root');
        if (header) {
            header.innerHTML = `
                <header class="bg-white border-b no-print">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <a href="/" class="text-2xl font-black text-blue-600 tracking-tighter">PARAN LAB</a>
                        <nav class="flex gap-6 text-sm font-bold text-slate-600">
                            <a href="/" class="hover:text-blue-600">도구함</a>
                            <a href="/scenarios/" class="hover:text-blue-600">시나리오</a>
                        </nav>
                    </div>
                </header>`;
        }
    },

    renderFooter() {
        const footer = document.getElementById('footer-root');
        if (footer) {
            footer.innerHTML = `
                <footer class="bg-slate-100 border-t mt-20 py-12 no-print">
                    <div class="container mx-auto px-6">
                        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div class="text-center md:text-left">
                                <p class="text-slate-900 font-black text-lg">PARAN LAB</p>
                                <p class="text-slate-500 text-sm mt-1">데이터 기반 의사결정 과학 플랫폼</p>
                            </div>
                            <div class="flex flex-col items-center md:items-end gap-2">
                                <p class="text-slate-600 text-sm font-bold">Contact: <a href="mailto:${this.config.contactEmail}" class="text-blue-600">${this.config.contactEmail}</a></p>
                                <p class="text-slate-400 text-xs">Sister Site: <a href="${this.config.sisterSite}" target="_blank" class="hover:underline">factbomber.kr</a></p>
                            </div>
                        </div>
                        <div class="mt-10 pt-6 border-t border-slate-200 text-center">
                            <p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest">© 2024 PARAN LAB. ALL RIGHTS RESERVED.</p>
                        </div>
                    </div>
                </footer>`;
        }
    },

    // 공통 유틸리티
    saveAsImage(targetId) {
        const el = document.getElementById(targetId);
        html2canvas(el, { useCORS: true, scale: 2 }).then(canvas => {
            const link = document.createElement('a');
            link.download = `paranlab-report-${new Date().getTime()}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    },

    downloadHTML(targetId) {
        const content = document.getElementById(targetId).innerHTML;
        const blob = new Blob([content], { type: 'text/html' });
        const link = document.createElement('a');
        link.download = `paranlab-report.html`;
        link.href = URL.createObjectURL(blob);
        link.click();
    },

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => alert('결과가 클립보드에 복사되었습니다.'));
    }
};

document.addEventListener('DOMContentLoaded', () => ParanLabCore.init());
