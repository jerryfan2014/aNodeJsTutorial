const express = require("express")
const app = express();
// 定义中间件

// 添加静态资源文件读取
app.use(express.static(__dirname + "/static"));
// 添加表单处理的中间件
app.use(express.urlencoded({ extended: true }))

// 从request.body获取数据，需要urlEncoded中间件
app.post("/userForm", (req, res) => {
    // console.log(req.body)
    let user = req.body;
    // 不要忘了，请求处理完毕后，给前段响应
    res.send("user.userName =" + user.userName 
            + ", user.userAge =" + user.userAge 
            + ", user.userEmail =" + user.userEmail);
})


const PORT =80;
app.listen(PORT, (err) => {
    console.log(" server running at port " + PORT);
})