const div = document.querySelector("div");
const button = document.querySelector("button");

button.onclick = function() {   // button のクリックイベントにアクションを登録
    div.classList.toggle("preparedClass"); // preparedClass という文字列を class 属性に対して付け外しする
};