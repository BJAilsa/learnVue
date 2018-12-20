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
    watch: true,//监视文件发生改动，自动产出build.js
}