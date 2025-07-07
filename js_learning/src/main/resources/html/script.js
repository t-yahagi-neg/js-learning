const ul = document.querySelector("ul");
const li = ul.querySelector("li");
for (let i = 0; i < 3; i++) {
    const clone = li.cloneNode(true);   // 要素を複製
    ul.append(clone);
}