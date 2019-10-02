//sorted integer numbers
function averagePair(arr,num){
  //check parameter value, if there is null then return false;
  if(arr.length ===0) return false;

  let left = 0;
  let right =arr.length-1; //because arr is started from 0

  //do Calculating
    
  while(left<right){
      let result = (arr[left]+arr[right])/2; 
  //if divided value is num then return true
  if(result === num){
      return true;
  }else if(result>num){
      right --;
  }else{
      left ++;
  }
  //if divided value is Gt num then move right 
  //else move left
  }  

  //if you can't find value then false
  return false;
}

console.log(averagePair([1,2,3],2.5));              //true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); //true
console.log(averagePair([-1,0,3,4,5,6],4.1));       //false
console.log(averagePair([],4));                     //false