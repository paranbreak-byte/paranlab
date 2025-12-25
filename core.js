/**
 * Paran Lab Core Framework
 * 모든 페이지의 레이아웃, 광고, 추적 스크립트 및 파비콘을 통합 관리합니다.
 */

const ParanLabCore = {
    // 1. 공통 레이아웃 설정
    layout: {
        header: `
            <header class="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" class="text-2xl font-black text-blue-600 tracking-tighter">PARAN LAB</a>
                    <nav class="flex gap-4 md:gap-6 text-sm font-bold text-slate-500">
                        <a href="/ahp/" class="hover:text-blue-600 transition-colors">AHP 분석</a>
                        <a href="/swot/" class="hover:text-emerald-600 transition-colors">SWOT 분석</a>
                    </nav>
                </div>
            </header>
        `,
        adTop: `
            <div class="max-w-4xl mx-auto px-6 py-6">
                <div class="w-full h-24 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-[10px] tracking-widest uppercase font-bold">
                    <!-- 구글 애드센스 상단 광고 영역 -->
                    Advertisement
                </div>
            </div>
        `,
        footer: `
            <footer class="max-w-4xl mx-auto px-6 py-12 mt-12 border-t border-slate-100 text-center">
                <!-- 하단 광고 영역 -->
                <div class="mb-12 w-full h-64 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-[10px] tracking-widest uppercase font-bold">
                    <!-- 구글 애드센스 하단 광고 영역 -->
                    Advertisement
                </div>

                <!-- 피드백 및 연락처 -->
                <div class="mb-10">
                    <h4 class="text-slate-800 font-bold mb-2">도구 제보 및 피드백</h4>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed">새로운 의사결정 도구 제안이나 사용 중 불편한 점은<br class="md:hidden"> 아래 메일로 언제든 연락주세요.</p>
                    <a href="mailto:paranbreak@gmail.com" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-blue-50 text-blue-600 rounded-2xl text-sm font-bold transition-all">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        paranbreak@gmail.com
                    </a>
                </div>

                <p class="text-slate-400 text-[10px] font-medium uppercase tracking-[0.2em]">© 2025 Paran Lab. All rights reserved.</p>
            </footer>
        `
    },

    // 2. 파비콘 자동 주입 (이미지 파일 없이 코드로 생성)
    injectFavicon: function() {
        const faviconSvg = `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232563eb%22/><text y=%22.9em%22 x=%2250%%22 font-size=%2270%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22sans-serif%22 font-weight=%22bold%22>P</text></svg>`;
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = `data:image/svg+xml,${faviconSvg}`;
        document.head.appendChild(link);
    },

    // 3. 초기화 및 스크립트 실행
    init: function() {
        console.log("Paran Lab Core Framework Initialized.");
        this.injectFavicon();
        // 나중에 구글 분석기(GA4)나 애드센스 자동광고 코드를 여기에 추가하세요.
    },

    // 4. 레이아웃 렌더링
    render: function() {
        const root = document.getElementById('root');
        if (!root) return;

        // 기존 콘텐츠 보존
        const pageContent = root.innerHTML;

        // 전체 구조 재구성 (헤더 + 상단광고 + 본문 + 푸터)
        document.body.innerHTML = 
            this.layout.header + 
            this.layout.adTop + 
            `<div id="root-container">${pageContent}</div>` + 
            this.layout.footer;

        this.init();
    }
};

// DOM이 준비되면 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ParanLabCore.render());
} else {
    ParanLabCore.render();
}
