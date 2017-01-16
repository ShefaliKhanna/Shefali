var fs = require("fs");  
  
function abc(){  
fs.readFile('nyny.txt', function (err, data) {  
    if (err) return console.error(err);  
    console.log(data.toString()); 
	
	console.log("Hii i am in function abc");
	bcd();
});  

console.log("Program Ended"); 

}
function bcd(){

console.log("Hello I am in function bcd");

}

function main(){
abc();

}
main();