const fs = require("fs")
var productInfo=[ 
    {'name':'PC005-3A','size':'101mm',price:'108'},
    {'name':'PC008-1 BENZ.with diode','size':'93mm',price:'216'},
    {'name':'PC008-3A','size':'101mm',price:'295'}
]; 

fs.writeFile("./file/a.txt", JSON.stringify(productInfo), function(err){
    if (err) {
        throw err;
    } else {
        console.log("文件写入成功")
    }
})


// 用同步方式writeFileSync()重写上述代码
// 把productInfo数据抽取成一个数据文件，再导入