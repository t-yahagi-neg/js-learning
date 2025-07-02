function sleep(ms) {
    const startTime = new Date();
    // whileループでmsミリ秒分ループを継続
    while(new Date() - startTime < ms); // msミリ秒経つまでは条件がtrueにならない
    // whileのブロック{ }は省略

    alert("sleep関数が完了しました。"); // whileループが完了した直後にダイアログを表示
}

sleep(3000);    // sleep関数を実行

// ボタンにクリック時の処理を実装
const btn = document.querySelector("button");
function clickHandler() {
    alert("ボタンがクリックされました。");
}
btn.addEventListener("click", clickHandler);    // 「ボタン」にアクションを登録