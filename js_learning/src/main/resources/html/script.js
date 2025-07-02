function* gen1to3() {
    let index = 1;
    yield index;    // 1回目のnext()によってこの地点まで実行が完了
    index++;
    yield index;    // 2回目のnext()によってこの地点まで実行が完了
    index++;
    return index;   // 3回目のnext()によってこの地点まで実行が加療
}

// ジェネレータ関数の実行はGeneratorオブジェクトの生成を意味する
const generator = gen1to3();

// next()の実行によってジェネレータ関数内のコードが実行される
console.log(generator.next());

console.log(generator.next());

console.log(generator.next());