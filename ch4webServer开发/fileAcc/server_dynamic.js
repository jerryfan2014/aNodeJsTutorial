/**
 * 动态处理静态资源请求,注意：站点内超链接要按照静态网站的方式做好
 * 代码中修改静态网站站点文件夹名，即可渲染该站点
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer();
server.on('request', function(req, res) {
  // 当用户访问 / 的时候，默认让用户访问 index.html
  var url = req.url;
  console.log(url);//每次请求获取资源路径在服务端输出
  var fullPath = path.join(__dirname,'static',url);
  if (url==='/') {
    fullPath = path.join(__dirname,'static','index.html');
  }
  
  fs.readFile(fullPath,function (err,data) {
    if (err) {
      // 在进行web开发的时候，如果发生了错误，可以直接把该错误消息输出到 客户端
      return res.end(err.message);
    }
    res.end(data);
  });
});
server.listen(8001, function() {
  console.log('server is runnig at port 8001');
});
