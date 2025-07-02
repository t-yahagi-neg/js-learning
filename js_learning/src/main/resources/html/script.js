let instance = new Promise((resolve, reject) => {
    // 1秒後に実行
    setTimeout(() => {
        // 0～10のランダムな値を取得
        const rand = Math.floor(Math.random() * 11);

        if(rand < 5) {
            // 5未満のとき、エラーとする
            reject(rand);
        } else {
            // それ以外のとき、成功とする
            resolve(rand);
        }
    }, 1000);
});

instance = instance.then(value => {
    console.log(`5以上の値[${value}]が渡ってきました。`);
});

instance = instance.catch(errorValue => {
    console.log(`5未満の値[${errorValue}]が渡ってきたためエラー表示。`);
});

instance = instance.finally(() => {
    console.log("処理を終了します。");
});