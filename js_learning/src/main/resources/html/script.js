// 数値の初期化
let count = 0;

// Elementの取得
const number = document.querySelector("#number");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");

plusBtn.onclick = function(event) { // #plus ボタンのクリック時のアクションを定義
    count++; // count に 1 を加算
    number.textContent = count; // #number のテキストを更新
};

minusBtn.onclick = function(event) { // #minus ボタンのクリック時のアクションを定義
    count--;    // count から 1 を減産
    number.textContent = count; // #number のテキストを更新
};