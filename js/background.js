// var keys ={
// 	a : 65,
// 	w : 87,
// 	s : 82,
// 	d : 68,
// 	up: 38,
// 	dn: 40,
// 	lf: 37,
// 	rt: 39,
// 	enter: 13,
// 	esc: 27
// };

// function keydown(k){
// 	var eventObj = document.createEvent("Events");
// 	if (eventObj.initEvent) {
// 		eventObj.initEvent("keydown",true,true);
// 	}
// 	eventObj.keyCode = 65;
// 	eventObj.which = 65;
// 	console.log("keyCode is: ", eventObj.keyCode);
// 	document.body.dispatchEvent(eventObj);
// }

// console.log("Leapgame.js is loaded!");
// 	// setInterval(function(){ 
// 	// 	chrome.tabs.executeScript(null, {
// 	// 	code: 'var eventObj = document.createEvent("Events");' +
// 	// 		'eventObj.initEvent("keydown",true,true);' +
// 	// 		'eventObj.keyCode =' + 65 + ';' +
// 	// 		'eventObj.which =' + 65 + ';' +
// 	// 		'document.body.dispatchEvent(eventObj);'
// 	// 	});
// // chrome.tabs.executeScript(null, {
// // 	code: 'document.body.style.backgroundColor="red"'
// // 	},
// // 	function(){}
// // );
// 	// }, 3000);