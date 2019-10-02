function sameFrequency(num1, num2){
    //check two params' length
  if((''+num1).length !==(''+num2).length) return false;
    //check null

    //make number to array
    let arr1 = num1.toString().split("").map(Number);
    let arr2 = num2.toString().split("").map(Number);
  const lookup = {}; 

  //assign number to objectArray
    for(let val of arr1){ 
        lookup[val] ? lookup[val] +=1 : lookup[val] = 1;
    }
 
    for(var key of arr2){ 
        if(!(lookup[key])){
            return false;
        }else{
        lookup[key] -=1;
        }
    }

    //return
  return true;


}
 
console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));
