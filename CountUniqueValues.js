// function countUniqueValues(arr){
// let i = 0;
// let j = 1;
   
//    if(arr.length <1){
//        return 0;
//    }
//     while(arr.length>j){            
//         if(arr[i]===arr[j]){        
//             j++;
//         }else{
//             arr[++i]=arr[j];
//         }
//     }

// return i+1;
// }


function countUniqueValues(arr){
let i = 0; 
   if(arr.length ===0){
       return 0;
   }
   for(let j = 1; j <arr.length; j++) {  
        if(arr[i]!==arr[j]){    
            arr[++i]=arr[j];
        }
    }

return i+1;
}


console.log("tes1t");
console.log(countUniqueValues([]));             //0
console.log(countUniqueValues([1,3,3,4,4]));            //3
console.log(countUniqueValues([1,1,1,1,1]));    //1
console.log(countUniqueValues([3,4,7,8,8,8,8,8]));//4