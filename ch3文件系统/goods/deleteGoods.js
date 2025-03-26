// 变现对文件做CRUD思路最重要
const fs = require("fs")

fs.readFile("./ch3文件系统/goods/goods.json","utf-8", function(err, data){
    if (err) throw err;
    // 把文件内容转换成（数组）对象
    // 增加一个文件非空判断，如果文件为空，不需要 JSON.parse(data)；直接构造对象
    let goods = JSON.parse(data);

    // 删除id=2的商品
    for (i = 0; i < goods.length; i++) {
        // 找到id=2的商品
        if (goods[i].id == 2) {
            // 删除指定元素
           goods.splice(i, 1) 
        }
    }  

    // 把goods对象转换成字符串
    let goodStr = JSON.stringify(goods);
    // 回写更新文件
    fs.writeFile("./ch3文件系统/goods/goods.json", goodStr, function(err){
        if (err) throw err;

        console.log("文件写入成功");
    })
})