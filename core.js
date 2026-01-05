/**
 * Paran Lab Core System v2.0
 * 수석 개발자: Paran Lab Team
 */

const ParanLabCore = {
    config: {
        adsenseId: "ca-pub-6902579674102145",
        baseKey: "paranlab-"
    },

    init() {
        this.renderHeader();
        this.renderFooter();
        this.initDataToss();
        console.log("Paran Lab Core Initialized");
    },

    // 헤더 렌더링
    renderHeader() {
        const header = document.getElementById('header-root');
        if (header) {
            header.innerHTML = `
                <header class="bg-white shadow-sm border-b">
                    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                        <a href="/" class="text-2xl font-bold text-blue-600">PARAN LAB</a>
                        <nav>
                            <ul class="flex space-x-6 text-sm font-medium">
                                <li><a href="/tools" class="hover:text-blue-500">도구함</a></li>
                                <li><a href="/scenarios" class="hover:text-blue-500">시나리오</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>`;
        }
    },

    // 데이터 토스 시스템: URL 파라미터나 로컬스토리지에 데이터가 있으면 자동 로드
    initDataToss() {
        const path = window.location.pathname;
        const folderName = path.split('/').filter(Boolean).pop();
        if (folderName) {
            const storageKey = this.config.baseKey + folderName;
            const tossedData = localStorage.getItem(storageKey);
            if (tossedData) {
                window.PARAN_DATA = JSON.parse(tossedData);
                console.log(`Data tossed for ${folderName}`);
            }
        }
    },

    // 결과 리포트 표준 버튼 세트 생성
    renderActionButtons(targetId) {
        const container = document.createElement('div');
        container.className = "flex flex-wrap gap-2 mt-8 no-print";
        container.innerHTML = `
            <button onclick="ParanLabCore.saveAsImage('${targetId}')" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">이미지 저장</button>
            <button onclick="ParanLabCore.downloadHTML('${targetId}')" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">HTML 다운로드</button>
            <button onclick="ParanLabCore.copyToClipboard('${targetId}')" class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition">결과 복사</button>
        `;
        return container;
    },

    // 이미지 저장 (html2canvas)
    saveAsImage(targetId) {
        const element = document.getElementById(targetId);
        html2canvas(element).then(canvas => {
            const link = document.createElement('a');
            link.download = `paranlab-result-${new Date().getTime()}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    },

    // HTML 다운로드
    downloadHTML(targetId) {
        const content = document.getElementById(targetId).innerHTML;
        const blob = new Blob([content], { type: 'text/html' });
        const link = document.createElement('a');
        link.download = `paranlab-result.html`;
        link.href = URL.createObjectURL(blob);
        link.click();
    },

    // 클립보드 복사
    copyToClipboard(targetId) {
        const text = document.getElementById(targetId).innerText;
        navigator.clipboard.writeText(text).then(() => alert('결과가 복사되었습니다.'));
    },

    renderFooter() {
        const footer = document.getElementById('footer-root');
        if (footer) {
            footer.innerHTML = `
                <footer class="bg-gray-100 border-t mt-20 py-10">
                    <div class="container mx-auto px-4 text-center">
                        <p class="text-gray-500 text-sm">© 2024 Paran Lab. All rights reserved.</p>
                        <div class="mt-4 space-x-4 text-xs text-gray-400">
                            <a href="/privacy">개인정보처리방침</a>
                            <a href="/terms">이용약관</a>
                        </div>
                    </div>
                </footer>`;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => ParanLabCore.init());
