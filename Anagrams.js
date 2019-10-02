Anagrams.jsfunction validAnagram(val1, val2){
  // add whatever parameters you deem necessary - good luck!
  if(val1.length !== val2.length){
      return false;
  }else if(val1.length ===0){
      return true;
  }

  const lookup = {};

    for(let i =0; i<val1.length; i++){
        let letter = val1[i];
        //if letter exists, incremet, otherwise set to 1
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1;
    }

    for(let i =0; i<val2.length; i++){
        let letter = val2[i];
        // can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]){ //check the letter
            return false;
        }else{               //check the amount of the letter
            lookup[letter] -= 1;
        } 
    }
     return true;

}
 
 console.log(validAnagram('',''));  //true
 console.log(validAnagram('aaz','zaa')); //true
 console.log(validAnagram('aaz','zza')); //flase
 console.log(validAnagram('asdf','dsa')); //false
 console.log(validAnagram('qwerasdfzxcv','zxcvasdfqwer')); //true