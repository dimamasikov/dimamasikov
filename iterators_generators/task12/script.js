const obj = {a: 1, b: 2, c: 3, *[Symbol.iterator]() {
for (let key in this) {
yield this[key];
        }
    }
}
for (let elem in obj) {
console.log(elem)
}
