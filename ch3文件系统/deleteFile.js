// -----------------同步------------------------
const fs = require("fs")
console.log("1  文件删除前....")
try{
    // fs.unlinkSync("./a.txt")
    // 当前目录指相对于应用根目录
    fs.unlinkSync("./file/a.txt") 
    console.log("2  文件已删除....")
} catch(err) {
    throw err; //抛出异常
}

// console.log("3  文件删除后....")

// console.log("------------------------------------")


// -----------------异步------------------------
const fs2 = require("fs")
console.log("1  文件删除前....")
fs2.unlink("./file/a.txt", (err) => {
    if (err) throw err;
    console.log("2  文件已删除....")
})

console.log("3  文件删除后....")