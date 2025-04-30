const express = require("express")
// 创建用户模块的路由
const userRouter = express.Router()

userRouter.get("/user/list", (req, res) =>{
    res.send(req.url + ", 返回用户列表")
})

userRouter.post("/user/create", (req, res) =>{
    res.send(req.url + ", 创建新用户")
})

userRouter.post("/user/update", (req, res) =>{
    res.send(req.url + ", 更新用户")
})

userRouter.get("/user/delete/:id", (req, res) =>{
    console.log("req.query:" + req.query);
    res.send(req.url + ", id=" + req.params.id +", 删除用户")
})

// 到处userRouter

module.exports = userRouter