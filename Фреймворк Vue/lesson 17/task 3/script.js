let app = new Vue({
	el: '#app',
	data: {
		text: 'text',
	},
	methods: {
		change: function(){
			this.text = 'TEXT';
		}
	},
});
