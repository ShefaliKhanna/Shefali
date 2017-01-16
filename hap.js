var express = require('express');
var app = express();

app.get('/hello', function(req, res){
	res.send("Hello World hiiiii!");
});

app.listen(3000);