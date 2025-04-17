// 导入http模块
http = require("http")
userData = require("./userData")
// 创建web server
server = http.createServer();
// 设置server的响应事件
server.on("request", function(req, res) {
    res.writeHead(200, {
        "content-type":"text/html;charset=utf-8"
    });
    // 生成响应体数据
    userData.getUserList(function(err, userArr) {
        // 定义一个字符串变量tableStr，这个变量用于生成包含user数据的html表格
        let tableStr = "<html><table border='1'>"
        // 生成表头
        tableStr += "<tr>" +
                        "<td>ID</td>" +
                        "<td>Name</td>" +
                        "<td>Age</td>" +
                        "<td>Email</td>" +
                        "</tr>";
        //遍历result， 生成一个tableStr
        for (i = 0; i < userArr.length;i++) {
            tableStr += "<tr>";
            tableStr += "<td>" + userArr[i].id + "</td>";
            tableStr += "<td>" + userArr[i].name + "</td>";
            tableStr += "<td>" + userArr[i].age + "</td>";
            tableStr += "<td>" + userArr[i].email + "</td>";
            tableStr += "</tr>";
        }

        tableStr += "</table></html>"
        res.end(tableStr);        
    });
});

// 设置server响应端口
server.listen(3000, function(err){
    console.log("本地服务3000端口监听中...")
})