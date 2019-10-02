function RobotReturnToOrigin(str){
if(str.length===0) return true;
let UD = 0;
let LR = 0;
let strArr = str.split('');

strArr.forEach(char=>{
if(char==='D'){
	UD--;
}else if(char==='U'){
	UD++;
}else if(char==='L'){
	LR--;
}else if(char==='R'){
	LR++;
}
});

console.log(UD===0&&LR===0);
	return UD===0&&LR===0; 

}


RobotReturnToOrigin("UUDDDUDLRUUD");
RobotReturnToOrigin("LLRR");