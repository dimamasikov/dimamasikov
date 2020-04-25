let app = new Vue({
	el: '#app',
	data: {
		items: ['2', '3', '-5', '25', '5'],
	},
	methods: {
		knopka: function() {
			this.items = this.items.filter(function(item){
				return(item>0&&item<10);
			});
		},
	},
});
