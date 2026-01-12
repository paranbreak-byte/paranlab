/**
 * Paran Lab Master Core v7.8.5
 * 10개 시나리오 및 모든 도구 페이로드(GROW 포함) 풀 복구 버전
 */

window.ParanLabCore = {
    config: {
        adsenseId: "ca-pub-6902579674102145",
        contactEmail: "paranbreak@gmail.com",
        sisterSite: "https://factbomber.kr",
        sisterSiteName: "팩트폭격연구소",
        baseKey: "paranlab-"
    },

    // 31개 도구 마스터 리스트
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

    // 10개 시나리오 마스터 리스트
    scenariosList: [
        { id: 'career', icon: '💼', title: 'Career', subtitle: '철수의 인생 2막: 대기업 vs 스타트업', story: '10년 차 과장 철수는 안정적인 대기업과 혁신적인 스타트업 사이에서 고민 중입니다.', data: ['현재 연봉: 8,500만원', '제안 연봉: 7,800만원 + 스톡옵션', '출퇴근 시간: 왕복 150분 vs 20분'], academic: { desc: "Herzberg의 '동기-위생 이론'에 따르면 연봉은 불만족 방지 요인일 뿐이며, 성취감이 장기적 행복을 결정합니다.", paper: "Herzberg (1959)" }, tools: ['ahp', 'pros-cons', 'grow'] },
        { id: 'burnout', icon: '📅', title: 'Productivity', subtitle: '김 팀장의 업무 과부하 해결', story: '매일 30개가 넘는 할 일에 치이는 김 팀장. 에너지는 고갈되었고 우선순위 재정립이 시급합니다.', data: ['일일 업무량: 30개 이상', '야근 빈도: 주 5회', '방해 요소: 수시 슬랙 메시지'], academic: { desc: "Stephen Covey의 '시간 관리 매트릭스'는 긴급함보다 중요도에 집중하여 삶의 질을 높입니다.", paper: "The 7 Habits of Highly Effective People" }, tools: ['eisenhower', 'time-audit', 'payoff'] },
        { id: 'startup', icon: '🚀', title: 'Startup', subtitle: '영희의 유기농 베이커리 도전기', story: '신도시 아파트 단지에 유기농 빵집을 차리려는 영희. 대형 프랜차이즈 사이에서 살아남을 전략이 필요합니다.', data: ['임대료: 월 350만원', '원가율: 일반의 3배', '경쟁사: 프랜차이즈 2곳'], academic: { desc: "Michael Porter의 '5 Forces 모델'은 산업의 매력도와 경쟁 압력을 분석하여 수익 구조를 파악합니다.", paper: "Porter (1979)" }, tools: ['swot', 'porter', 'value-chain'] },
        { id: 'goal', icon: '📍', title: 'Goal Setting', subtitle: '지민이의 영어 정복 1년 설계', story: '취준생 지민이는 매번 영어 공부에 실패합니다. 작심삼일을 끝낼 정교한 지도가 필요합니다.', data: ['현재 수준: 토익 700점', '최종 목표: 오픽 AL 등급', '가용 시간: 일일 1시간'], academic: { desc: "Locke & Latham의 '목표 설정 이론'에 따르면 구체적이고 도전적인 목표가 수행 능력을 향상시킵니다.", paper: "A Theory of Goal Setting (1990)" }, tools: ['smart', 'mandalart', 'okr'] },
        { id: 'shopping', icon: '💰', title: 'Shopping', subtitle: '민수의 첫 내 집 마련: 아파트 vs 빌라', story: '5억 원의 예산으로 신혼집을 찾는 민수. 직주근접 아파트와 넓은 신축 빌라 사이에서 갈등 중입니다.', data: ['예산: 5억원', '아파트: 18평/노후/직주근접', '빌라: 32평/신축/원거리'], academic: { desc: "Lancaster의 '소비자 속성 이론'에 따르면 소비자는 상품의 속성 묶음에서 효용을 극대화합니다.", paper: "Journal of Political Economy (1966)" }, tools: ['ahp', 'cba', 'weighted'] },
        { id: 'creative', icon: '💡', title: 'Creative', subtitle: '이 대리의 사내 복지 혁신 아이디어', story: '인사팀 이 대리는 사내 복지 포인트를 구독 서비스로 전환하려 합니다.', data: ['예상 비용: 인당 3만원', '직원 선호도: 92% 찬성'], academic: { desc: "에드워드 드 보노의 '수평적 사고'는 기존 논리를 깨고 새로운 관점을 생성합니다.", paper: "Six Thinking Hats (1985)" }, tools: ['scamper', '6hats', 'pmi'] },
        { id: 'problem', icon: '❓', title: 'Problem Solving', subtitle: '박 사장의 식당 매출 급감 원인 분석', story: '7년 차 레스토랑 박 사장은 최근 매출이 40% 급감한 이유를 찾아야 합니다.', data: ['매출 변화율: -40%', '고객 피드백: 맛 변화'], academic: { desc: "도요타의 '5 Whys' 기법은 현상 뒤에 숨은 근본 원인을 제거합니다.", paper: "Toyota Production System" }, tools: ['5whys', 'logic-tree', 'force-field'] },
        { id: 'purpose', icon: '🌸', title: 'Self-Reflection', subtitle: "40대 가장 성진 씨의 '진짜 나' 찾기", story: '경제적으로 안정되었지만 삶의 공허함을 느끼는 성진 씨의 내면 탐색.', data: ['행복도: 4/10', '과거 흥미: 미술, 여행'], academic: { desc: "마틴 셀리그만의 'PERMA 모델'은 행복의 5가지 요소를 과학적으로 측정합니다.", paper: "Flourish (2011)" }, tools: ['ikigai', 'wheel', 'johari'] },
        { id: 'risk', icon: '🌳', title: 'Risk Management', subtitle: '투자자 최 씨의 하락장 대응 전략', story: '반도체 주식 손실 중인 최 씨. 손절이냐 추매냐, 플랜 B가 필요합니다.', data: ['손실액: 1,500만원', '하락 확률: 60%'], academic: { desc: "카네만의 '전망 이론'은 손실에 민감한 심리적 편향을 분석합니다.", paper: "Kahneman & Tversky (1979)" }, tools: ['tree', 'vrio', 'pest'] },
        { id: 'team', icon: '🪟', title: 'Teamwork', subtitle: '프로젝트 팀의 갈등 해결과 협업', story: '개발자와 기획자의 대립으로 멈춰버린 프로젝트를 다시 가동해야 합니다.', data: ['갈등 지점: 마감 vs 기능', '합의율: 30% 미만'], academic: { desc: "'조하리의 창' 모델은 피드백을 통해 소통의 사각지대를 줄입니다.", paper: "Luft & Ingham (1955)" }, tools: ['johari', 'affinity', '6hats'] }
    ],

    // 시나리오별 도구 페이로드 (전체 복구)
    payloads: {
        career: {
            ahp: { goal: "철수의 최적 이직처 결정", criteria: ["연봉/복지", "출퇴근거리", "성장가능성"], alternatives: ["현재 대기업", "핀테크 스타트업"], criteriaComparisons: {"0-1": -3, "0-2": -5, "1-2": 2}, alternativeComparisons: {0:{"0-1":-7}, 1:{"0-1": 8}, 2:{"0-1": 9}} },
            'pros-cons': { subject: "스타트업 이직 추진", pros: [{id:1, text: "출퇴근 130분 단축", score: 10}, {id:2, text: "스톡옵션 기회", score: 8}], cons: [{id:1, text: "연봉 700만원 삭감", score: 6}, {id:2, text: "생존 불확실성", score: 9}] },
            grow: { goal: "스타트업 핵심 인재 안착", reality: "대기업 방식 익숙함", options: "기술 스택 학습, 사내 스터디", will: "오늘 인강 결제" }
        },
        burnout: {
            eisenhower: { subject: "김 팀장의 업무 우선순위", tasks: [{id:1, text: "대표님 보고", urgent: 10, important: 10}, {id:2, text: "팀원 면담", urgent: 4, important: 9}, {id:3, text: "슬랙 응대", urgent: 9, important: 2}] },
            'time-audit': { subject: "김 팀장의 시간 감사", acts: [{id:1, name: "회의", h: 6, cat: "productive"}, {id:2, name: "메신저", h: 3, cat: "waste"}] },
            payoff: { subject: "김 팀장의 업무 효율", tasks: [{id:1, text: "캠페인 기획", effort: 8, impact: 10}, {id:2, text: "오타 수정", effort: 2, impact: 3}] }
        },
        startup: {
            swot: { subject: "영희의 빵집 전략", data: { s: "유기농 레시피", w: "자본 부족", o: "신도시 입주", t: "프랜차이즈" }, strategies: { so: "신도시 주부층 공략", wt: "테이크아웃 특화" } },
            porter: { subject: "신도시 베이커리 시장", scores: { rivalry: 9, entrants: 7, substitutes: 4, suppliers: 8, buyers: 5 } },
            'value-chain': { subject: "영희의 빵집 프로세스", activities: { inbound: "유기농 밀가루 직거래", ops: "당일 생산", marketing: "인스타 지역 광고" } }
        },
        goal: {
            smart: { goal: "영어 회화 마스터", s: "오픽 AL 획득", m: "주 3회 화상영어", a: "퇴근 후 1시간", r: "해외 파견", t: "6개월 내" },
            mandalart: { mainGoal: "영어 정복", subGoals: ["회화", "단어", "청취", "독해", "문법", "자격증", "습관", "환경"], actions: Array(8).fill(["연습1", "연습2", "연습3", "연습4", "연습5", "연습6", "연습7", "연습8"]) },
            okr: { obj: "글로벌 인재로 도약", krs: ["오픽 AL 달성", "기술 블로그 영문 포스팅 10개", "영어 미팅 주도 5회"] }
        },
        shopping: {
            ahp: { goal: "민수의 최적 신혼집 선정", criteria: ["매매가격", "직주근접", "단지규모"], alternatives: ["역세권 아파트", "숲세권 빌라"], criteriaComparisons: {"0-1": 4, "0-2": 2, "1-2": -3}, alternativeComparisons: {0:{"0-1":-9}, 1:{"0-1":8}, 2:{"0-1":5}} },
            cba: { subject: "역세권 아파트 매수", costs: [{id:1, text: "대출 이자", value: 70}], benefits: [{id:1, text: "시간 절약", value: 90}] },
            weighted: { subject: "신혼집 최종 평가", alts: ["아파트", "빌라"], crits: [{id:1, text: "가격", w: 10}, {id:2, text: "교통", w: 9}], scores: {"0-0": 4, "0-1": 10, "1-0": 9, "1-1": 3} }
        },
        creative: {
            scamper: { subject: "복지 포인트 혁신", ideas: { s: "바우처로 대체", c: "검진과 결합", a: "마일리지 응용", m: "단위 세분화", p: "상생 결제", e: "증빙 제거", r: "직원 제안형" } },
            '6hats': { subject: "구독형 복지 도입", hats: { white: "인당 3만원", red: "기대됨", black: "예산 초과 우려", yellow: "만족도 상승", green: "포인트 공유제", blue: "시범 운영 결정" } },
            pmi: { subject: "복지 구독 서비스", plus: "다양성 확보", minus: "관리 복잡", interesting: "데이터 분석 가능" }
        },
        problem: {
            '5whys': { problem: "매출 40% 급감", whys: ["맛이 변함", "주방장 교체", "임금 갈등", "수익 악화", "경영 미숙"], rootCause: "경영진 소통 부재", action: "정기 면담 실시" },
            'logic-tree': { mainIssue: "매출 하락 원인", branches: [{id:1, text: "객수 감소", sub: ["경쟁 심화", "접근성 저하"]}, {id:2, text: "객단가 하락", sub: ["할인 남발"]}] },
            'force-field': { goal: "메뉴 가격 인상", driving: [{id:1, text: "원가 상승", score: 9}], restraining: [{id:1, text: "고객 이탈", score: 8}] }
        },
        purpose: {
            ikigai: { subject: "성진의 인생 2막", love: "지식 나눔", good: "디자인 실무", need: "주니어 멘토링", paid: "강의 수익", ikigai: "디자인 멘토" },
            wheel: { subject: "성진의 삶의 균형", scores: { "건강": 3, "커리어": 9, "재정": 8, "가족": 4, "관계": 5, "성장": 7, "취미": 2, "환경": 6 } },
            johari: { subject: "성진의 소통 스타일", selectedSelf: ["똑똑한", "논리적인"], selectedOthers: ["조용한", "믿음직한"] }
        },
        risk: {
            tree: { goal: "하락장 대응", options: [{id:1, name: "추매", successProb: 40, successVal: 5000, failVal: -2000}, {id:2, name: "손절", successProb: 100, successVal: 1500, failVal: 1500}] },
            vrio: { resource: "독자적 알고리즘", answers: { v: true, r: true, i: true, o: true } },
            pest: { subject: "반도체 시장 환경", data: { p: "보조금 정책", e: "금리 인상", s: "디지털 가속", t: "AI 칩 혁신" } }
        },
        team: {
            johari: { subject: "팀 내 소통 진단", selectedSelf: ["열정적인"], selectedOthers: ["냉철한"] },
            affinity: { subject: "협업 개선 아이디어", ideas: ["슬랙 활용", "주간 회의"], groups: { 0: "도구", 1: "미팅" } },
            '6hats': { subject: "재택근무 도입", hats: { white: "주 2회", red: "자유로움", black: "소통 단절", yellow: "효율 증대", green: "메타버스 오피스", blue: "가이드라인 수립" } }
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
        window.location.href = '../' + toolId + '/';
    },

    renderHeader() {
        const header = document.getElementById('header-root');
        if (header) {
            header.innerHTML = `
                <header class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-50 no-print">
                    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <a href="/" class="text-2xl font-black text-blue-600 tracking-tighter flex items-center gap-2">
                            <span class="bg-blue-600 text-white p-1 rounded-lg text-sm">📊</span> PARAN LAB
                        </a>
                        <nav class="flex gap-8 text-sm font-bold text-slate-600">
                            <a href="/#tool-categories" class="hover:text-blue-600 transition-colors">도구함</a>
                            <a href="/#scenario-grid" class="hover:text-blue-600 transition-colors">시나리오</a>
                        </nav>
                    </div>
                </header>`;
        }
    },

    renderFooter() {
        const footer = document.getElementById('footer-root');
        if (footer) {
            footer.innerHTML = `
                <footer class="bg-slate-900 text-white py-20 no-print">
                    <div class="container mx-auto px-6">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                            <div class="md:col-span-1">
                                <p class="text-2xl font-black text-blue-400 mb-4">PARAN LAB</p>
                                <p class="text-slate-400 text-sm leading-relaxed">복잡한 세상의 모든 고민을<br/>데이터와 논리로 해결하는 의사결정 플랫폼</p>
                            </div>
                            <div>
                                <p class="font-black mb-4">Quick Links</p>
                                <ul class="text-slate-400 text-sm space-y-2">
                                    <li><a href="/#tool-categories" class="hover:text-white transition-colors">의사결정 도구함</a></li>
                                    <li><a href="/#scenario-grid" class="hover:text-white transition-colors">실전 시나리오</a></li>
                                </ul>
                            </div>
                            <div>
                                <p class="font-black mb-4">Family Sites</p>
                                <ul class="text-slate-400 text-sm space-y-2">
                                    <li><a href="${this.config.sisterSite}" target="_blank" class="hover:text-blue-400 transition-colors flex items-center gap-1">🚀 ${this.config.sisterSiteName}</a></li>
                                </ul>
                            </div>
                            <div>
                                <p class="font-black mb-4">Legal & Contact</p>
                                <ul class="text-slate-400 text-sm space-y-2">
                                    <li><a href="/privacy/" class="hover:text-white transition-colors">개인정보처리방침</a></li>
                                    <li class="pt-2 text-xs opacity-60">${this.config.contactEmail}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p class="text-slate-500 text-xs">© 2024 PARAN LAB. All rights reserved.</p>
                            <p class="text-slate-600 text-[10px] uppercase tracking-widest font-black">Decision Science Platform</p>
                        </div>
                    </div>
                </footer>`;
        }
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
    }
};

document.addEventListener('DOMContentLoaded', () => ParanLabCore.init());
