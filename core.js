const ParanLabCore = {
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
                    Advertisement
                </div>
            </div>
        `,
        footer: `
            <footer class="max-w-4xl mx-auto px-6 py-12 mt-12 border-t border-slate-100 text-center">
                <div class="mb-12 w-full h-64 bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-[10px] tracking-widest uppercase font-bold">
                    Advertisement
                </div>
                <div class="mb-10">
                    <h4 class="text-slate-800 font-bold mb-2">도구 제보 및 피드백</h4>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed">새로운 의사결정 도구 제안이나 사용 중 불편한 점은<br class="md:hidden"> 아래 메일로 언제든 연락주세요.</p>
                    <a href="mailto:paranbreak@gmail.com" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-blue-50 text-blue-600 rounded-2xl text-sm font-bold transition-all">
                        paranbreak@gmail.com
                    </a>
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

        // 헤더 삽입
        const headerElem = document.createElement('div');
        headerElem.innerHTML = this.layout.header;
        document.body.insertBefore(headerElem, document.body.firstChild);

        // 상단 광고 삽입
        const adTopElem = document.createElement('div');
        adTopElem.innerHTML = this.layout.adTop;
        root.parentNode.insertBefore(adTopElem, root);

        // 푸터 삽입
        const footerElem = document.createElement('div');
        footerElem.innerHTML = this.layout.footer;
        document.body.appendChild(footerElem);
    }
};

// 실행
window.addEventListener('load', () => ParanLabCore.render());
