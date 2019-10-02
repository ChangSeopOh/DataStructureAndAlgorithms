

// function minimumMoves(a,m){
    
//     let sum = 0;  
//     for (let i =0;i<a.length;i++){  
//          for(let j =0;j<String(a[0]).length;j++){  
//             sum += Math.abs(Number(String(a[i]).charAt(j)) - Number(String(m[i]).charAt(j)));

//         }
//     }
//     return sum;
// }

function minimumMoves(a,m){
    let sum = 0;  
    let aNum = "";
    let mNum = "";
    for (let i =0;i<a.length;i++){  
      aNum = aNum +String(a[i]);
    }
    for (let i =0;i<m.length;i++){  
      mNum = mNum +String(m[i]);
    }

    for(let i =0; i < aNum.length;i++){
      sum += Math.abs(Number(aNum[i]) - Number(mNum[i]));
    }
 
    return sum;
}


console.log(minimumMoves([1234,4321,1234,2345],[2345,3214,2345,4567])); //22

console.log(minimumMoves([1234,4321],[2345,3214])); //10

//10 - 14 = 4
//10 - 10 =0