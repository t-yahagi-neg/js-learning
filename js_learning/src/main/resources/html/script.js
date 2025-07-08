setTimeout(() => {
    const div = document.querySelector("div");
    div.style.color = "red";    /* 文字色を赤色に変更 */
    div.style.backgroundColor = "blue"; /* 背景色を青色に変更 */
}, 2000);   /* ２秒後にコールバック関数を実行 */