function isSubsequence(str1, str2) {
   
 let j =0; //str1's iteration.
  
  for(let i =0; i<str2.length; i++){
    if(str1[j] === str2[i]){
    j++; 
    } 
      if(j === str1.length){
    return true;
  } 
  }


  return false;
}

console.log(isSubsequence('hello','hello world'));  //true
console.log(isSubsequence('sing','sting'));         //true
console.log(isSubsequence('abc','abracadabra'));    //true
console.log(isSubsequence('abc','acb'));            //false



//isSubsequence Solution -Recursive but not O(1) Space

// function isSubsequence(str1, str2){
//   if(str1.length ===0) return true; //checked every where 
//   if(str2.length ===0) return false; //str1 left, but not 0. checked all of str2
//   if(str2[0]===str1[0]) return isSubsequence(str1.slice(1),str2.slice(1)); //if there is matching then remove first array and call again
//   return isSubsequence(str1, str2.slice(1)); //if not matched, then only str2 move to next array.

// }