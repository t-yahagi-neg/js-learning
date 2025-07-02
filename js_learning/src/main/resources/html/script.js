// イテレータを生成する関数
function genIterator(max) {
    let value = 0;  // １

    return {
        next() {
            if(value < max) {   // valueがmaxより小さいとき
                return {
                    done: false,    // doneがfalseの場合は反復処理の継続を表す
                    value: value++  // １のvalueを値として設定してから+1を行う
                }
            } else {
                return {
                    done: true  // doneがtrueになると、反復処理の終了を表す。また、この時のイテレータが返す値（value）は一般的に使用しないため、valueプロパティは省略している
                }
            }
        }
    }
}

const iterator = genIterator(3);

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());