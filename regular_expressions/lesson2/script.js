let str = 'a1b c34d x567z';
let a= str.match(/\d/g);
let sum=0;
for(let elem of a){
	sum+= new Number(elem);
}
console.log("2 задание "+sum);


