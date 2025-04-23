const express = require("express")
// 创建account模块的路由
const accountRouter = express.Router()

accountRouter.get("/account/list/:userId", (req, res) =>{
    res.send(req.url + ", userId=" + req.params.userId +", 获取用户账号列表")
})

accountRouter.get("/account/posit/:userId", (req, res) =>{
    res.send(req.url + ", userId=" + req.params.userId +",用户存款")
})

accountRouter.get("/account/deposit/:userId", (req, res) =>{
    res.send(req.url + ", userId=" + req.params.userId +",用户取款")
})


module.exports = accountRouter;