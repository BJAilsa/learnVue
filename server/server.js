const path = require('path');

const fs = require('fs');
const koa = require('koa');

const app = new koa();

const Router = require('koa-router');
const router = new Router();

//处理文字和文件的请求体数据
// const formidable = require('koa-formidable');

router.post('/upload',async(ctx,next) => {
    ctx.body = 'ok';
}).get('/',async ctx => {
    // ctx.response.set('set-cookie','name=abc');
    ctx.res.setHeader('set-cookie','name=abc');
    ctx.body = 'yes';
}).post('/add',async ctx => {
    ctx.req.on('data',data => {
        console.log(data.toString());
    });
    ctx.body = 'post ok';
})

app.use(async(ctx, next) => {
    var formidable = require('formidable');
    var form = new formidable.IncomingForm();
    form.uploadDir = path.resolve('./');
    form.keepExtensions = true;
    //这个地方导致上传文件后会刷新页面，具体原因不知道，这块是上传文件需要的
    form.parse(ctx.req,function(err, fields, files){
        if(err){
            console.log('文件解析错误');
        }
    });

    form.onPart = function(part){
        part.addListener('data', function(data){
            require('fs').appendFileSync('./hbx.txt',data);
        })
    }

    await next();
});

app.use(async (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin','*');
    ctx.response.set('Access-Control-Allow-Methods',"PUT,POST,GET,DELETE,OPTIONS");
    await next();
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888,() => {
    console.log('服务器启动在8888端口');
});