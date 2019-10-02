/************************************/
function bubbleSort(arr){
    var noSwaps;
    for(let i =arr.length; i>0;i--){
        noSwaps = true;
        for(let j=0; j<i-1;j++){
            console.log(arr,arr[j],arr[j+1])
            if(arr[j]>arr[j+1]){  //accending order.
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break; //if there no swaiping, then break the iterlation.
    }

    return arr;
}

console.log(bubbleSort([8,1,2,3,4,5,6,7])); 

//if numbers are almost sorted, bubbleSort can be one of the best sorting algorithm.

/************************************/
// function insertionSort(arr){
//     for(let i=1; i<arr.length; i++){
//         var currentVal= arr[i];

//         for(var j=i-1; j>=0 &&arr[j]>currentVal; j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }

//     return arr;
// }


console.log(insertionSort([5,3,4,1,2])); 

//reverse sorting is worst way by this algorithm


function insertionSort(arr){
    let currentVal =0;
    for(let i =1; i<arr.length; i++){
        currentVal = arr[i];
        for(var j=i-1; j>=0&&currentVal<arr[j]; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] =currentVal;

    }


    return arr;
}
/************************************/
function merging(num1,num2){
    let results =[];
    
    //way 1
    let count = 0;
    let i = 0;
    let j = 0;

    while(count <(num1.length+num2.length)){ 
        if(i>= num1.length){
            results[count++] = num2[j++];  
        }else if(j>= num2.length){
            results[count++] = num1[i++];  
        }else if(num1[i]>num2[j]){
            results[count++] = num2[j++]; 
        }else{
            results[count++] = num1[i++]; 
        }
    }

    //way 2
//     let i = 0;
//     let j = 0; 
//     while(i<num1.length && j<num2.length){
//         if(num2[j]>num1[i]){
//             results.push(num1[i++]);
//         }else{
//             results.push(num2[j++]);
//         }  
//     }
//     while(i<num1.length){
//         results.push(num1[i++])
//     }
//     while(i<num2.length){
//         results.push(num2[j++])
//     }

    return results;

}


function mergingSort(arr){
    if(arr.length<=1) return arr; // base case
    let mid = Math.floor(arr.length/2);
    let left = mergingSort(arr.slice(0,mid));
    let right = mergingSort(arr.slice(mid));
    
    return merging(left,right);  
}


console.log(mergingSort([14,10,1,9,21,52,3,6,2]));
/************************************/
function pivot(arr, start=0, end=arr.length+1){
    let pivot = arr[start];
    let swapIdx = start;
    
    //swaping numbers
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;  
    }

    //swaping if Index Number is grater than numbers
    for(let i= start+1; i<arr.length;i++){
        if(pivot > arr[i]){  
            swap(arr, ++swapIdx, i);
        } 
    }
    
    //swaping Index
    swap(arr,start,swapIdx);

    return swapIdx;

}

function quckSort(arr, left =0, right = arr.length-1){
    if(left< right) {
        let pivotIndex = pivot(arr, left, right); 
        //left
        quckSort(arr,left,pivotIndex-1); //because pivot number is already fixed.
        //right
        quckSort(arr,pivotIndex+1,right);
    }


    return arr;
}

quckSort([4,6,9,1,2,5,3]);
/************************************/
// function getDigit(num, place){
    
//     var str = String(Math.abs(num)); 
//     var count =0;
//     for(i =str.length-1; 0<=i; i--){
//         if(count===place){
//             return Number(str[i]);
//         }
//         count++;
//     }

//     return 0;
// }

// function digitCount(num){
//     return String(Math.abs(num)).length;
// }

// function mostDigits(arr){
//     let count =String(Math.abs(arr[0])).length; 
//     for(let i =1; i<arr.length;i++){
//         if(count<String(Math.abs(arr[i])).length){
//             count = String(Math.abs(arr[i])).length;
//         }
//     }
//     return count;
// }

function getDigit(num, place){
    //pow is the power of N, the Power of 0 is 1. 
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10;
}

function digitCount(num){
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(arr){
    let maxDigits =0; 
    for(let i =0; i<arr.length;i++){
       maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums); 

    for(let k=0; k<maxDigitCount;k++){
        //bottome is making index from 0 to 9 in array
        let digitBuckets = Array.from({length:10},()=>[]);
        for(let i =0; i<nums.length; i++){
            //find i's Digit number
            let digit = getDigit(nums[i],k);
            //push numbers into digit buckets
            digitBuckets[digit].push(nums[i]);
        }
        //... meaning is to combine arrays
        //if you don't then like [[1],[2],[3]]
        //but if you do then [1,2,3]
        nums = [].concat(...digitBuckets); 
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852]); 
 

/************************************/
function selectionSort(arr){
const swap = (arr,num1, num2) =>
    ([arr[num1], arr[num2]] = [arr[num2], arr[num1]]);

    for(let i =0; i<arr.length-1; i++){ 
        var lowest = i;

        for(let j =i+1; j<arr.length; j++){ 
           if(arr[j]<arr[lowest]){
               lowest = j; 
           }
        } 
        if(i!== lowest) swap(arr,i,lowest); 
    }

    return arr;
}


console.log(selectionSort([9,1,2,3,4,5,6,7,8])); 
// only swap at the end of each loop.
//SelectionSort is even bad for almost sorted numbers
/************************************/

/************************************/

