let object = {'k1': '1', 'k2': '2', 'k3': '3', 'k4': '4',
*[Symbol.iterator](){
for (let k in this){
    yield this[k];    
        }
    }
};

console.log(...object);
