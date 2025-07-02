function* genIterator(max) {
    let value = 0;
    while(value < max) {
        yield value++;
    }
}

const iterator = genIterator(5);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());