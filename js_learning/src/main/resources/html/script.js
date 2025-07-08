// 数値の初期化
let count = 0;

// Elementの取得
const number = document.querySelector("#number");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");

plusBtn.addEventListener("click", function(event) { // クリックイベントにアクションを登録
    count++; // 数値を 1 加算する
    number.textContent = count; // #number のテキストを更新
});

minusBtn.addEventListener("click", function(event) { // クリックイベントにアクションを登録
    count--;    // 数値を 1 減算する
    number.textContent = count; // #number のテキストを更新
});