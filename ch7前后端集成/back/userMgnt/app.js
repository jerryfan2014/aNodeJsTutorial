// 构建web server
const express = require("express")
const userRouter = require("./router/userRouter")
const app = express();

// json（）中间件用于从request.body中获取json数据
app.use(express.json())
app.use(userRouter)
app.get("/", function(req, res) {
    res.send(">>>>>>>>>>> 主页 <<<<<<<<<<<")
})

const PORT = 80
app.listen(PORT, function(err){
    console.log("server running on port" + PORT)
})