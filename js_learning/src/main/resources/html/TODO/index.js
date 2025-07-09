const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

// formでEnter(submit)した時のイベント
form.addEventListener("submit", function(event) {
    // デフォルトのイベントを発生しないようにする
    event.preventDefault();
    // formのinputの値を取得する
    add();
});

function add() {
    // liタグを作る
    const li = document.createElement("li");
    // inputタグの値を表示する
    li.innerText = input.value;
    // デザインのためにクラスを追加する
    li.classList.add("list-group-item");
    // ulタグの子供として追加する
    ul.appendChild(li);
    // 入力後はフォームを空欄にする
    input.value = "";
}