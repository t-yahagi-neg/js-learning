// resolve()を100ミリ秒後に実行するPromiseインスタンス
const myResolve = new Promise(resolve => {
    setTimeout(() => {
        resolve("resolveが呼ばれました。");
        console.log("myResolveの実行が終了しました。");
    }, 300); // rejectと時間を逆にすると順番が変わる
});

// reject()を200ミリ秒後に実行するPromiseインスタンス
const myReject = new Promise((_, reject) => {
    // resolveを使わない為 _ としておく
    setTimeout(() => {
        reject("rejectが呼ばれました。");
        console.log("myRejectの実行が終了しました。");
    }, 200);
});

Promise.race([myReject, myResolve])
    .then(value => {
        console.log(value);
    }).catch(value => {
        console.log(value);
    });