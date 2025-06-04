const express = require("express")
const multer = require("multer")
const fs = require("fs")
const app = express()
// 访问静态资源，需要挂载static中间件（函数）
app.use(express.static(__dirname + "/../static"));
const uploadDir = __dirname + "/uploads"; // 定义文件上传路径
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
    
}
//定义文件上传要求
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {        
        const fileName = Buffer.from(file.originalname, 'latin1').toString("utf-8"); // 防止中文乱码        
        cb(null,`${Date.now()}-${fileName}`) // 把上传的文件更名为 “上传时间+原始文件名”
    }
})
// 定义multer实例
upload = multer({
    storage,
    limits:{files:5, fileSize: 1024 * 1024 *10} //单个文件大小不能超过10M
})
app.post("/multiFileUpload", upload.array("uploadFiles"), (req, res) => {
    try {
        // 对上传文件判空
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({msg: "未上传文件"})
        }
        const fileInfo = req.files.map(file => ({
            originalname: Buffer.from(file.originalname, 'latin1').toString("utf-8"),
            savedName: file.filename,
            size: file.size
        }));
        res.json({
            message: "上传成功",
            files: fileInfo,
            count: req.files.length,
            formData: req.body
        })
    } catch(error) {
        res.status(500).json({msg: error.message})    
    }   
})
const PORT = 80
app.listen(PORT, function(err) {
    console.log("服务在端口:" + PORT + "运行....")
})