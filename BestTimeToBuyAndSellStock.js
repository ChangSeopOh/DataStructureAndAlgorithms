function BestTimeToBuyAndSellStock(nums){
	if(nums.length===0) return 0;

	let result =0;

	for(let i=0;  i < nums.length-1;i++){
		if(nums[i+1]>nums[i]){
			result += nums[i+1]-nums[i];
		}
	}


	console.log(result)
	return result;

}


BestTimeToBuyAndSellStock([7,1,5,3,6,4]) //7 (5-1)+(6-3) = 7
BestTimeToBuyAndSellStock([5,4,3,2,1]) //0
BestTimeToBuyAndSellStock([1,2,3,4,5]) //4(5-1)
