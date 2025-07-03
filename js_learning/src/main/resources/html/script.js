document.addEventListener("DOMContentLoaded", () => {
    /* この関数内のコードはDOMツリー全体の構築が完了してから実行されます。 */
    const afterEl = document.querySelector("#after");
    console.log(afterEl.textContent);
})