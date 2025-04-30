const express = require("express")
const userApp = express()

// 用户模块 , 访问路径以"/user"为前缀，包括 user/list, user/create, user/update/:id, user/delete/:id ,user/...
// 账号模块， 访问路径以"/account"为前缀， 包括 account/balance, account/posit, account/deposit, account/transfer
// 其他模块

userApp.get("/user/list", (req, res) =>{
    res.send(req.url + ", 返回用户列表")
})

userApp.post("/user/create", (req, res) =>{
    res.send(req.url + ", 创建新用户")
})

userApp.post("/user/update", (req, res) =>{
    res.send(req.url + ", 更新用户")
})

userApp.get("/user/delete/:id", (req, res) =>{
    console.log(req.query)
    res.send(req.url + ", id=" + req.params.id +", 删除用户")
})


userApp.get("/account/list/:userId", (req, res) =>{
    res.send(req.url + ", userId=" + req.params.userId +", 获取用户账号列表")
})

userApp.get("/account/posit/:userId", (req, res) =>{
    res.send(req.url + ", userId=" + req.params.userId +",用户存款")
})

userApp.get("/account/deposit/:userId", (req, res) =>{
    res.send(req.url + ", userId=" + req.params.userId +",用户取款")
})

// .... 其他模块若干

userApp.listen(3001, function(){
    console.log(">>>>>>>>Server running on port 3001 <<<<<<<<<<<<<<<")
})