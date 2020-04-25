let app = new Vue({
	el: '#app',
	data: {
		date: '2020-04-25',
	},
	filters: {
		деньмесяцгод: function(value){
			return value.split('-').reverse().join('.');
		}
	}
});
