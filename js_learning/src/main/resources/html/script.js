const targetEl = document.querySelector("div");
const colorBtn = document.querySelector("#color");

// アクションの登録：無名関数A
colorBtn.addEventListener("click", function(even) {
    targetEl.style.color = "#ff0000";
});
// アクションの解除（解除できていない）：無名関数B
colorBtn.removeEventListener("click", function(event){
    targetEl.style.color = "#ff0000";
});