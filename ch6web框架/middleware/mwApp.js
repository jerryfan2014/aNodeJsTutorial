const express = require("express")
const app = express();
// 定义中间件
function middleware(req, res, next){
    console.log(">>>>>>>>中间件1处理完毕...")
    // 请求的控制权交给下一个环节
    next();
}
function middleware2(req, res, next){
    console.log(">>>>>>>>中间件2处理完毕...")
    // 请求的控制权交给下一个环节
    next();
}
// 前端所有请求，都会经过app挂载的中间件处理，包括请求的url不存在
app.use(middleware);
app.use(middleware2)
//中间件的定义和挂载一步完成
app.use(function middleware2(req, res, next){
    console.log(">>>>>>>>中间件3处理完毕...")
    // 请求的控制权交给下一个环节
    next();
});

// 添加静态资源文件读取
app.use(express.static(__dirname + "/../static"));
// 添加表单处理的中间件
app.use(express.urlencoded({ extended: true }))

app.get("/middleware", (req, res) => {
    console.log("....请求处理完毕...")
    // 不要忘了，请求处理完毕后，给前段响应
    res.send("/middleware请求,处理完毕...")
})

app.get("/", (req, res) => {
    console.log("....请求处理完毕...")
    // 不要忘了，请求处理完毕后，给前段响应
    res.send("/请求,处理完毕...")
})


const PORT =80;
app.listen(PORT, (err) => {
    console.log(" server running at port " + PORT);
})