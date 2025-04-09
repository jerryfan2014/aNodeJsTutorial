// 导入http模块
http = require("http")
userData = require("./userData")
// 创建web server
server = http.createServer();
// 设置server的响应事件
server.on("request", function(req, res) {
    res.writeHead(200, {
        "content-type":"text/plain;charset=utf-8"
    });

    // 生成响应体数据
    userData.getUserList(function(err, result) {
        //遍历result， 生成一个table
        for (i = 0; i < result.length;i++) {
            userStr = result[i].id + " | "
            + result[i].name + " | "
            + result[i].age + " | "
            + result[i].email            
            console.log(userStr);
        }
        
        res.end(userStr);        
    });
});

// 设置server响应端口
server.listen(3000, function(err){
    console.log("本地服务3000端口监听中...")
})