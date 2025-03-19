// 变现对文件做CRUD思路最重要
const fs = require("fs")

fs.readFile("./ch3文件系统/goods/goods.json","utf-8", function(err, data){
    if (err) throw err;
    // 把文件内容转换成（数组）对象
    // 增加一个文件非空判断，如果文件为空，不需要 JSON.parse(data)；直接构造对象
    let goods = JSON.parse(data);
    let newItem = { 
        "id": 4, 
        "name": "PC008-3ZZZ", 
        "price": 222}
    goods.push(newItem);
    // 把goods对象转换成字符串
    let goodStr = JSON.stringify(goods);
    // 回写更新文件
    fs.writeFile("./ch3文件系统/goods/goods.json", goodStr, function(err){
        if (err) throw err;

        console.log("文件写入成功");
    })
     

})