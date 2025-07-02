// 1. コードの実行開始
let val = 0;

// 2. タスクの登録
setTimeout(function task() {
    val = 1;
}, 0);

// 3. 値の出力
console.log(val);

// valは1ではなく0。すなわち2. より前に3. が実行されていることを表す

// 4. グローバルコンテキストの消滅