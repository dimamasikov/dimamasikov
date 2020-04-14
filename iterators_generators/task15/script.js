const map = new Map([
[1, 'a'],
[2, 'b'],
[3, 'c'],
[4, 'd']
]);
const getKeys = map => {
const keys = [];
for (let key of map.keys()) {
keys.push(key)
}
return keys;
}
console.log(getKeys(map));
