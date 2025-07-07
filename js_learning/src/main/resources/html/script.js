const sum = document.querySelector("#sum");
const val1 = parseInt(sum.dataset.baseVal1);    // データ属性値を取得
const val2 = parseInt(sum.dataset.baseVal2);    // "-"はキャメルケースとして表現する

sum.dataset.sumVal = val1 + val2;   // データ属性の追加も可能
sum.textContent = val1 + val2;  // 結果をテキストとして追加