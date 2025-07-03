// 新しい <div> 要素を作成
const newDiv = document.createElement("div");
// 作成した <div> 要素に文字列を追加
newDiv.textContent = "Hello World";
// <body> に挿入
document.body.prepend(newDiv);