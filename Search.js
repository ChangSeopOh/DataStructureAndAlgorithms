/********************************/
//Big O is O(1) to O(log n)

function binarySearch(arr, num){
  var left =0;
  var right = arr.length-1;
  var middle = Math.round((left+right)/2);
  //round = 반올림
  //floor = 반내림


  while(arr[middle]!==num && left<=right){ 

     if(arr[middle]>num){
          right = middle-1;
      }else{
          left = middle+1;
      }
      middle = Math.round((left+right)/2);
  }


return arr[middle]===num?middle:-1;
}

console.log(binarySearch([1,2,3,4,5],1))  //0
console.log(binarySearch([1,2,3,4,5],2))  //1
console.log(binarySearch([1,2,3,4,5],3))  //2
console.log(binarySearch([1,2,3,4,5],4))  //3
console.log(binarySearch([1,2,3,4,5],5))  //4
console.log(binarySearch([1,2,3,4,5],6))  //-1
/********************************/
function linearSearch(arr, num){ 
  for(let i =0;i<arr.length;i++){
      if(arr[i]===num){ 
          return i;
      }
  }

  return -1;

}


console.log(linearSearch([10,15,20,25,30],15))
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0],4))
console.log(linearSearch([100],100))
console.log(linearSearch([1,2,3,4,5],6))
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0],10))
console.log(linearSearch([100],200)) 
/********************************/

function buildPatternTable(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}
 



function knuthMorrisPratt(text, word) {
  if (word.length === 0) {
    return 0;
  }

  let textIndex = 0;
  let wordIndex = 0;

  const patternTable = buildPatternTable(word);
  console.log(patternTable)

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      // We've found a match.
      if (wordIndex === word.length - 1) {
        return (textIndex - word.length) + 1;
      }
      wordIndex += 1;
      textIndex += 1;
    } else if (wordIndex > 0) {
      wordIndex = patternTable[wordIndex - 1];
    } else {
      wordIndex = 0;
      textIndex += 1;
    }
  }

  return -1;
}



console.log(knuthMorrisPratt("ana an nnn aaa ana a anannana when an l","anannana"))
/********************************/
// function naiveString(str,val){

//     for(let i =0; i<str.length; i++){
//         for(let j =0; j<val.length; j++){
//             if(val[j]!==str[i+j]) break;

//             if(j===val.length-1){
//                 return i;
//             }
//         }
//     }

//     return -1;
// }

// function naiveString(str,val){
//     var count = 0;
//     for(let i =0; i<str.length; i++){
//         for(let j =0; j<val.length; j++){
//             if(val[j]!==str[i+j]) break;

//             if(j===val.length-1){
//                 count++;  //matched!
//             }
//         }
//     }

//     return count;
// }

console.log(naiveString("when an unknown printer took a galley ","when"));
console.log(naiveString("when an unknown printer took a galley ","a"));
console.log(naiveString("when an unknown printer took a galley ","unknown"));
console.log(naiveString("when an unknown printer took a galley ","galley"));


function naiveString(str,pattern){
    var count = 0;
    for(let i =0; i<str.length; i++){
        for(let j=0; j<pattern.length;j++){
            if(pattern[j] !==str[j+i]) break;

            if(j===pattern.length-1) count++;
        }
    }

    return count;
}
/********************************/

/********************************/

