//input same([1,2,3],[4,1,9]) == ture
//input same([1,2,3],[4,4])  =false
//input same([1,2,3],[4,4,9]) ==false


//bottom is O(N^2) because indexOf is also loop. 
// function same(num1, num2){ 
//     //check length before doing something
//     //if not equals then return false
//     if(num1.length != num2.length){
//         return false;
//     }
//     for(var check of num1){ 
//        var result = num2.indexOf(check**2); //check*check
//        if(result ===-1){
//            return false;
//        }
//     } 
//    return true;
// };




//bottom is O(n)
function same(num1, num2){ 
    //check length before doing something
    //if not equals then return false
    if(num1.length != num2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of num1){
        frequencyCounter1[val] = (frequencyCounter1[val] ||0) +1 ;
    }
    for(let val of num2){
        frequencyCounter2[val] = (frequencyCounter2[val] ||0) +1 ;
    }
    for(let key in frequencyCounter1){
        if(!(key **2 in frequencyCounter2)){ //check number
            return false;
        }
        if(frequencyCounter2[key**2]!==frequencyCounter1[key]){ //check amount
            return false;
        }
    }
   return true;
};



console.log("result =====")
console.log(same([1,2,3],[4,1,9]));
console.log(same([1,2,3],[4,4,1,1]));
console.log(same([1,2,3],[4,4,9]));