const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//注：下面key中带单引号的是非固定的命名，不带单引号的是固定命名
module.exports = {
    //入口
    entry:{
        //可以有多个入口，也可以有一个，如果一个，就默认从这个入口开始分析
        'test' : './src/main.js'
    },
    //输出
    output:{
        //指定产出的目录
        path:path.resolve('./dist'),//相对转绝对
        filename:'build.js'
    },
    //声明模块包含各个loader
    module: {
        //webpack后面版本可以叫做roles
        loaders: [
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test:/\.(jpg|png|gif|svg)$/,
                loader: 'url-loader?limit=4096'
                //如果文件大小大于limit限制，构建的时候生成一个图片文件，小于limit则生成base64到build.js中
                //建议比较小的图片，使用base64的方式
            },{
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },{
                //处理es6及以上版本
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                //是对上面的loader的配置，相当于图片里面的?limit=4096
                //由于es6的配置比较多，所以写到options里面
                options:{
                    presets:['env'],//处理关键字 如const let
                    plugins:['transform-runtime']//处理函数
                }
            },{
                //处理vue
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    //插件的执行顺序与元素位置有关
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'//参照物
        })
    ]
}