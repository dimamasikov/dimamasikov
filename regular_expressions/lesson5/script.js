let str = 'sss site.ru zzz site.com kkk';
let a= str.replace(/\w+\.\w+/g, '<a href="http://$&">$&</a>');
console.log(a);
