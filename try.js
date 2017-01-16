function placeorders(number){
	
	console.log("Delivery number:",number);
	
	callanddelivery(function(){
	console.log("Delivered order",number);
	
	});

	
}

function callanddelivery(callback){

	setTimeout(callback,5000);

} 
placeorders(1);
placeorders(2);
placeorders(3);
placeorders(4);
placeorders(5);