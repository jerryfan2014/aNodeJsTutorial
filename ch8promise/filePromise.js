const fs = require("fs")

// 文件路径
const filePath = __dirname + "/../README.md"
fs.readFile(filePath, function(err, data){
    if (err) {
        // 写日志或者对err做处理, 比如给前端返回一个json对象
        // res.json({err: errr.errMessage})
        throw err;
    } else {
        console.log("callback风格：" + data.toString())
    }
})

// 导入fs的promises对象
const fs2 = require("fs").promises
fs2.readFile(filePath)
    .then((data) => {console.log("promise风格：" + data.toString())})
    .catch((err) => {throw err})