function firUniqChar(str){
if(str.length===0) return -1; 
let arr = str.split('');
const keywords = {};

arr.forEach(str =>{
let key = str;
keywords[key]? keywords[key]++:keywords[key]=1;
});

for(let key in keywords){
	if(keywords[key]===1){
		console.log(key)
		return key;
	}
}
console.log(-1)
return -1;

}

firUniqChar("alololodejkekjpa");