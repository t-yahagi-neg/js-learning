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
    // 1文字以上なら
    if (todoText.length > 0) {
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value = "";
    }
}