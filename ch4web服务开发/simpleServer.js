const http = require("http")
// 创建webserver
let server = http.createServer();
// 设置server对request事件类型的响应方法
server.on("request", (req, res) => {
    // 打印请求信息
    console.log("请求路径url:", req.url);
    console.log("请求方法", req.method);
    //设置响应头header
    // 1 简单文本
    // res.writeHead(200, {
    //     "content-type":"text/plain;charset=utf-8"
    // });
    // res.write("欢迎学习nodejs!");
    // 2 输入框 input
    res.writeHead(200, {
        "content-type":"text/html;charset=utf-8"
    });
    
    //设置响应体body
    res.write("请输入用户名: <input type='text'/>");
    res.write("<table border='1'><tr><td>Id</td><td>UserName</td></tr></table>");
    
    res.end();
    // res.end("欢迎学习nodejs!");
})

// 监听浏览器请求request;端口未被占用
// server.listen(8000, () => {
//     console.log("本地服务8000端口监听中...")
// })

server.listen(8000)