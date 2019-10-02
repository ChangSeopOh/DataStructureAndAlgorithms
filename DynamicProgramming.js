//before Applying on DP
//BigO is O(n!) very bad. O(n^n)
function fibonacci(num){
    if(num<=2) return 1;
    return fibonacci(num-1)+fibonacci(num-2);
}

//BigO is O(N^n) -> O(N)
// much better!
function DPFibonacci(num, memo=[]){
    //if memo have that number then just return without calculating again
    if(memo[num] !==undefined) return memo[num]
    if(num<=2) return 1;
    var res = DPFibonacci(num-1, memo)+ DPFibonacci(num-2, memo);
    memo[num] = res;
    return res; 
}

//bottom function is little bit improved.
                               //none, 1, 2 (number values)
function DPFibonacci2(num, memo=[undefined,1,1]){
    if(memo[num] !==undefined) return memo[num];
    var res = DPFibonacci(num-1, memo)+ DPFibonacci(num-2, memo);
    memo[num] = res;
    return res; 
}



//aobve fibonacci is top-down 

function DPFibonacci3(num){
    if(num<=2) return 1;
    let fibNums = [0,1,1];
    for(let i =3; i<=num; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[num];
}




function rotLeft(a, d){
     
    
    for(let i =0; i<d; i++){
        a.push(a.shift());
    }
    return a;
 
}

