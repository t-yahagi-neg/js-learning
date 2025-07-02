// アルファベットのa-zを順番に返すイテレータ
function alphabetIterator(start="a", end="z") {
    if(start > end) {
        throw "開始文字は終了文字より前のアルファベットを選んでください。";
    }

    // splitはStringオブジェクトのメソッドで引数で指定された文字で文字列を分割し、配列として返す
    // なお、空文字（""）が渡された場合には文字列を1文字ずつ分割する
    const ALPHABET_ARRAY = "abcdefghijklmnopqrstuvwxyz".split("");  // アルファベットが1文字ずつ格納された配列を定義
    // ALPHABET_ARRAY = ['a','b','c', ... ,'z'];

    // startとendの文字を配列内で検索し、一致する要素の添字を取得
    const startIndex = ALPHABET_ARRAY.indexOf(start);
    const endIndex = ALPHABET_ARRAY.indexOf(end);

    // 配列を指定の範囲で切り取り（endの文字も含めたいので+1する）
    const targetAlphabet = ALPHABET_ARRAY.slice(startIndex, endIndex + 1);

    return {
        next() {
            // 配列のshiftメソッドで配列の先頭から1つずつ要素を取り出す。
            // 取り出す要素がなくなったとき、shift()はundefinedを返す
            const alphabet = targetAlphabet.shift();

            return {
                value: alphabet,    // 取り出された要素をvalueとして返す
                done: alphabet ? false : true,  // alphabetがundefinedのとき、trueを返す
            }
        }
    }
}

const it = alphabetIterator("b","t");
let nextValue = it.next();
while(!nextValue.done) {    // doneがtrueのとき、whileループを抜ける
    console.log(nextValue);

    nextValue = it.next();    // 次の値をnextValueに格納
}