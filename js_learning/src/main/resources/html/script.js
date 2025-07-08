// #container (sectionタグにアクションを登録する)
const containerEl = document.querySelector("#container");

containerEl.addEventListener("click", function(event){
    // currentTargetは常にアクションを登録した要素が格納される
    console.log(`currentTarget:[${event.currentTarget.nodeName}]`);
    // targetはイベントが発生した要素が格納される
    console.log(`target:[${event.target.nodeName}]`);
})