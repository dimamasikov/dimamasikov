let object ={'k1': '1', 'k2': '2', 'k3': '3', 'k4': '4'};
function *createIterator(object){
    for (let k in object){
        yield object[k];
    }
}
let iterator = createIterator(object);
for (let elem of iterator){
    console.log(elem);
}
