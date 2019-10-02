function processData(input) {
    var check = {};


    for(var i=0; i<input.length; i++){ 
        let letter = input[i]; 
        check[letter] ? check[letter] +=1 : check[letter] =1;
    }
 

    for(var key in check){
        if(check[key]%2!==0){
           console.log(key);
        }
    } 
} 

//processData([1, 2, 3, 4, 5, 99, 1, 2, 3, 4, 5]);


 processData([1,2,3,1,2]);