var http = require('http');
var url = require('url');
var util = require('util');

var mjAPI = require("./lib/mj-single.js");


mjAPI.config({MathJax: {}});
mjAPI.start();



http.createServer(function(req, res){
	var urlObj = url.parse(req.url, true);
	var tex = urlObj.query.tex;
	
	if(tex){
		mjAPI.typeset({
			math: tex,
			format: "TeX",
			png:true
		}, function (data) {
			if (!data.errors) {
				res.writeHead(200, {'Content-Type': 'image/png'}); 				
				res.end(new Buffer(data.png.slice(22),'base64'));
			}
		});
	}else{
		res.writeHead(200, {'Content-Type': 'text/html'}); 				
		res.end('<img src="http://127.0.0.1:4000?tex=x%5E2%2By%5E2%3D0">');
	}

	
}).listen(4000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:4000/');
