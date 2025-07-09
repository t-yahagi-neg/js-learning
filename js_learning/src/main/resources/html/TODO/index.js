const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    add();
});

function add() {
    let todoText = input.value;
    // フォームが空欄の時は追加しないようにする
    // 暗黙的型変換で未入力なら空文字になるためfalseになる
    if (todoText) {
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value = "";
        saveData();
    }
}

function saveData() {
    // 画面に表示されたTODOの値を取ってくる
    // liタグを全て取得する
    const lists = document.querySelectorAll("li");
    // 動作確認
    console.log(lists);
}