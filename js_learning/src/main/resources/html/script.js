let val = 0;

// 1秒後にval = 1が実行される
setTimeout(() => {val = 1;},1000);

// setTimeoutのコールバックの完了を待たず、この処理が実行される
console.log(val);