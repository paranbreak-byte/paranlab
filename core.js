/**
 * Paran Lab Master Core v7.7
 * 데이터 격리 및 시나리오-도구 하이브리드 매핑 시스템
 */

const ParanLabCore = {
    config: {
        adsenseId: "ca-pub-6902579674102145",
        contactEmail: "paranbreak@gmail.com",
        sisterSite: "https://factbomber.kr",
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

    // 10개 시나리오 마스터 데이터
    scenariosList: [
        { id: 'career', icon: '💼', title: 'Career', subtitle: '철수의 인생 2막: 대기업 vs 스타트업', story: '10년 차 과장 철수는 안정적인 대기업과 혁신적인 스타트업 사이에서 고민 중입니다.', tools: ['ahp', 'pros-cons', 'grow'] },
        { id: 'burnout', icon: '📅', title: 'Productivity', subtitle: '김 팀장의 업무 과부하 해결', story: '매일 30개가 넘는 할 일에 치이는 김 팀장. 에너지는 고갈되었고 우선순위 재정립이 시급합니다.', tools: ['eisenhower', 'time-audit', 'payoff'] },
        { id: 'startup', icon: '🚀', title: 'Startup', subtitle: '영희의 유기농 베이커리 도전기', story: '신도시 아파트 단지에 유기농 빵집을 차리려는 영희. 대형 프랜차이즈 사이에서 살아남을 전략이 필요합니다.', tools: ['swot', 'porter', 'value-chain'] },
        { id: 'goal', icon: '📍', title: 'Goal Setting', subtitle: '지민이의 영어 정복 1년 설계', story: '취준생 지민이는 매번 영어 공부에 실패합니다. 작심삼일을 끝낼 정교한 지도가 필요합니다.', tools: ['smart', 'mandalart', 'okr'] },
        { id: 'shopping', icon: '💰', title: 'Shopping', subtitle: '민수의 첫 내 집 마련: 아파트 vs 빌라', story: '5억 원의 예산으로 신혼집을 찾는 민수. 직주근접 아파트와 넓은 신축 빌라 사이에서 갈등 중입니다.', tools: ['ahp', 'cba', 'weighted'] },
        { id: 'creative', icon: '💡', title: 'Creative', subtitle: '이 대리의 사내 복지 혁신 아이디어', story: '인사팀 이 대리는 사내 복지 포인트를 구독 서비스로 전환하려 합니다.', tools: ['scamper', '6hats', 'pmi'] },
        { id: 'problem', icon: '❓', title: 'Problem Solving', subtitle: '박 사장의 식당 매출 급감 원인 분석', story: '7년 차 레스토랑 박 사장은 최근 매출이 40% 급감한 이유를 찾아야 합니다.', tools: ['5whys', 'logic-tree', 'force-field'] },
        { id: 'purpose', icon: '🌸', title: 'Self-Reflection', subtitle: "40대 가장 성진 씨의 '진짜 나' 찾기", story: '경제적으로 안정되었지만 삶의 공허함을 느끼는 성진 씨의 내면 탐색.', tools: ['ikigai', 'wheel', 'johari'] },
        { id: 'risk', icon: '🌳', title: 'Risk Management', subtitle: '투자자 최 씨의 하락장 대응 전략', story: '반도체 주식 손실 중인 최 씨. 손절이냐 추매냐, 플랜 B가 필요합니다.', tools: ['tree', 'vrio', 'pest'] },
        { id: 'team', icon: '🪟', title: 'Teamwork', subtitle: '프로젝트 팀의 갈등 해결과 협업', story: '개발자와 기획자의 대립으로 멈춰버린 프로젝트를 다시 가동해야 합니다.', tools: ['johari', 'affinity', '6hats'] }
    ],

    // [핵심] 시나리오별 도구 페이로드 정의 (데이터 오염 방지)
    payloads: {
        career: {
            ahp: { goal: "철수의 최적 이직처 결정", criteria: ["연봉/복지", "출퇴근거리", "성장가능성"], alternatives: ["현재 대기업", "핀테크 스타트업"], criteriaComparisons: {"0-1": -3, "0-2": -5, "1-2": 2}, alternativeComparisons: {0:{"0-1":-7}, 1:{"0-1":8}, 2:{"0-1":9}} },
            'pros-cons': { subject: "스타트업 이직 추진", pros: [{id:1, text: "출퇴근 130분 단축", score: 10}, {id:2, text: "스톡옵션 기회", score: 8}], cons: [{id:1, text: "연봉 700만원 삭감", score: 6}, {id:2, text: "생존 불확실성", score: 9}] },
            grow: { goal: "스타트업 핵심 인재 안착", reality: "대기업 방식 익숙함", options: "기술 스택 학습, 사내 스터디", will: "오늘 인강 결제" }
        },
        shopping: {
            ahp: { goal: "민수의 최적 신혼집 선정", criteria: ["매매가격", "직주근접", "단지규모"], alternatives: ["역세권 아파트", "숲세권 빌라"], criteriaComparisons: {"0-1": 4, "0-2": 2, "1-2": -3}, alternativeComparisons: {0:{"0-1":-9}, 1:{"0-1":8}, 2:{"0-1":5}} },
            cba: { subject: "역세권 아파트 매수 경제성", costs: [{id:1, text: "대출 이자", value: 70}, {id:2, text: "취등록세", value: 20}], benefits: [{id:1, text: "출퇴근 시간 절약", value: 90}, {id:2, text: "자산 가치 상승", value: 80}] },
            weighted: { subject: "신혼집 최종 후보 평가", alts: ["역세권 아파트", "숲세권 빌라"], crits: [{id:1, text: "가격", w: 10}, {id:2, text: "교통", w: 9}], scores: {"0-0": 4, "0-1": 10, "1-0": 9, "1-1": 3} }
        },
        startup: {
            swot: { subject: "영희의 빵집 전략", data: { s: "유기농 레시피", w: "자본 부족", o: "신도시 입주", t: "프랜차이즈" }, strategies: { so: "신도시 주부층 공략", wt: "테이크아웃 특화" } },
            porter: { subject: "신도시 베이커리 시장", scores: { rivalry: 9, entrants: 7, substitutes: 4, suppliers: 8, buyers: 5 } },
            'value-chain': { subject: "영희의 빵집 프로세스", activities: { inbound: "유기농 밀가루 직거래", ops: "당일 생산", marketing: "인스타 지역 광고", outbound: "배달 서비스", service: "멤버십 운영" } }
        }
        // ... 나머지 시나리오 페이로드도 동일 구조로 확장
    },

    init() {
        this.renderHeader();
        this.renderFooter();
    },

    // [핵심] 시나리오 데이터를 도구로 던지는 함수
    tossData(toolId, scenarioId) {
        const scenario = this.scenariosList.find(s => s.id === scenarioId);
        const payload = (this.payloads[scenarioId] && this.payloads[scenarioId][toolId]) || {};
        
        // 컨텍스트 정보 주입
        payload.scenarioContext = { 
            title: scenario.subtitle, 
            origin: scenario.id 
        };
        
        // 해당 도구의 전용 키에 데이터 저장 (기존 데이터 덮어쓰기하여 오염 방지)
        localStorage.setItem(this.config.baseKey + toolId, JSON.stringify(payload));
        
        // 도구 페이지로 이동
        window.location.href = '/' + toolId + '/';
    },

    // 공통 유틸리티: 이미지 저장
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

    // 공통 유틸리티: HTML 다운로드
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

    // 공통 유틸리티: 클립보드 복사
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => alert('결과가 클립보드에 복사되었습니다.'));
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
                    <div class="container mx-auto px-6 text-center md:text-left">
                        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div>
                                <p class="text-slate-900 font-black text-lg">PARAN LAB</p>
                                <p class="text-slate-500 text-sm mt-1">데이터 기반 의사결정 과학 플랫폼</p>
                            </div>
                            <div class="text-sm font-bold text-slate-600">
                                Contact: <a href="mailto:${this.config.contactEmail}" class="text-blue-600">${this.config.contactEmail}</a>
                            </div>
                        </div>
                    </div>
                </footer>`;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => ParanLabCore.init());
