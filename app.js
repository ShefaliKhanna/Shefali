var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send("<form action='add.html' method='post'> firstname:<input name='name1'/><br>lastname:<input name='name2'/> <input type='submit'>");
})

app.post('/add.html',function(req,res){
  res.send(req.body.name1+req.body.name2);
})

app.listen(3000);