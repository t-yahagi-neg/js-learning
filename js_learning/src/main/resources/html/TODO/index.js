// id="form" を指定
const form = document.getElementById("form");
// id="input" を指定
const input = document.getElementById("input");

// formでEnter(submit)した時のイベント
form.addEventListener("submit", function() {
    // formのinputの値を取得する
    // inputの値が正しく取得できているかをコンソールに出力して確認する
    console.log(input.value);
});