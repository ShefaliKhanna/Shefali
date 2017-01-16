/*var arr=[1,2];
for(var i in arr)
{
console.log(arr[i]);
}

var x=3;
console.log(x);
var y=function(){
	x=2;
	
}

y();

console.log(x);*/

var usermobile=localstorage.getItem("user");
var data=JSON.parse(localStorage.getItem(userMobile));
alert(data.firstname+""+data.lastname+"Mobile="+data.mobile);
