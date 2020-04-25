let app = new Vue({
	el: '#app',
	data: {
		show: false,
	},
	methods: {
		showText: function(){
			this.show = !this.show;
		}
	},
});
