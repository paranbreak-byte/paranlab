const ParanLabCore = {
    toolsList: [
        // 결정 카테고리
        { id: "ahp", name: "AHP 분석", href: "/ahp/", category: "결정", desc: "여러 후보 중 최선의 선택지를 수학적으로 도출", tags: ["이직", "자동차", "이사", "구매"], icon: "📊" },
        { id: "pros-cons", name: "Pros & Cons", href: "/pros-cons/", category: "결정", desc: "단일 안건의 긍정/부정 요인 가중치 비교", tags: ["투자", "연애", "결혼", "할까말까"], icon: "⚖️" },
        { id: "eisenhower", name: "아이젠하워", href: "/eisenhower/", category: "결정", desc: "긴급성과 중요도 기준 우선순위 분류", tags: ["업무", "시간관리", "공부", "할일"], icon: "📅" },
        { id: "payoff", name: "Payoff 분석", href: "/payoff/", category: "결정", desc: "노력 대비 결과가 큰 가성비 과제 발굴", tags: ["가성비", "효율", "비즈니스", "기획"], icon: "💰" },
        { id: "weighted", name: "가중치 점수 모델", href: "/weighted/", category: "결정", desc: "기준별 가중치를 적용한 간편 점수 평가", tags: ["비교", "선택", "평가"], icon: "📝" },
        { id: "tree", name: "결정 트리", href: "/tree/", category: "결정", desc: "시나리오별 확률과 기대 가치 분석", tags: ["리스크", "미래예측", "투자"], icon: "🌳" },
        { id: "paired", name: "쌍대 비교법", href: "/paired/", category: "결정", desc: "1:1 토너먼트 방식의 절대 순위 도출", tags: ["순위", "우선순위", "단순비교"], icon: "⚔️" },
        { id: "cba", name: "비용-편익 분석", href: "/cba/", category: "결정", desc: "투입 비용 대비 경제적 이득 수치화", tags: ["투자", "쇼핑", "창업"], icon: "📈" },
        { id: "force-field", name: "Force Field", href: "/force-field/", category: "결정", desc: "변화의 추진력과 저항력의 균형 분석", tags: ["변화", "습관", "다이어트"], icon: "🏹" },

        // 전략 카테고리
        { id: "swot", name: "SWOT 전략", href: "/swot/", category: "전략", desc: "내외부 환경 분석을 통한 전략 수립", tags: ["창업", "자기분석", "경쟁력"], icon: "🧩" },
        { id: "pest", name: "PEST 분석", href: "/pest/", category: "전략", desc: "정치/경제/사회/기술 거시 환경 분석", tags: ["시장조사", "트렌드", "사업계획"], icon: "🌐" },
        { id: "3c", name: "3C 분석", href: "/3c/", category: "전략", desc: "고객/경쟁사/자사 중심 시장 분석", tags: ["마케팅", "경쟁", "비즈니스"], icon: "🎯" },
        { id: "vrio", name: "VRIO 분석", href: "/vrio/", category: "전략", desc: "보유 자원의 내부 핵심 역량 검증", tags: ["강점", "필살기", "차별화"], icon: "💎" },
        { id: "ansoff", name: "안소프 매트릭스", href: "/ansoff/", category: "전략", desc: "제품과 시장 기준 성장 방향 결정", tags: ["확장", "매출증대", "신제품"], icon: "🚀" },
        { id: "bcg", name: "BCG 매트릭스", href: "/bcg/", category: "전략", desc: "사업 포트폴리오 집중 및 유지 결정", tags: ["정리", "투자배분", "수익성"], icon: "⭐" },
        { id: "porter", name: "5 Forces", href: "/porter/", category: "전략", desc: "산업의 경쟁 강도 및 매력도 측정", tags: ["레드오션", "블루오션", "시장진입"], icon: "🛡️" },

        // 기획 카테고리
        { id: "pmi", name: "PMI 아이디어", href: "/pmi/", category: "기획", desc: "아이디어의 장점/단점/흥미로운 점 평가", tags: ["아이디어", "창의력", "검토"], icon: "💡" },
        { id: "5whys", name: "5 Whys 분석", href: "/5whys/", category: "기획", desc: "질문 반복을 통한 문제의 근본 원인 파악", tags: ["문제해결", "원인분석", "실수"], icon: "❓" },
        { id: "smart", name: "SMART 목표", href: "/smart/", category: "기획", desc: "막연한 목표를 실행 가능한 계획으로 구체화", tags: ["목표설정", "계획", "성공"], icon: "📍" },
        { id: "scamper", name: "SCAMPER 기법", href: "/scamper/", category: "기획", desc: "7가지 질문을 통한 창의적 아이디어 확장", tags: ["발명", "개선", "브레인스토밍"], icon: "🔧" },
        { id: "logic-tree", name: "로직 트리", href: "/logic-tree/", category: "기획", desc: "복잡한 문제를 논리적으로 하위 분해", tags: ["논리", "구조화", "정리"], icon: "🌿" },
        { id: "6hats", name: "여섯 색깔 모자", href: "/6hats/", category: "기획", desc: "관점을 분리하여 다각도로 사고하기", tags: ["회의", "토론", "다각도"], icon: "🎩" },
        { id: "affinity", name: "친화도법", href: "/affinity/", category: "기획", desc: "흩어진 아이디어를 그룹화하여 핵심 도출", tags: ["정리", "포스트잇", "그룹화"], icon: "📎" },
        { id: "mandalart", name: "만다라트", href: "/mandalart/", category: "기획", desc: "핵심 목표 중심의 64개 세부 계획 수립", tags: ["오타니", "계획표", "만다라트"], icon: "🕸️" },

        // 자기계발 카테고리
        { id: "wheel", name: "인생의 수레바퀴", href: "/wheel/", category: "자기계발", desc: "삶의 8대 영역 균형 상태 점검", tags: ["밸런스", "라이프스타일", "점검"], icon: "🎡" },
        { id: "ikigai", name: "이키가이 찾기", href: "/ikigai/", category: "자기계발", desc: "좋아하고 잘하는 일의 교집합 발견", tags: ["진로", "직업", "행복"], icon: "🌸" },
        { id: "johari", name: "조하리의 창", href: "/johari/", category: "자기계발", desc: "나와 타인의 인식을 통한 소통 분석", tags: ["인간관계", "심리", "소통"], icon: "🪟" },
        { id: "okr", name: "OKR 설정", href: "/okr/", category: "자기계발", desc: "도전적 목표와 수치적 핵심 결과 관리", ready: true, tags: ["성과", "구글", "목표달성"], icon: "🎯" },
        { id: "grow", name: "GROW 모델", href: "/grow/", category: "자기계발", desc: "4단계 질문을 통한 셀프 코칭 가이드", tags: ["코칭", "상담", "변화"], icon: "🌱" },
        { id: "time-audit", name: "시간 기록 분석", href: "/time-audit/", category: "자기계발", desc: "하루 시간 사용의 효율성 및 낭비 점검", tags: ["시간관리", "갓생", "효율"], icon: "⏳" }
    ],

    layout: {
        header: function(tools) {
            return `
                <header class="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                        <a href="/" class="text-2xl font-black text-blue-600 tracking-tighter">PARAN LAB</a>
                        <div class="flex items-center gap-4">
                            <span class="hidden md:block text-xs font-bold text-slate-400">현명한 선택을 위한 연구소</span>
                            <a href="mailto:paranbreak@gmail.com" class="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </a>
                        </div>
                    </div>
                </header>
            `;
        },
        footer: `
            <footer class="max-w-6xl mx-auto px-6 py-12 mt-12 border-t border-slate-100 text-center">
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
        const footerElem = document.createElement('div');
        footerElem.innerHTML = this.layout.footer;
        document.body.appendChild(footerElem);
    }
};

window.addEventListener('load', () => ParanLabCore.render());
