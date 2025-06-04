const express = require("express")
const multer = require("multer")
const app = express()


// 访问静态资源，需要挂载static中间件（函数）
app.use(express.static(__dirname + "/../static"));

// 定义上传对象，并制定上传路径
upload = multer({
    dest: "uploads/"
})

app.post("/fileUpload", upload.single("uploadFile"), (req, res) => {
    res.json({
        message: "上传成功",
        file: req.file,
        formData: req.body
    })

    // res.send({
    //     message: "上传成功",
    //     file: req.file,
    //     formData: req.body
    // })
})

const PORT = 80
app.listen(PORT, function(err) {
    console.log("服务在端口:" + PORT + "运行....")
})