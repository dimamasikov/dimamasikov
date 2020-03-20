let str2 = 'aaa [2] bbb [3] ccc [12] ddd';
let result = str2.replace(/\[(\d+)\]/g, function(match, value)
{
	return "[" + (value * 2) + "]";
});
console.log(result);
