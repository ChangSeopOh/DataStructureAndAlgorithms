//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if(num <=1) return 1;
    return num * factorial(--num);
   
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(0));
///////////////////////////////////////
function collectOddValues(arr){
    let result =[];

    function helper(helperInput){
        if(helperInput.length===0){
            return;
        }
        if(helperInput[0]%2 !==0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))

    }

    helper(arr)
    return result;


}

collectOddValues([1,2,3,4,5,6,7,8,9]);
///////////////////////////////////////

function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
    }
        newArr.push(arr[0]);
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                        
               ///////////////////////////////////////
               // SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   if(num ===0) return 0;

   return num + recursiveRange(--num);
}

recursiveRange(6); // 21
recursiveRange(10);
               ///////////////////////////////////////

function capitalizeFirst (arr) {
    let result =[]; 
    if(arr.length===1) return arr[0][0].toUpperCase()+arr[0].slice(1);
    return result.concat(arr[0][0].toUpperCase()+arr[0].slice(1), capitalizeFirst(arr.slice(1)));
}

 
 capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
///////////////////////////////////////

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

///////////////////////////////////////
function capitalizedWords (arr) {
    let result =[];
    if(arr.length ===1) return arr[0].toUpperCase();
    return result.concat(arr[0].toUpperCase(), capitalizedWords(arr.slice(1)));
   
}

 
 
 //let words = ['i', 'am', 'learning', 'recursion'];
 capitalizedWords( ['i', 'am', 'learning', 'recursion']); // ['I', 'AM', 'LEARNING', 'RECURSION']
///////////////////////////////////////
// const obj4= {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

function collectStrings(obj){
    let result = [];

    for(var key in obj){
        if(typeof obj[key]==='object'){
            collectStrings(obj[key]);
        }else if(typeof obj[key] ==='string'){
            result.push(obj[key]) 
        }
    }

   return result;
}

collectStrings(obj4) // ["foo", "bar", "baz"])
///////////////////////////////////////
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//1 ,1 , 2, 3, 5, 8, 13, 21
function fib(num){ 
       if(num===0){
          return 0;
      }else if(num <=2) return 1;
      return fib(num-1)+fib(num-2);
  // add whatever parameters you deem necessary - good luck!  
}
fib(1)
///////////////////////////////////////
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
    	    console.log(i)
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) 
///////////////////////////////////////
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if(str.length===1) return true;
    if(str.length===2) return str[0] === str[1];
    if(str[0]=== str[str.length-1]) return isPalindrome(str.slice(1,-1));


    return false;
    //check even or odd numbers
    //if odd number, then center char is remove


}

console.log(isPalindrome('awesome') )// false
console.log(isPalindrome('foobar') )// false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium') )// false

///////////////////////////////////////
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if(exponent ===0) return 1;
    
    
    return base * power(base, --exponent);
    
}

console.log(power(2,4));
///////////////////////////////////////
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    if(arr.length ===0) return 1;
    return arr[0] * productOfArray(arr.slice(1));

}
productOfArray([1,2,3,10])

///////////////////////////////////////

 function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

reverse('awesome') // 'emosewa'
 reverse('rithmschool') // 'loohcsmhtir'

///////////////////////////////////////
// write a recursive function called someRecursive which accepts an array and a callback.
// the function returns true if a single value in the array returns true when passed to the callback.
// otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = val => val % 2 !== 0;
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

someRecursive([1,2,3,4], isOdd) 


///////////////////////////////////////

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// } 

function stringifyNumbers(obj){
    let newObj = {};

    for(var key in obj){
        //javascript reconize Array as object. therefor need to check array with object check.
        
        if(typeof obj[key]==='object'&& !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key]);
        }else if(typeof obj[key]==='number' ){
            newObj[key] = obj[key].toString();
        }else{
            newObj[key] = obj[key]; 
        }
    }

    return newObj;
}
stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
///////////////////////////////////////

///////////////////////////////////////

///////////////////////////////////////

///////////////////////////////////////

///////////////////////////////////////

///////////////////////////////////////

///////////////////////////////////////
