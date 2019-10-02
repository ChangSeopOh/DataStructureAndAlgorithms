//Challenge 1 : add all numbers
//return a sum of all parameters entered regardless of the amount of numbers - No arrays


//solution1 - ES5 arguments & for loop
// function addAll(){ 

// 	var args = Array.prototype.slice.call(arguments);
// 	var total =0;
// 	for(i=0;i<args.length;i++){
// 		total +=args[i]
// 	};
// 	// for(i=0;i<arguments.length;i++){
// 	// 	total +=arguments[i]
// 	// };
// 	return total;
// }

//solutions2 ...rest & reduce/foreach
function addAll(...rest){ 
	let total =0;
	// rest.forEach((num)=>{
	// 	total+= num;
	// })
	rest.forEach(num => total+= num);
	return total;
}
//console.log(addAll(1,2,3,4))


//Challenge 2 : Sum all primes
//prim number : greater than 1 and only number that can't be divided 
//2,3,5,7,11,13,17, ...etc

function sumAllPrimes(num){
	let total = 0;
	function checkForPrime(i){
		for(let j=2; j<i; j++){
			if(i%j===0){ //this is not prime number
				return false;
			}
		}
		return true;
	}
	for(let i =2; i<=num; i++){//because number is grater than 2
		if(checkForPrime(i)){
			total +=i;
		}
	}
	return total;
}
//console.log(sumAllPrimes(11))


//Challenge 3 : Seek & Destroy

//remove from the array whatever is in the following arguments. return the leftover numbers in an array
//input([2,3,4,6,6,'hello'],2,6)
//output[3,4,'hello']

//solution 1 : arguments, indexOf, filter
// function seekAndDestroy(arr){
// 	const args = Array.from(arguments)

// 	function filterArr(arr){
// 		//return true if NOT in array
// 		return args.indexOf(arr) ===-1;
// 	}

// 	return arr.filter(filterArr);

// }

//solution 2 : ...rest, filter & includes
function seekAndDestroy(arr, ...rest){
	return arr.filter(val => !rest.includes(val));
}

//console.log(seekAndDestroy([2,3,4,6,6,'hello'],2,6))

//Challenge 4 : SORT BY HEIGHT
//Some people are standing in a row in a park. there are trees between them which cannot be moved. your task is to rearrange the people by their heights in a non-descending order without moving the trees.
//input = [-1,150,190,170,-1,-1,160,180]
//output = [-1,150,160,170,-1,-1,180,190]
function sortByHeight(arr){
	const arr1 = [];
	const arr2 = [];
		     //value, index
	arr.forEach((val, i)=>{
		val===-1 ? arr1.push(i) : arr2.push(val);
	})
	//decending order
	const sortArr = arr2.sort((a,b)=>a-b);
									     //start, end, value
	arr1.forEach((val,i)=> sortArr.splice(arr1[i],0,-1));


	return sortArr;

}

//console.log(sortByHeight([-1,150,190,170,-1,-1,160,180]));

//Challenge 5 : Missing letters
//find the missing letter in the passed letter range and return it.

//input : abce
//output : d
//input : abcdefghjklmno
//output : i
//input : abcdefghijklmnopqrstuvwxyz
//output : undefined

function missingLetters(str){
	let compare = str.charCodeAt(0);
	let missing;

	str.split('').map((char,i)=>{
		if(str.charCodeAt(i)==compare){
			++compare;
		}else{
			missing = String.fromCharCode(compare);
		}
	});



	return missing;
}

// console.log(missingLetters("abce"));








