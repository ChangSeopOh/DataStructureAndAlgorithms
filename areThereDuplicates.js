function areThereDuplicates() {

    let val = '';
    let lookup = {};
    for(let i = 0; i<arguments.length;i++){
        val += arguments[i];
    }

    for(var key of val){
       lookup[key] ?lookup[key]+=1 : lookup[key] =1 ;
       if(lookup[key]>1){
           return true;
       }
    }
 
    return false;
}

console.log(Date.now());

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a','b','c','a'));