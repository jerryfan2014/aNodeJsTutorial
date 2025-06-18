const fs = require("fs")

// 读文件方法1
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

// 读文件方法2
// 导入fs的promises对象
const fsPromise = require("fs").promises
fsPromise.readFile(filePath)
    .then((data) => {console.log("promise风格：" + data.toString())})
    .catch((err) => {throw err});


// 读文件方法3 ,在commonJS环境中使用
(async function(){
    try{
        const data = await fsPromise.readFile(filePath);
        console.log("async/await语法：" + data.toString())
    }catch(err) {
        throw err;
    } 
})();

// 先定义，后调用
const func1 = (async function(){
    try{
        const data = await fsPromise.readFile(filePath);
        // console.log("async/await语法[先定义，再调用]：" + data.toString())
        return data;
    }catch(err) {
        throw err;
    } 
})

const data = func1()
console.log("data:" + func1());


// try{
//     const  data1 = await fs.readFile('file1.txt');
//     const  data2 = await fs.readFile('file2.txt');
//     await fs.writeFile('file3.txt', data1+data2);

// }catch(err) {
//     // 异常写日志
//     throw err;
// }
