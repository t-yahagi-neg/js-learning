const targetEl = document.querySelector("div");
const colorBtn = document.querySelector("#color");
const bgColorBtn = document.querySelector("#bg-color");
const allColorBtn = document.querySelector("#all-color");
const resetBtn = document.querySelector("#reset-color");
// 文字色を変更するアクション
function colorChange(event) {
    // 文字色を赤色に変更
    targetEl.style.color = "#ff0000";
}
// 背景色を変更するアクション
function bgColorChange(event) {
    // 背景色を青色に変更
    targetEl.style.backgroundColor = "blue";
}
// スタイルをリセットするアクション
function reset(event) {
    targetEl.style.backgroundColor = "";
    targetEl.style.color = "";
}

// イベントリスナにアクションを登録
colorBtn.addEventListener("click", colorChange);
bgColorBtn.addEventListener("click", bgColorChange);
allColorBtn.addEventListener("click", colorChange);     // #all-color要素には関数を2つ登録
allColorBtn.addEventListener("click", bgColorChange);   //
// スタイルのリセット
resetBtn.addEventListener("click", reset);