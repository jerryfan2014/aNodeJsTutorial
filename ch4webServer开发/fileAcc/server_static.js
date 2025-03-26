var http = require('http'); 
var fs = require('fs'); // 用于读取静态资源
var path = require('path'); // 用于做路径拼接
var urlModule = require('url'); 
var server = http.createServer(); 
// 定义不同文件对应的文件类型
var mimeTypes = { 
 "css": "text/css;charset=utf-8", 
 "jpg": "image/jpeg", 
 "html": "text/html;charset=utf-8" ,
 }; 
server.on('request', function(request, response) { 
	 //获取静态资源路径
	var url = urlModule.parse(request.url).pathname; 
	 if (url === '/') { 
	 //读取相应静态资源内容
		//  path.join(__dirname, 'static/index.html') == path.join(__dirname, 'static', '/index.html')
		 fs.readFile(path.join(__dirname, 'static/index.html'), 'utf-8', function(err, data) { 
		 //如果出现异常，则抛出异常
			 if (err) { 
				console.log(err); 
			 }else{ 
				 //将读取的静态资源文件响应给浏览器
				 response.setHeader('content-type', mimeTypes['html']); 
				 response.end(data);
			} 				 
		 }); 
	 } else if (url === '/product.html') { 
		 fs.readFile(path.join(__dirname, 'static/product.html'), 'utf-8',function(err, data) { 
			 if (err) { 
				console.log(err); 
			 }else{ 
				 response.setHeader('content-type', mimeTypes['html']); 
				 response.end(data);
			 } 
		 }); 
	 //如果有图片、CSS 文件等，浏览器会重新发送请求获取静态资源
	 } else if (url === '/main.css') { 
		 var cssPath = path.join(__dirname, 'static/css/main.css') 
		 fs.readFile(cssPath, 'utf-8', function(err, data) { 
			 if (err) { 
				console.log(err); 
			 }else{ 
				 response.setHeader('content-type', mimeTypes['css']);  // mimeTypes.css
				 response.end(data);
			} 
		 }); 
	 } else if (url === '/pro-1.jpg') { 
		 var imgPath = path.join(__dirname,'static/images/pro-1.jpg') 
		 fs.readFile(imgPath, function(err, data) { 
			 if (err) { 
				console.log(err); 
			 }else{ 
				 response.setHeader('content-type', mimeTypes['jpg']); 
				 response.end(data);
			} 
		 }); 
	 } else if (url === '/pro-2.jpg') { 
		 var imgPath = path.join(__dirname,'static/images/pro-2.jpg') 
		 fs.readFile(imgPath, function(err, data) { 
			 if (err) { 
				console.log(err); 
			 }else{ 
				 response.setHeader('content-type', mimeTypes['jpg']); 
				 response.end(data);
			} 
		 }); 
	 } else { 
		 fs.readFile(path.join(__dirname, 'static/404.html'), 'utf-8', function(err, data) { 
			 if (err) { 
				console.log(err); 
			 }else{ 
				 response.setHeader('content-type', mimeTypes['html']); 
				 response.end(data);
			} 
		 }); 
	 } 
}); 
server.listen(8002, function() { 
 console.log('listening port 8002...'); 
});