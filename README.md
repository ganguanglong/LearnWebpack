# LearnWebpack
老师的这个课程，脉络并不算很清晰。<br />
我尝试着一步步总结下来吧:sweat_smile:。
## webpack 基本介绍
- [webpack官网](webpack.github.io/docs/what-is-webpack.html)
**官方定义：是一个模块打包器**
- [webpack官方GitHub](https://github.com/webpack/webpack)<br />
**官方GitHub定义：是一个给js准备的打包工具**
- （Code Splitting）通过代码分割等方式把众多模块打包成很少的静态文件
- （loader）通过loader可以给js以外的其他文件进行处理以及大包<br />
  （例如：html,json,image,css,less等等）
- （pulging system）插件系统
- 打包过程：
![](https://github.com/ganguanglong/LearnWebpack/blob/master/assets/what-is-webpack.png)
- 目标
  - 减少加载时间
  - 把各种模块作为静态文件被引用 
## webpack 安装和命令行
* 基本使用方法
1. 创建目录<br />
    >mkdir webpack-test
2. 初始化npm <br />
    >npm init
3. 安装webpack<br />
    >npm install webpack --save--dev<br />
![](https://github.com/ganguanglong/LearnWebpack/blob/master/assets/webpack_2-1.png)    
4. 编写你的项目
5. 打包<br />
        >webpack "文件名" "打包后的文件名" 例如(webpack hello.js hello.bundle.js)
* 处理.css 类型文件
1. 安装处理 css的loader<br />
    >npm install css-loader style-loader --save--dev  
2. 为css指定响应的loader<br />
    >require('style-loader!css-loader!./style.css')
    * css-loader是使得webpack可以解析css文件
    * style-loader是使得css文件可以插入html文件里面
3. 可以在命令行用以下的命令代替2.<br />
    >webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'
* 进入观察模式（每次改变文件，自动编译打包）
    > --watch (在命令行添加此后缀即可)
* 列出打包过程
    > --progerss (同上)
* 列出打包的所有模块
    > --display-modules（同上）
* 列出打包原因
    > --display-reasons（同上） 