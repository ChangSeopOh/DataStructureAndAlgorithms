class HashTable{
    constructor(size=4){
        this.keyMap = new Array(size);
    }
 

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i =0; i<Math.min(key.length, 100);i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME +value) % this.keyMap.length;

        }
        return total;
    }

    set(key, value){
        //accepts a key and a value
        //hashes the key
        let index = this._hash(key);
        if(!this.keyMap[index]){ // initialize array 
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]); 
  
    } 
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            //var arr = [];
            for(let i =0; i<this.keyMap[index].length;i++){
                if(this.keyMap[index][i][0]===key){  //check key 
                    //arr.push(this.keyMap[index][i]); 
                    return this.keyMap[index][i][1]; //return value
                }
            }
                //return arr;
        }
            return undefined;
    }
    keys(){
        let keysArr = [];
        
        for(let index = 0; index<this.keyMap.length;index++){
            if(this.keyMap[index]){
                for(let i =0; i<this.keyMap[index].length;i++){ 
                    if(!keysArr.includes(this.keyMap[index][i][0])){ //check duplicate!
                        keysArr.push(this.keyMap[index][i][0]);
                    }
                }
            }
        }
        return keysArr;

    }
    values(){
        let valuesArr = []; 
        for(let index = 0; index<this.keyMap.length;index++){
            if(this.keyMap[index]){
                for(let i =0; i<this.keyMap[index].length;i++){
                    if(!valuesArr.includes(this.keyMap[index][i][1])){ //check duplicate!
                        valuesArr.push(this.keyMap[index][i][1]);
                    }
                }
            }
        }
        return valuesArr;

    }

}

var hash = new HashTable();


hash.set("asdf","How");
hash.set("qwer","Are");
hash.set("zxcv","You");
hash.set("sdfg","Nice");
hash.set("fghk","To");
hash.set("rtyu","Meet");
hash.set("uiop","Ya");

hash.keys().forEach(function(key){
    console.log(hash.get(key));
})