/********************************/
function findLongestSubstring(str){
   let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
      
      console.log('===========i, '+i); 
    let char = str[i];
    if (seen[char]) {
      console.log('start, '+start);
      console.log('seen[char], '+seen[char]);
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
      console.log('longest, '+longest);
      console.log('i - start + 1, '+(i - start + 1));
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}





//console.log(findLongestSubstring(''));                  //0
//console.log(findLongestSubstring('rithmschool'));       //7 rithmsc
 console.log(findLongestSubstring('isawesome'));     //6 awesom
// console.log(findLongestSubstring('thecatinthehat'));    //7 hecatin
// console.log(findLongestSubstring('bbbbbbbbbb'));        //1 b
// console.log(findLongestSubstring('longestsubstring'));  //8 ubstring
// console.log(findLongestSubstring('thisishowwedoit'));   //6 wedoit
/********************************/
function maxSubarraySum(arr,num){
    //if num is more than arr.length then return null
    if(arr.length <num) return null;
    let max = 0;
    //sum first max 
    for(var i =0; i<num; i++){
        max += arr[i];
    }
    var currentMax = max; 
    //loop
    for(var i = num; i<arr.length; i++){
        //sum current Max value. 
        currentMax = currentMax - arr[i-num] + arr[i]; 
        //compare to max with current max 
        // if current max is gt max then assign to max
        max = Math.max(max,currentMax);
    } 
    return max;

}




console.log(maxSubarraySum([100,200,300,400],2)); //700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)); //39
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2)); //5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); //5
console.log(maxSubarraySum([2,3],3)); //null
/********************************/
// function minSubArrayLen(nums,sum){
//      let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }


// function minSubArrayLen(arr,num){
//     if(arr.length ==0) return null;

//     let maxVal = -Infinity;
//     let sumVal = 0;
//     let minLen = Infinity;

//     for(let i =0; i<arr.length; i++){
//        maxVal = Math.max(maxVal, arr[i]);
//        sumVal += arr[i];
//     }
    
//     if(maxVal>num){
//         return 1;
//     }else if(sumVal<num){
//         return 0;
//     }else{

//         let start =0;
//         let end=0;
//         sumVal = 0;

// 	while(start<arr.length){ 
// 		if(sumVal<num && end<arr.length){ 
// 			sumVal += arr[end++]; 
// 		}else if(sumVal>=num){ 
// 			minLen = Math.min(minLen, end-start);
// 			sumVal -= arr[start++]; 
// 		}else{ 
// 			break;
// 		}

// 	}

//     }


// return minLen;
// }

function minSubArrayLen(arr,num){
	//return null
	if(arr.length===0) return null;
	let maxVal = 0;
	let sumVal = 0



	for(let i =0; i<arr.length; i++){
		maxVal= Math.max(maxVal, arr[i]);
		sumVal += arr[i];

	}
	
	if(sumVal<num){
		return 0;
	}else if(maxVal>num){
		return 1;
	}

	

	let start = 0;
	let end = 0;
	let count = Infinity;
	sumVal =0;

	while(start<arr.length){
		if(sumVal<num&&end<arr.length){
			sumVal += arr[end++]

		}else if(sumVal>=num){
			count = Math.min(count, end-start);
			sumVal -= arr[start++];
		}else{
			break; //end reached out to arr.length
		}


	} 


	//calculate
	return count;

}


console.log(minSubArrayLen([2,3,1,2,4,3],7));      //2 [4,3]
console.log(minSubArrayLen([2,1,6,5,4],9));      //2 [5,4]
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52));     //1 62 //
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));     //3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));     //5
console.log(minSubArrayLen([4,3,3,8,1,2,3],11));     //2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));     //0 //


/********************************/

//Timecomplexity O(n^2)
// function maxSubarraySum(arr, num){
//     if(num>arr.length){
//         return null;
//     }
//     var max = -Infinity;
//     for(let i =0; i<arr.length - num+1; i++){
//         temp = 0;
//         for(let j=0; j<num;j++){
//             temp += arr[i+j];
//         }
//         if(temp>max){
//             max = temp;
//         }
//     }
//     return max;
// }

// Timecomplexity O(n)
function maxSubarraySum(arr, num){
    if(num>arr.length){
        return null;
    }
    var max = 0;
    var temp = 0;
    for(let i =0; i<num;i++){
        max += arr[i];
    }
    temp = max;
    for(let i =num; i <arr.length; i++){
        temp = temp - arr[i-num]+ arr[i];
        max = Math.max(max, temp);
    }

    return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3);