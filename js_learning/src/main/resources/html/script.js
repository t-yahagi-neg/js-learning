const div = document.querySelector("div");

console.log(div.offsetHeight);  // offset プロパティはレイアウト幅を取得する
console.log(div.getBoundingClientRect().height);    // getBoundingClientRect はレンダリング幅を取得する