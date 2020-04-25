let app = new Vue({
	el: '#app',
	data: {
		button: '',
	},
	methods: {
		btnClickd: function(typeOfButton){
			this.button = typeOfButton;
		}
	},
});
