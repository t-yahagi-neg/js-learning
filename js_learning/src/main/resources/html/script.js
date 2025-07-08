const button = document.querySelector("button");
const span = document.querySelector("span");

let count = 0;
button.addEventListener("click", function(event) {
    count++;
    span.textContent = count;
});

// Event オブジェクトをインスタンス化
const myEvent = new Event("click");

// 1 秒間隔で click イベントを発火
setInterval(() => {
    // イベントを発火
    button.dispatchEvent(myEvent);
}, 1000);