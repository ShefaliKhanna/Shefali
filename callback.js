var fs = require("fs");  
  
function abc(){  
fs.readFile('nyny.txt', function (err, data) {  
    if (err) return console.error(err);  
    console.log(data.toString());  
});  
console.log("Program Ended");  
}
abc();