function mergeArray(a,b){
    
    let result = [];
    let aCount =0;
    let bCount =0;

    for(let i =0; i<a.length+b.length;i++){
        if(a[aCount]<b[bCount]){
            result.push(a[aCount++]); 
        }else if(a[aCount]>b[bCount]){
            result.push(b[bCount++]);  
        }else{
            if(a[aCount]){
                result.push(a[aCount++]);  
            }
            if(b[bCount]){
                result.push(b[bCount++]);  
            }
        }

        if(aCount ===a.length && b[bCount]){
            result = result + b[bCount];
            break;
        }
        if(aCount ===b.length && a[aCount]){
            result = result + a[aCount];
            break;
        }
    }
    return result;

}
 
 console.log(mergeArray([1,5,7,7],[0,1,2,3]));