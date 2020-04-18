class MyString {

reverse(string) {
var arr = string.split('');
var arr = arr.reverse();
return arr.join('');
}
ucFirst(string) {
var str = string.slice(0, 1).toUpperCase() + string.slice(1);
return str;
}
ucWords(string) {
var arr = string.split(' ');
for(var i = 0; i < arr.length; i++) {
arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
return arr.join(' ');
}
}
