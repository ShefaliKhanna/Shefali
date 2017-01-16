
function mm(){

var a=100;

main(a,function(err,data){

if(err) return console.error(err);
console.log(data);

});

console.log("Happy ending");

function main(data,cb){
console.log("Happy ending1");
cb(null,data);

}

}
mm();