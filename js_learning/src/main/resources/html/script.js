let val = -1;

function timer() {
    setTimeout(function() {
        // 0～10のランダムな値を取得
        val = Math.floor(Math.random() * 11);
    }, 1000);
}

timer();

console.log(val);