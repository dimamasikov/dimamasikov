let app = new Vue({
	el: '#app',
	data: {
		textWithTags: '',
	},
	methods: {
		showText: function(){
			this.textWithTags = '<font size="15" color="green">Текст</font> <font size="20" color="red">c</b> <font size="10" color="blue">тегами</font>';
		}
	},
});
