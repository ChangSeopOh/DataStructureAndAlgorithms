function numDecodings(s){
if(s.length===0) return 0;
if(s.length===1) return 1;

let result = 1;



	for(let i =1; i<s.length;i++){ 
		if((Number)(s[i-1]+s[i])<=26){
			console.log("Less")
			result++;
		}else{
			console.log("Big") 
		}
	}

return result;

}
 

console.log(numDecodings("329"));