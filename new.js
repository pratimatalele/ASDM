var http=require("http");
var controller=function(req,res)
{
	console.log("hello");
}

var server=http.createServer(controller);
server.listen(2000);