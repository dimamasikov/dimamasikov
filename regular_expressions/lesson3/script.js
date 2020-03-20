let str = '31.12.2025';
let a= str.match(/(.+)\.(.+)\.(.+)/);
console.log("Элемент "+a[0]);
console.log("День: "+a[1]);
console.log("Месяц: "+a[2]);
console.log("Год: "+a[3]);

