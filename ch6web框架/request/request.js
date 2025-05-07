const express = require("express")
const app = express();


app.use(express.static(__dirname + "/static"));
// app指定get方法，则只能响应get请求方式的http请求
// 响应http请求的handler(处理器)就是一个回调函数
app.get("/", (req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.send("hello, express!")
});

// 路径变量/路径参数
app.get("/user/:action/:userId", (req, res) => {
    console.log("req.params:", req.params)
    console.log("userId:", req.params.userId)
    // 拿不到数据
    console.log("userId:", req.query.userId)
    res.send("req.params:" + JSON.stringify(req.params))    
});

//请求参数
app.get("/user", (req, res) => {
    console.log("req.query:", req.params)
    console.log("userId:", req.query.userId)
    console.log("userId:", req.params.userId)    
    res.send("req.query:" + JSON.stringify(req.query))    
});

const PORT = 8080
app.listen(PORT, function(){
    console.log(">>>>>>>>Server running on port " + PORT)
})
