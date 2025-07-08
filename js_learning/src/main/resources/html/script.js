const targetEl = document.querySelector("div");
const colorBtn = document.querySelector("#color");

function colorChange(event) {
    targetEl.style.color = "#ff0000";
}

// アクションの登録
colorBtn.addEventListener("click", colorChange);
// アクションの解除（うまくいく）
colorBtn.removeEventListener("click", colorChange);