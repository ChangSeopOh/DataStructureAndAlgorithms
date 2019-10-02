function maximumOccurringCharacter(text) {
    
    if(text.length <=0) return "";

    let lookup = {};
    let result ="";
    for(let i =0; i<text.length; i++){
        let letter = text[i];
        //if letter exists, incremet, otherwise set to 1
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1;
    }
    let count =0; 

    for(let key in lookup){
        if(lookup[key]>count){
            count = lookup[key];
            result = key;
        }
    }  
 
    return result;
}

console.log(maximumOccurringCharacter("helloworld"));
