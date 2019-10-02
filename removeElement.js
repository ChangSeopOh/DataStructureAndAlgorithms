function removeElement(nums, val){
	let index =0;
	for(let i of nums){
		if(val!==i){
			index++;
		}
	}
	console.log(index)
	return index;
}


removeElement([3,2,2,3],3); // 2 (2,2)
removeElement([0,1,2,2,3,0,4,2],2); // 5(0,1,3,0,4)