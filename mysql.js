var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'hello'  
});  
connection.connect();  
  
connection.query('update shefalii set number=3 where number=2', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  console.log(rows);  
});  
  
connection.end(); 