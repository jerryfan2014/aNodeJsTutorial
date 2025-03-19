// 遍历指定文件夹，如果存在扩展名为"gif"的文件，就删除

const fs = require("fs")
const path = require("path")
fs.readdir("./ch3 文件系统", (err, files) => {
    // 出错，就抛出异常或记录错误信息到日志系统（文件）
    if (err) throw err; 

    // 统计被删除的文件的数量
    let counter = 0;
    files.forEach((f) => {
        console.log(f);
        let extName = path.extname(f);
        // console.log("文件扩展名：", extName)
        // 注意扩展名有个“.""
        if (extName == ".gif") {
            fs.unlink("./ch3 文件系统/" + f, function(err) {
                if (err) throw err;
                // 文件删除成功，计数器counter加1
                counter ++;
                console.log("counter:", counter)
            } )
        }
    })

    // console.log("共删除 " + counter + " 个文件");
})

