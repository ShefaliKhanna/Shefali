var http=require("http");               //http module

var server=http.createServer(function(request,response){

	 response.end('Hello World\n');
});

server.listen(8081,'localhost',function(){

console.log("Server is running");

});