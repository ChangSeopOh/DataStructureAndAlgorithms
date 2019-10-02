/*Call back

// Higher order function?
//-> a function that accept a callback as a parameter

//Purpose for Call back
Advanced Array Methods
Browser events
AJAX Requests
React Development
--------------------
*/

function callback(){
	console.log("hello!")
}

function hello(fn){
	console.log("first")
	fn(); //parameter call function.
	console.log("second")
}

//console.log(hello(callback));

/////////////////////////////

function sendMessage(message, callback){
	return callback(message);
}

// sendMessage("message for console",console.log)
// sendMessage("message for console",console.log)

//////////////////////////////

function greet(name, formatter){
	return "Hello, " +formatter(name);
}
function upperCaseName(name){
	return name.toUpperCase();
}
// console.log(greet("Tim", upperCaseName))
// //Anonymous Function
// console.log(greet("Jaden", function(name){
// 	return name.toUpperCase();
// }))

/////////////////////////////////

function forEachTest(){
	var strings = ["my","forEach","example"]

	var result ="";
	                //my, 0,    stringsArray
	strings.forEach((str, index, array) => { 
		if(array.length-1 !== index){ //not end index
			result += str+" ";
		}else{
			result += str + "!!!";
		}
	})

	return result;
}

//console.log(forEachTest());

//findIndex
function findInsdex(){
	var arr = [3,4,6,2,1];

	// var result = arr.findIndex(function(num, index, array){
	// 	return num %2 ===0;
	// })	
	var result = arr.findIndex((num, index, array)=>{
		return num  ===6;
	}) //if can NOT find then value is -1
	return result;
}
//console.log(findInsdex())

function findIndex(arr, callback) {
    for(var i =0; i<arr.length; i++){
    	if(callback(arr[i],i,arr)){
    		return i;
    	}
    }
    return -1;
} 

//////// HEAP
//An area in memory where the your data is stored
function heapStructure(){
	//the obj is created in the heap. and obj is a reference to the object.
	let obj = {firstName : "Jaden",
			   lastName : "Oh"}	
	//the objCopy is not created in the heap.
	//only a copy of the reference		   
	let objCopy = obj;		   
}

//setTimeout and setInterval(repeat)

function setIntervalTest(){
	let num = 0;
	setInterval(function(){
		num++;
		console.log("num",num);
	},1000)
}


//setIntervalTest()

function cancelInterval(){
	let num = 0;
	let intervalId = setInterval(function(){
		num++;
		console.log("num",num);
		if(num===3){
			clearInterval(intervalId);
		}
	},500)

}

//cancelInterval()

/*
Your goal is to Implement a function called countDown 
that accepts a time in seconds. 
The function will print the time remain to 
the console every second. 
Instead of printing 0, 
the function should print "Ring Ring Ring!!!".

*/

function countDown(seconds){
var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log("Timer:", seconds);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}

//countDown(5)



//Queue
//Javascript is Single Threaded
//code execution is linear


//Promise
////////////////////////////////////////
// var p1 = new Promise((resolve, reject)=>{
// 	//resolve([1,2,3,4])
// 	reject("Error")
// })

// p1.then(arr =>{
// 	console.log("Promise p1 resolved with data:",arr)
// }).catch(data => {
// 	console.log("Promise p1 was rejected with data:", data)
// })
////////////////////////////////////////


// var p1 = new Promise((resolve, reject)=>{
// 	var num = Math.random();
// 	if(num < 0.5){
// 		resolve(num)
// 	}else{
// 		reject(num)
// 	}
// })

// p1.then(result =>{
// 	console.log("Less than 0.5 :",result)
// }).catch(error => {
// 	console.log("Bigger than 0.5:", error)
// })

////////////////////////////////////////

//Wrap setTimeout with Promise

// var promise = new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		var randomInt = Math.floor(Math.random()*10);
// 		resolve(randomInt)
// 	},2000)
// })

// promise.then(data=>{
// 	console.log("Random int Passed to resolve : ",data)
// })

/////////////////////////////////////////



















