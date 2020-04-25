let mass =['1', '2', '3', '4', '5'];
let app = new Vue({
	el: '#app',
	data: {
		selected: mass[0],
		options: mass,
	},
});
