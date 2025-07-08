// Element の取得
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const button = document.querySelector("button");

// window に click イベントを登録 (capture: true として登録)
window.addEventListener("click", () => {
    console.log("window の click イベント");
}, {capture: true});

// div2 に click イベントを登録
div2.addEventListener("click", () => {
    console.log("div2 の click イベント");
});

// button に click イベントを登録
button.addEventListener("click", () => {
    console.log("button の click イベント");
});