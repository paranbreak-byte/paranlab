/**
 * Paran Lab Master Core v7.8.3
 * 패밀리 사이트 명칭(팩트폭격연구소) 수정 버전
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

    init() {
        this.renderHeader();
        this.renderFooter();
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
