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
                <div class="mb-8 w-full h-64 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-xs">
                    <!-- 구글 애드센스 하단 광고 코드 삽입 예정 -->
                    ADVERTISEMENT (BOTTOM)
                </div>
                <p class="text-slate-400 text-xs font-medium">© 2025 Paran Lab. 현명한 의사결정을 위한 연구소.</p>
            </footer>
        `
    },

    // 2. 추적 스크립트 (GA4, 애드센스 자동광고 등)
    init: function() {
        console.log("Paran Lab Core Loaded.");
        // 여기에 구글 분석기(GA4) 코드를 한 번만 넣으면 모든 페이지에 적용됩니다.
    },

    // 3. 화면에 주입
    render: function() {
        const root = document.getElementById('root');
        if (!root) return;
        
        const content = root.innerHTML;
        document.body.innerHTML = this.layout.header + this.layout.adTop + `<main>${content}</main>` + this.layout.footer;
        this.init();
    }
};

// 페이지 로드 완료 시 레이아웃 주입
window.addEventListener('DOMContentLoaded', () => ParanLabCore.render());
