const button = document.querySelector("button");
const div = document.querySelector("div");
const section = document.querySelector("section");

// button に対するアクションを登録
button.addEventListener("click", (event) => {
    console.log("button の click イベントが実行されました。");
});

// div に対するアクションを登録
div.addEventListener("click", (event) => {
    console.log("div の click イベントが実行されました。");
});

// section に対するアクションを登録
section.addEventListener("click", (event) => {
    event.stopPropagation();    // イベント伝播を停止
    console.log("section の click イベントが実行されました。");
}, {capture: true});    // キャプチャリングフェーズアクションで実行