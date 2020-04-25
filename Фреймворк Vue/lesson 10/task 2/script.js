let app = new Vue({
	el: '#app',
	data: {
		text: '',
		items: [],
	},
	methods:{
		knopka: function(){
			this.items = this.text.split(' ');
		},
	},
});
