var http=require("http");
var fs=require('fs');
var mysql      = require('mysql');  
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'hello'  
}); 
connection.connect();  
var err404=function(response)
{
	 response.writeHead(404,{'Content-Type':'text/plain'});
	 response.write("error");
	 response.end();
}

var server=http.createServer(function(request,response){

	//console.log("Hii user, you made a request" +request.url);
	//response.end("Hello world");
	if(request.url=='/'){
		
		fs.createReadStream("./index.html").pipe(response); 
		
		//console.log(x);
		//To write out all the things.
	}
	else if(request.url=='/shsh'){
		
		fs.createReadStream("./shsh.html").pipe(response); 
	}
	else if(request.method=='GET' && request.url=='/new'){
		fs.createReadStream("./newform.html").pipe(response); 
	}
	else if((request.url).indexOf(".jpg")!=-1){
		response.writeHead(200,{'Content-Type':'image/jpg'});
		fs.createReadStream("./"+request.url).pipe(response); 
	}
	else if(request.url=='/display1.html'){
		fs.createReadStream("./display1.html").pipe(response); 
	}

	else if(request.url=='/form'){
		
		fs.createReadStream("./form.html").pipe(response);
		/*app.get('/form.html', function (req, res) {
			console.log("connected");
		var name=request.body.name;
		var email=request.body.email;
		var number=request.body.description;
		
		connection.query('insert into table values ("'+name+'","'+email+'","'+number+'")');
		connection.query('select *from table');*/
		

		/*app.post('/add.html',function(req,res){
			
			console.log(rows);
			res.send(req.body.user_id+req.body.email_id);
			
		})*/
		
	}
	else if(request.url=='/add.html'){
		
		//fs.createReadStream("./form.html").pipe(response);
		app.post('/add.html', function (req, res) {
			console.log("connected");
		var name=request.body.name;
		var email=request.body.email;
		var number=request.body.description;
		res.send(name+email+number);
			connection.query('insert into table(name,email,number) values ("'+name+'","'+email+'","'+number+'")');
			connection.query('select *from table',function (err,rows,fields){
			if (err) throw err;
			console.log(rows);
		});

		/*app.post('/add.html',function(req,res){
			
			console.log(rows);
			res.send(req.body.user_id+req.body.email_id);
			
		})*/
		
	});
	}
	else{
		   err404(response); 
	     }
	
	
	
});

server.listen(8081,'localhost',function(){
	console.log("Server is running");
})

connection.end();