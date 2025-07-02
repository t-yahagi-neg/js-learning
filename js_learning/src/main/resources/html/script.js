function sleep(ms) {
    // setTImeoutを使って、msミリ秒後にダイアログでメッセージを表示するコールバック関数を実装
    setTimeout(function() {
        alert("sleep関数が完了しました。");
    }, ms);
}

sleep(3000);    // sleep関数を実行

// ボタンにクリック時の処理を実装
const btn = document.querySelector("button");
function clickHandler() {
    alert("ボタンがクリックされました。");
}
btn.addEventListener("click", clickHandler);    // 「ボタン」にアクションを登録