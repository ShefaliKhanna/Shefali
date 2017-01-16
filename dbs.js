
var mysql=require("mysql");


var connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"shefali"
});

var i=1;

connection.connect();  
for(i=1;i<=10;i++){  

connection.query("select id from shefali1 where id=" +i , function(err, rows1, fields)   
{  
   //console.log(rows1); 

		connection.query("select number from shefali1 where id=" +rows1[0].id , function(err, rows2, fields) {
			//	console.log(rows2);
			connection.query("select name from shefali1 where number=" +rows2[0].number , function(err, rows, fields) {
		
					console.log('User id:',rows1[0].id);
					console.log('User Name:',rows[0].name);
					console.log('User Number:',rows2[0].number);
				
				
			
	
			});
	
		});
 
	});  
	
} 
//connection.end(); 

//(select number from shefali1 where id=( select id from shefali1 where id=