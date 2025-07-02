function promiseFactory(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 渡されてきたcountの値をインクリメント
            count++;

            console.log(`${count}回目のコールです。時刻：[${new Date().toTimeString()}]`);

            // ３回目のコールでエラー
            if(count === 3) {
                reject(count);
            } else {
                // 次のthenのコールバック関数の引数にcountが渡る
                resolve (count);
            }
        }, 1000);
    });
}

promiseFactory(0)
.then(count => {return promiseFactory(count);})
.then(count => {return promiseFactory(count);})
.then(count => {return promiseFactory(count);})
.then(count => {return promiseFactory(count);})
.catch(errorCount => {
    console.log(`エラーに飛びました。現在のカウントは${errorCount}です。`);
}).finally(() => {
    console.log("処理を終了します。");
});