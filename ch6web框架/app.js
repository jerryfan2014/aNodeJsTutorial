const express = require("express")
const app = express();
// app指定get方法，则只能响应get请求方式的http请求
// 响应http请求的handler(处理器)就是一个回调函数
app.get("/", (req, res) => {
    // console.log(req.method);
    // console.log(req.url);

    // res.send("hello, express!")

    res.redirect("/hello")
});

app.all("/hello", (req, res) => {
    console.log(req.method);
    console.log(req.url);    

    res.send("postMethod-------------")
});

// app.get("/ab?cd", (req, res) => {
// regExpress对象
// app.get(/^ab?cd$/, (req, res) => {
app.get(/ab?cd/, (req, res) => {
    res.send("表达式：【/ab?cd/】")
});

app.get(/ab+cd/, (req, res) => {
    res.send("表达式：【/ab+cd/】")
});

app.get(/ab*cd/, (req, res) => {
    res.send("表达式：【/ab*cd/】")
});

app.get(/ab(ef)+d/, (req, res) => {
    res.send("表达式：【/ab(ef)+d/】")
});

// 路径变量/路径参数
app.get("/user/:action/:userId", (req, res) => {
    console.log("req.params:", req.params)
    console.log("userId:", req.params.userId)
    console.log("userId:", req.userId)
    // res.send("req.params:", JSON.stringify(req.params)) 
    res.send("req.params:" + JSON.stringify(req.params))    
});



app.listen(3001, function(){
    console.log(">>>>>>>>Server running on port 3001 <<<<<<<<<<<<<<<")
})
