function findPairWithGivenSum(num, target){
let targetNumber = target-30;
let numArr = num.sort((a,b)=> {return a-b} );
let result = [];
let l=0; 
let r=num.length-1;
let max = -Infinity;
 
while(l<r){
	let sum = numArr[l]+ numArr[r];
	if(sum<=targetNumber){
		if(sum>max){
			result[0] = numArr[l];
			result[1] = numArr[r];
			max = sum;
		}
		l++;
	}else{
		r--;
	}
}
if(max>0){
	console.log(result)
	return result;
}else{
	return -1;
}

}

findPairWithGivenSum([90, 85, 75, 60, 120, 150, 125], 250);