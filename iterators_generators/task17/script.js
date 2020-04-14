let body = document.querySelector('body');
let ul = document.createElement('ul');
let string = '12345678910';
for (let a of string){
    let li = document.createElement('li');
    li.innerHTML = a;
    ul.appendChild(li);
}
body.appendChild(ul);
