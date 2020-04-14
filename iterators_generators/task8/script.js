function * createIterator(arr) {
while (arr.length) {
yield console.log(arr.splice(0, 2));
}
}

const iterator = createIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
