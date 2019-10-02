function mostCommonWord(para, banned){
let arr = para.toLowerCase().split(/[\!\?\'\,\;\.\s]/);
 
let result;
const lookup = {};

for(let i =0; i<arr.length; i++){  
	let letter = arr[i]; 
	if(!banned.includes(letter)&&letter.length){
		lookup[letter]?lookup[letter]++:lookup[letter]=1;  
	}
}
console.log(lookup)
let max =0; 
for(let key in lookup){  
	if(lookup[key]>max ){
		max = lookup[key];
		result = key;
	}
}

return result;


}
 

console.log(mostCommonWord("Bob. hIt, baLl",["hit","BoB"]));