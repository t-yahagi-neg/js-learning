// すべてのあんた―タグ (a) を取得
const links = document.querySelectorAll("a");

// すべてのアンカータグに対してリンク無効化のアクションを追加
links.forEach(link => link.addEventListener("click", event => {
    event.preventDefault(); // ブラウザのデフォルト処理を無効化
    alert(event.currentTarget.textContent); // アラートの表示
    })
);