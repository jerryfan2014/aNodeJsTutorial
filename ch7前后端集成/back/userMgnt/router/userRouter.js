// 构建user模块的功能路由
const express = require("express")
const userModel = require("../db/userModel")
const Result = require("../api/result")
const userRouter = express.Router()

// 响应前段用户列表请求
userRouter.get("/user/list", (req, res) => {
    // 从数据库获取用户列表，返回给前端
    userModel.getUserList(function(err, data){
        if (err) {
            // 写日志，记录系统异常
            throw err;
        } else {
            // res.send(data)
            res.send(Result.success(data))
        }
    })
});

// module.exports = {userRouter}
module.exports = userRouter



