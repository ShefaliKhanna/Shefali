var http=require("http");

var server=http.createServer(function(request,response){

	console.log("Hii user, you made a request" +request.url);
	response.end("Hello world");

});

server.listen(8081,'localhost',function(){
	console.log("Server is running");
})
