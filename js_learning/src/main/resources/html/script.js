function preventScroll(event) {
    // スクロール処理を停止
    event.preventDefault();
}

// touchmoveイベントのデフォルト処理 (スクロール処理) を阻止
document.addEventListener("touchMove", preventScroll, {passive:false});

// wheelイベントのデフォルト処理 (スクロール処理) を阻止
document.addEventListener("wheel", preventScroll, {passive: false});