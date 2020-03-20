let str = '<a href="" class="eee" id="zzz">';
let a= str.match(/\w+?(?==)/g);
console.log(a);
