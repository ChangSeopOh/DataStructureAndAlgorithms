function SockMerchant(n, arr){
    if(n<=0|| arr.length ===0) return null; 
    let count =0;
    const lookup = {};
    let value = 0;
    
    for(let i =0; i<n; i++){
        value = arr[i];
        lookup[value] ? lookup[value]+=1 : lookup[value] =1;
        if(lookup[value]%2 ===0){
            count++;
        }
    }

    return count;

}

console.log(SockMerchant(9,[10, 20, 20, 10, 10, 30, 50,10, 20]));