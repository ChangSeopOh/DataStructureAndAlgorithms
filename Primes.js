function getPrimes(n){
    let result =[];
    function checkForPrime(i){
        for(let j=2; j<i; j++){
       
            if(i%j===0){
                return false;
            }
        }
    }

    for(let i =2; i<=n;i++){
    
        if(checkForPrime(i)){
            console.log(i)
            result.push(i)
        }
    }

    return result;
}


console.log(getPrimes(10));

function sumAllPrimes(num){
	let total = 0;
	function checkForPrime(i){
		for(let j=2; j<i; j++){
			if(i%j===0){ //this is not prime number
				return false;
			}
		}
		return true;
	}
	for(let i =2; i<=num; i++){//because number is grater than 2
		if(checkForPrime(i)){
			total +=i;
		}
	}
	return total;
}