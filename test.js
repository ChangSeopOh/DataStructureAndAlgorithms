// function reverse(x) { 
//     return Number.isInteger(x);
//     if(Math.abs(x)>Number.MAX_SAFE_INTEGER) return 0;
//     let checkMinus = x<0? true:false;
//     let char = Math.abs(x).toString().split(''); 
//     let result ='';
//     char.forEach((num,i)=>{
//         result = num +result;
//     });

//     if(checkMinus){
//         return -Number(result);
//     }
//     return Number(result);
// };


//  console.log(reverse(1534236469));



//oneAway

const charMap=(str)=>{
    let obj={};
    for(let i of str){
        obj[i]? obj[i]++:obj[i]=1;
    }
    return obj;
}

const oneAway = ((str1, str2)=>{
if(str1===str2) return "false";
let counter =0;
const obj1 = charMap(str1);
const obj2 = charMap(str2);

for(let i in obj1){
    if(counter>1) return "false";

    if(obj1[i]!==obj2[i]){
        counter++;
    }
}

return "true";

})("pale","paleees");

console.log(oneAway);


const stringCompression = (str) =>{
    const n= str.length;
    let count=1, output='', uniqueCount=0;
    for(let i =0; i<n;i++){
        if(str[i]===str[i+1]){
            count++
        }else{
            output += str[i]+count;
            count=1;
            uniqueCount++;
        }
    }

    if(uniqueCount===n) return str
    else return output
}



function CountingValleys(n, s){
    let result = 1;

    let count = 0;
    for(let i =0; i<n; i++){

        if(result ===0 && s[i]==="U") count++;
        
        if(s[i]==="D" ){
            result--;
        }else if(s[i]==="U"){
            result++;
        }
    }

    return count;
}
 


function repeatedString(value, num){
let count = 0;
let valueCount = 0;
const values = [];

for(let i =0; i<value.length;i++){
    values[i] = value.slice(1,1);
}
    for(let i =0; i<num; i++){
        if(valueCount>=value.length){
            valueCount =0;
        }
        if("a"===value[valueCount++]){
            count++;
        }
    }

return count;
}

function DPFibonacci3(num){
    if(num<=2) return 1;
    let fibNums = [0,1,1];
                //table, first disit is 1, second is 2, others bottom
    for(let i =3; i<=num; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[num];
}

function repeatedString(value, num) {
  const counta = (str) => str.split('')
    .filter(c => c == 'a')
    .length
    console.log(counta)
  
  const divide = Math.floor(num / value.length)
  const r = num - (value.length * divide)
  return divide * counta(value) + counta(value.substr(0, r))
}


function rotLeft(n, d){
    let result = [];
    
    while(d.length){
        result.push(d);
    }
    
    for(let i =0; i<n[1]; i++){
        result.push(result.shift());
    }
    return result;
 
}


function array2d(arr){
    let max = -Infinity;
    let temp = 0;
    //6x6
   
    for(let i =0; i<4; i++){
        for(let j =0; j<4; j++){
          temp =  arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
          console.log(temp);
            max = Math.max(max,temp);
        }
    }


    return max;
}



//input
// cost, cost's size, money

//input [1,4,5,3,2], 4
//output 1, 4

//input [2,2,4,3], 4
//output 1, 2      


function whatFlavors(cost, money) {
    const map = new Map();
    for (let i = 0; i < cost.length; i++) {
        var target = money - cost[i]; // 4-2
        if (map.has(target)) {  
            var result = [map.get(target), i + 1] 
            return result; 
           
            break;
        }
        map.set(cost[i], i + 1);
    }
}


//

function checkMagazine(magazine, note) {
    const hash = new Map();
    let check = false;
    for(let i =0; i<magazine.length; i++){
      hash[magazine[i]]? hash[magazine[i]] +=1 : hash[magazine[i]] =1 
    }   
    for(let i=0; i<note.length; i++){ 
          hash[note[i]]? hash[note[i]]-=1: check =true;
    }
  if(!check){
    console.log('Yes');
  }else{
    console.log('No');
  }


}



function reverseStrig(str){
///////////////// first
//     const text = str.split('');
//     text.reverse();
//     return text.join('');

/////////////////first's refactor
    // return str.split('')
//               .reverse()
//               .join('');

///////////////using iteration.
// let reverseStr = '';
//     for(let i =str.length-1; i>=0; i--){
//         reverseStr = reverseStr+str[i];
//     }
// return reverseStr;

///////////////using iteration.
let reverseStr = '';
    for(let i in str){
        reverseStr = str[i]+reverseStr;
    }
return reverseStr;

// str.split('').forEach(function(char){
//     reverseStr = char + reverseStr; 
// });
// return reverseStr

//////////////////////////

// return str.split('').reduce(function(revString, char){
//     return char + revString;
// }, '');


}


function isPalindrome(str){
    const revString = str.split('').reverse().join('');
    return revString === str;


}

function reverInt(int){
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
}

function capitalizeLeggers(str){
//     const strArr = str.toLowerCase().split(' ');

//     for(let i in strArr){
   
//      strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
//      strArr[i].substring(1);
//      }
//     return strArr.join(' ');


//     return str.toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() +word.substr(1)
//     ).join(' ');

    return str
    .toLowerCase()
    .split(' ')
    .map(function(word){ 
        return word[0].toUpperCase() +word.substr(1)
    }).join(' ');
}

function maxCharacter(str){
    const charMap = {};
    str.split('').forEach(function(char){
        charMap[char] ? charMap[char]=+1 : charMap[char]=1;
    })
    let result = -Infinity;
    let resultChar = ''
    for(let index in charMap){ 
        if(charMap[index]>result){
            result=  charMap[index];
            resultChar = index; 
        }
    }
    return resultChar;
}

function fizzBuzz(){
    let string = '';
    for(let i = 1; i <= 100; i++){
        if(i%3===0 && i%5===0) {
            string = string+'FizzBuzz' +"\n"
        }else if(i%3===0){
            string = string+'Fizz'+"\n"
        }else if(i%5===0){
            string = string+'Buzz'+"\n"
        }else{
            string = string+i+"\n";
        }
    }


    return string
}


function arrayChunking(arr, len){
    //Init chunked arr
    const chunkedArr =[];

    //set index
    let i =0;
    //loop while index is less than the array length
    while(i< arr.length){
        //slice out from the index to the index + chunk length
        //and push on to the chunked array  
        chunkedArr.push(arr.slice(i, i+len));
        //increment by chunk length
        i+= len;      
    }

    return chunkedArr;
}

function flattenArray(arr){
    return [].concat(...arr);
}

function anagram(str, str2){
    //regular expression
    str.replace(/[^\w]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

