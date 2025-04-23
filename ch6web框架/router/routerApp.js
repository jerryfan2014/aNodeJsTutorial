const express = require("express")
const userApp = express()

// 导入userRouter和accountRouter
const userRouter = require("./userRouter")
const accountRouter = require("./accountRouter")

// 注册userRouter和accountRouter到userApp对象
userApp.use(userRouter)
userApp.use(accountRouter)

userApp.listen(3008, function(){
    console.log(">>>>>>>>Server running on port 3008 <<<<<<<<<<<<<<<")
})