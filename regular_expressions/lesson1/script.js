let str = 'http://code.mu';
let a = /^http(:|s:)\/\//.test(str);
console.log("2 задание -> "+a);

let str1 = 'a.jpg';
let b = /\.jpe?g$/.test(str1);
console.log("4 задание -> "+b);

let str2 = '12345';
let c= /\d{1,12}/.test(str2);
console.log("6 задание -> "+c);

let str3 = '20.03.2020';
let d= /.+\..+\..+/.test(str3);
console.log("8 задание -> "+d);

let str4= 'dima_masikov@mail.ru';
let e= /^.+@.+\..+$/.test(str4);
console.log("10 задание -> "+e);

