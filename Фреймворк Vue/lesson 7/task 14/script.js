let app = new Vue({
	el: '#app',
	data: {
		ok: true,
	},
	methods:{
		knopka: function(){
			this.ok = !this.ok;
		},
	},
});
