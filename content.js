
function applyMode(mode) {
    if (mode === 'normal') {
        document.body.style.filter = '';
        document.body.style.backgroundColor = '';
    } else if (mode === 'dark') {
        document.body.style.filter = 'invert(1) hue-rotate(180deg)';
        document.body.style.backgroundColor = '#121212';
    } else if (mode === 'reading') {
        document.body.style.filter = 'sepia(1) brightness(0.9)';
        document.body.style.backgroundColor = '#f5deb3';
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'applyMode') {
        applyMode(request.mode);
    }
});
