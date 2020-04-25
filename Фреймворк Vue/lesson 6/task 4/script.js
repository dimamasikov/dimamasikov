let app = new Vue({
	el: '#app',
	data: {
		items: ['2', '3', '6', '25', '5'],
	},
	methods: {
		kvadrat: function(index) {
			this.items.splice(index,1,Math.pow(this.items[index],2));
		},
	},
});
