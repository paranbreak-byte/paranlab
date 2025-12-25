const ParanLabCore = {
    // 도구 리스트 (이곳에 추가/삭제만 하면 사이트 전체에 자동 반영됩니다)
    toolsList: [
        { id: "ahp", name: "AHP 분석", href: "/ahp/", category: "결정", desc: "여러 후보 중 최선의 선택지를 수학적으로 도출", ready: true },
        { id: "pros-cons", name: "Pros & Cons", href: "/pros-cons/", category: "결정", desc: "단일 안건의 긍정/부정 요인 가중치 비교", ready: true },
        { id: "eisenhower", name: "아이젠하워", href: "/eisenhower/", category: "결정", desc: "긴급성과 중요도 기준 우선순위 분류", ready: true },
        { id: "payoff", name: "Payoff 분석", href: "/payoff/", category: "결정", desc: "노력 대비 결과가 큰 가성비 과제 발굴", ready: true },
        { id: "weighted", name: "가중치 점수 모델", href: "/weighted/", category: "결정", desc: "기준별 가중치를 적용한 간편 점수 평가", ready: true },
        { id: "tree", name: "결정 트리", href: "/tree/", category: "결정", desc: "시나리오별 확률과 기대 가치 분석", ready: true },
        { id: "paired", name: "쌍대 비교법", href: "/paired/", category: "결정", desc: "1:1 토너먼트 방식의 절대 순위 도출", ready: true },
        { id: "cba", name: "비용-편익 분석", href: "/cba/", category: "결정", desc: "투입 비용 대비 경제적 이득 수치화", ready: true },
        { id: "force-field", name: "Force Field", href: "/force-field/", category: "결정", desc: "변화의 추진력과 저항력의 균형 분석", ready: true },

        { id: "swot", name: "SWOT 전략", href: "/swot/", category: "전략", desc: "내외부 환경 분석을 통한 전략 수립", ready: true },
        { id: "pest", name: "PEST 분석", href: "/pest/", category: "전략", desc: "정치/경제/사회/기술 거시 환경 분석", ready: true },
        { id: "3c", name: "3C 분석", href: "/3c/", category: "전략", desc: "고객/경쟁사/자사 중심 시장 분석", ready: true },
        { id: "vrio", name: "VRIO 분석", href: "/vrio/", category: "전략", desc: "보유 자원의 내부 핵심 역량 검증", ready: true },
        { id: "ansoff", name: "안소프 매트릭스", href: "/ansoff/", category: "전략", desc: "제품과 시장 기준 성장 방향 결정", ready: true },
        { id: "bcg", name: "BCG 매트릭스", href: "/bcg/", category: "전략", desc: "사업 포트폴리오 집중 및 유지 결정", ready: true },
        { id: "porter", name: "5 Forces", href: "/porter/", category: "전략", desc: "산업의 경쟁 강도 및 매력도 측정", ready: true },

        { id: "pmi", name: "PMI 아이디어", href: "/pmi/", category: "기획", desc: "아이디어의 장점/단점/흥미로운 점 평가", ready: true },
        { id: "5whys", name: "5 Whys 분석", href: "/5whys/", category: "기획", desc: "질문 반복을 통한 문제의 근본 원인 파악", ready: true },
        { id: "smart", name: "SMART 목표", href: "/smart/", category: "기획", desc: "막연한 목표를 실행 가능한 계획으로 구체화", ready: true },
        { id: "scamper", name: "SCAMPER 기법", href: "/scamper/", category: "기획", desc: "7가지 질문을 통한 창의적 아이디어 확장", ready: true },
        { id: "logic-tree", name: "로직 트리", href: "/logic-tree/", category: "기획", desc: "복잡한 문제를 논리적으로 하위 분해", ready: true },
        { id: "6hats", name: "여섯 색깔 모자", href: "/6hats/", category: "기획", desc: "관점을 분리하여 다각도로 사고하기", ready: true },
        { id: "affinity", name: "친화도법", href: "/affinity/", category: "기획", desc: "흩어진 아이디어를 그룹화하여 핵심 도출", ready: true },
        { id: "mandalart", name: "만다라트", href: "/mandalart/", category: "기획", desc: "핵심 목표 중심의 64개 세부 계획 수립", ready: true },

        { id: "wheel", name: "인생의 수레바퀴", href: "/wheel/", category: "자기계발", desc: "삶의 8대 영역 균형 상태 점검", ready: true },
        { id: "ikigai", name: "이키가이 찾기", href: "/ikigai/", category: "자기계발", desc: "좋아하고 잘하는 일의 교집합 발견", ready: true },
        { id: "johari", name: "조하리의 창", href: "/johari/", category: "자기계발", desc: "나와 타인의 인식을 통한 소통 분석", ready: true },
        { id: "okr", name: "OKR 설정", href: "/okr/", category: "자기계발", desc: "도전적 목표와 수치적 핵심 결과 관리", ready: true },
        { id: "grow", name: "GROW 모델", href: "/grow/", category: "자기계발", desc: "4단계 질문을 통한 셀프 코칭 가이드", ready: true },
        { id: "time-audit", name: "시간 기록 분석", href: "/time-audit/", category: "자기계발", desc: "하루 시간 사용의 효율성 및 낭비 점검", ready: true }
    ],

    layout: {
        header: function(tools) {
            const categories = ["결정", "전략", "기획", "자기계발"];
            const menuHtml = categories.map(cat => {
                const catTools = tools.filter(t => t.category === cat);
                return `
                    <div class="py-2">
                        <div class="px-4 py-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">${cat}</div>
                        ${catTools.map(t => `<a href="${t.href}" class="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">${t.name}</a>`).join('')}
                    </div>
                `;
            }).join('<div class="border-b border-slate-50"></div>');

            return `
                <header class="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                    <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                        <a href="/" class="text-2xl font-black text-blue-600 tracking-tighter">PARAN LAB</a>
                        <div class="relative group">
                            <button class="flex items-center gap-1 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all">
                                도구 목록 (${tools.length})
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="absolute right-0 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-y-auto max-h-[80vh] z-50">
                                ${menuHtml}
                            </div>
                        </div>
                    </div>
                </header>
            `;
        },
        adTop: `<div class="max-w-5xl mx-auto px-6 py-6"><div class="w-full h-24 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-[10px] tracking-widest uppercase font-bold">Advertisement</div></div>`,
        footer: `
            <footer class="max-w-5xl mx-auto px-6 py-12 mt-12 border-t border-slate-100 text-center">
                <div class="mb-10">
                    <h4 class="text-slate-800 font-bold mb-2">도구 제보 및 피드백</h4>
                    <a href="mailto:paranbreak@gmail.com" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-blue-50 text-blue-600 rounded-2xl text-sm font-bold transition-all">paranbreak@gmail.com</a>
                </div>
                <p class="text-slate-400 text-[10px] font-medium uppercase tracking-[0.2em]">© 2025 Paran Lab. All rights reserved.</p>
            </footer>
        `
    },

    injectFavicon: function() {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232563eb%22/><text y=%22.9em%22 x=%2250%%22 font-size=%2270%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22sans-serif%22 font-weight=%22bold%22>P</text></svg>';
        document.head.appendChild(link);
    },

    render: function() {
        this.injectFavicon();
        const root = document.getElementById('root');
        if (!root) return;
        const headerElem = document.createElement('div');
        headerElem.innerHTML = this.layout.header(this.toolsList);
        document.body.insertBefore(headerElem, document.body.firstChild);
        const adTopElem = document.createElement('div');
        adTopElem.innerHTML = this.layout.adTop;
        root.parentNode.insertBefore(adTopElem, root);
        const footerElem = document.createElement('div');
        footerElem.innerHTML = this.layout.footer;
        document.body.appendChild(footerElem);
    }
};

window.addEventListener('load', () => ParanLabCore.render());
