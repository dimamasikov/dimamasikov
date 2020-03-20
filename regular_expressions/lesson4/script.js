let str = '12 34 56 78';
let a= str.replace(/([1-9])([1-9])/g, '$2$1');
console.log(a);
