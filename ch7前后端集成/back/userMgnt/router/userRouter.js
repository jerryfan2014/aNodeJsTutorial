// 构建user模块的功能路由
const express = require("express")
const userModel = require("../model/userModel")
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

// 保存用户信息
userRouter.post("/user/save", (req, res) =>{
    let  user = req.body;
    // 保存数据到数据库
    userModel.saveUser(user, function(err, data) {
        if (err) {
            // 写日志，记录系统异常
            throw err;
        } else {
            // res.send(data)
            res.send(Result.success())
        }
    })
})

// 获取用户信息
userRouter.get("/user/get/:userId", function(req, res) {
    let userId = req.params.userId;
    userModel.getUser(userId, function(err, data){
        if (err) {
            // 写日志，记录系统异常
            throw err;
        } else {
            // res.send(data)
            res.send(Result.success(data))
        }
    })
})

// 删除用户
userRouter.delete("/user/del/:userId", function(req, res) {
    let userId = req.params.userId;
    userModel.deleteUser(userId, function(err, data){
        if (err) {
            // 写日志，记录系统异常
            throw err;
        } else {
            // res.send(data)
            res.send(Result.success())
        }
    })
})

// 条件查询
userRouter.get("/user/search", function(req, res) {
    
    let userParam = req.query;
    // console.log(userParam)
    userModel.searchUser(userParam, function(err, data){
        if (err) {
            // 写日志，记录系统异常
            throw err;
        } else {
            // res.send(data)
            // console.log(data)
            res.send(Result.success(data))
        }
    })
})


// module.exports = {userRouter}
module.exports = userRouter



