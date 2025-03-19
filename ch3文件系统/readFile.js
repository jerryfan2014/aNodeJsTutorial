const fs = require("fs")
// 文件时相对于项目根路径的全路径
// 如果读文件显示制定encoding(编码),返回就是字符串，不是Buffer对象
// fs.readFile("./ch3 文件系统/products.txt","utf-8", (err, data) => {
fs.readFile("./ch3 文件系统/products.txt", (err, data) => {
    // 如果文件读取失败，就抛出异常    
    if (err) throw err;
    // 如果文件读取成功，就处理数据
    console.log(data)
    console.log(typeof data)
    // console.log(Object.prototype.toString.caller(data))
    let lines = data.toString().split("\n")
    let products = [];
    for (i = 0 ; i < lines.length; i++) {
        let arr = lines[i].split(",");
        let line = {name:arr[0], size:arr[1], price:arr[2]}
        products.push(line)
    }

    console.table(products)
})


//已经写完的同学， 用同步函数readFileSync()改写上述代码
//let data = fs.readFileSync("./file/products.txt")
// 同步处理要添加异常处理

// const fs = require("fs")
// try {
//     let data = fs.readFile("./file/products.txt")    
//     // 如果文件读取成功，就处理数据
//     // console.log(data.toString())
//     let lines = data.toString().split("\n")
//     let products = [];
//     for (i = 0 ; i < lines.length; i++) {
//         let arr = lines[i].split(",");
//         let line = {name:arr[0], size:arr[1], price:arr[2]}
//         products.push(line)
//     }
//     console.table(products)
// } catch (err) {
//     //
// }
