// resolve()を200ミリ秒後に実行するPromiseインスタンス
const myResolve = new Promise(resolve => {
    setTimeout(() => {
        resolve("resolveが呼ばれました。");
        console.log("myResolveの実行が終了しました。");
    }, 200);
});

// reject()を100ミリ秒後に実行するPromiseインスタンス
// rejectがmyResolveのresolveより前に呼び出される
const myReject = new Promise((_, reject) => {
    // resolveを使わない為 _ としておく
    setTimeout(() => {
        reject("rejectが呼ばれました。");
        console.log("myRejectの実行が終了しました。");
    }, 100);
});

Promise.allSettled([myReject, myResolve])
    .then(arry => {
        for(const {status, value, reason} of arry){
            //分割代入で各プロパティの値を抽出
            console.log(`ステータス：[${status}], 値：[${value}], エラー：[${reason}]`);
        }
    });