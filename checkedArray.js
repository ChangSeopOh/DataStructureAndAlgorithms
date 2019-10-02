// write a funciton, chunk(arr,n), that returns chunked array of size n at the least
// given[1,4,12,3,2,6,93,0], n=3
// return[[1,4,12],[3,2,6],[93,0]]


//1.create an array called chunkced
//2. get the last chunked array within last = chunked
//3. check if last exist OR size last equals to n. if ti doest exist, then push in to chunked else push into last
//4. return chunked


const chunks = ((arr,n)=>{
    const chunked = [];

    for(let elem of arr){
        let last = chunked[chunked.length-1];
         console.log(chunked.length-1)
        if(!last || last.length===n){
            chunked.push([elem]); 
        }else{
            last.push(elem); 
        }

    }

    console.log(chunked)
    return chunked;

})([1,4,12,3,2,6,-9,0],3);
