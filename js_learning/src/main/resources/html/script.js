function promiseFactory(count) { // この関数はawait / asyncで書き換えることはできない
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count++;

            console.log(`${count}回目のコールです。時刻：[${new Date().toTimeString()}]`);

            if(count === 3) {
                reject(count);
            } else {
                resolve(count);
            }
        }, 1000);
    });
}

/* このコードをexecute()で書き換える
promiseFactori(0)
.then(count=> {return promiseFactory(count);})
.then(count=> {return promiseFactory(count);})
.then(count=> {return promiseFactory(count);})
.catch(errorCount => {
    console.error(`エラーに飛びました。現在のカウントは${errorCount}です。);
}).finally(() => {
    console.log("処理を終了します。");
});
*/

// await / asyncを使った書き換え
async function execute() {  // awaitを内部で使っているためasyncを付ける
    try {
        //promiseFactory内のresolveが呼び出されるまで次の処理を実行しない
        let count = await promiseFactory(0);    // awaitによってresolveの引数の値がcountに代入される
        count = await promiseFactory(count);
        count = await promiseFactory(count);
        count = await promiseFactory(count);
    } catch (errorCount) {
        console.log(`エラーに飛びました。現在のカウントは${errorCount}です。`); // Promiseがrejectedのステータスになった場合はcatchブロックに遷移する
    } finally {
        console.log("処理を終了します。");
    }
}

execute();  // execute()の実行