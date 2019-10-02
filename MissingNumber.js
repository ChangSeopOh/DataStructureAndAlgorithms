function MissingNumber(num){
	let sum = 0;
	let numLen = num.length+1;
	for(let i =0; i<numLen-1;i++){
		sum+= num[i];
	}

	console.log((numLen *(numLen-1)/2) - sum)
	return (numLen *(numLen-1)/2) - sum;

}

MissingNumber([3,0,1,2,5,7,6,4,9,10]);