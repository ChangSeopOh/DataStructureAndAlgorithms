function repeatedString(value, num) {
let valueCount = 0;
let mod = num%value.length; 
let valueMode =0; 
for(let i =0; i<value.length; i++){ 
    if("a"===value[i]){
        valueCount++;
        if(i<mod){
        	valueMode++;
        }
    }

} 
 

return (valueCount*((num-mod)/value.length))+valueMode;


} 
/*
10-0 =10 (2*(10/2)
10-2 =8 (2*8/4)
10-1 =9 (1*9/3)
10-1 =9 (0*9/3)
*/

console.log(repeatedString("aa",10));  //10
console.log(repeatedString("adba",10)); //10
console.log(repeatedString("bba",10)); //3
console.log(repeatedString("a",1000000000)); 