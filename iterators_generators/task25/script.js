document.querySelector('button').addEventListener('click', () => {
const elems = document.querySelectorAll('p').entries();
for ([index, elem] of elems) {
elem.innerHTML += index;
}
});
