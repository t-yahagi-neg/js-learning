setTimeout(() => {
    const div = document.querySelector("div");
    div.classList.add("preparedClass"); /* preparedClass という文字列を class 属性に追加する */
}, 2000);   /* 2秒後にコールバック関数を実行 */