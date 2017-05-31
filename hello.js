require('./world.js') //以CommonJs的形式引入模块
require('./style.css')//一般不会这么匪夷所思地在js里面require css文件

function hello(str) {
	alert(str); 
}

hello('hello,world!');