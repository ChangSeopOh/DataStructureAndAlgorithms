function PowerOfTwo(num){
if(num<=0) return 0;

let i=1;
while(i<num){
	i*=2;
}
console.log(i===num);
return i===num;

}

PowerOfTwo(6);