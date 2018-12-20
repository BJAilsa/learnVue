//注：下面key中带单引号的是非固定的命名，不带单引号的是固定命名
module.exports = {
    //入口
    entry:{
        //可以有多个入口，也可以有一个，如果一个，就默认从这个入口开始分析
        'test' : './main.js'
    },
    //输出
    output:{
        filename:'./build.js'
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
            }
        ]
    },
}