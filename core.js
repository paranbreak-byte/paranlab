const ParanLabCore = {
    // 1. 모든 페이지 공통 디자인 (헤더, 푸터, 광고슬롯)
    layout: {
        header: `
            <header class="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" class="text-2xl font-black text-blue-600 tracking-tighter">PARAN LAB</a>
                    <nav class="hidden md:flex gap-6 text-sm font-bold text-slate-500">
                        <a href="/ahp/" class="hover:text-blue-600">AHP 분석</a>
                        <a href="/swot/" class="hover:text-emerald-600">SWOT 분석</a>
                    </nav>
                </div>
            </header>
        `,
        adTop: `
            <div class="max-w-4xl mx-auto px-6 py-8">
                <div class="w-full h-24 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-xs">
                    <!-- 구글 애드센스 상단 광고 코드 삽입 예정 -->
                    ADVERTISEMENT (TOP)
                </div>
            </div>
        `,
        footer: `
            <footer class="max-w-4xl mx-auto px-6 py-12 mt-12 border-t border-slate-100 text-center">
                <!-- 하단 광고 영역 -->
                <div class="mb-10 w-full h-64 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-xs">
                    <!-- 구글 애드센스 하단 광고 코드 삽입 예정 -->
                    ADVERTISEMENT (BOTTOM)
                </div>

                <!-- 피드백 및 연락처 섹션 -->
                <div class="mb-8">
                    <h4 class="text-slate-800 font-bold mb-2">도구 제보 및 피드백</h4>
                    <p class="text-slate-500 text-sm mb-3">새로운 의사결정 도구 제안이나 사용 중 불편한 점은 아래로 연락주세요.</p>
                    <a href="mailto:paranbreak@gmail.com" class="inline-flex items-center gap-2 px-5 py-2 bg-slate-100 hover:bg-blue-50 text-blue-600 rounded-full text-sm font-bold transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        paranbreak@gmail.com
                    </a>
                </div>

                <p class="text-slate-400 text-[10px] font-medium uppercase tracking-widest">© 2025 Paran Lab. All rights reserved.</p>
            </footer>
        `
    },

    // 2. 추적 스크립트 (GA4, 애드센스 자동광고 등)
    init: function() {
        console.log("Paran Lab Core Loaded.");
    },

    // 3. 화면에 주입
    render: function() {
        const root = document.getElementById('root');
        if (!root) return;
        
        const content = root.innerHTML;
        document.body.innerHTML = this.header + this.layout.adTop + `<main>${content}</main>` + this.layout.footer;
        this.init();
    }
};

// 페이지 로드 완료 시 레이아웃 주입
window.addEventListener('DOMContentLoaded', () => ParanLabCore.render());
