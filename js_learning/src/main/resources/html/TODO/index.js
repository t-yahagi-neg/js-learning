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
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        todos.push(list.innerText);
    });
    // ローカルストレージに保管、JSON型にする
    localStorage.setItem("todos", JSON.stringify(todos));
}