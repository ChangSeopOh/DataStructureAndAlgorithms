class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    
    insert(value){
        this.values.push(value);
        this.bubbleUp();

        return this;
    }

    bubbleUp(){ 
        if(this.values.length <2) return this.values; 
    
        let index = this.values.length -1; 
        let parentIndex = Math.floor((index-1)/2);
        let temp = 0; 

        while(this.values[parentIndex]<this.values[index]){ 
            temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex; 

            parentIndex = Math.floor((index-1)/2);

        }
    }

    remove(){//extractMaxValue
        if(this.values.length ===0) return false;
        
            const max = this.values[0]; 
            
            if(this.values.length >1){
                this.values[0] = this.values.pop();  
            }else{
                this.values.pop(); 
            } 

         this.bubbleDown(); 

        return max;
    }

    bubbleDown(){
        if(this.values.length <1) return this.values;
        let index = 0;
        let temp = 0;
        let childA = (2*index)+1;
        let childB = (2*index)+2;

        while(this.values[index]<this.values[childA] ||
              this.values[index]<this.values[childB]){
                  temp = this.values[index];
              if(this.values[childA]<this.values[childB]){
                  this.values[index] = this.values[childB]
                  this.values[childB] = temp;
                  index = childB;
              }else{
                  this.values[index] = this.values[childA]
                  this.values[childA] = temp; 
                  index = childA;
              }
              childA = (2*index)+1;
              childB = (2*index)+2;
        }//while


    }


}

var mbh = new MaxBinaryHeap();
mbh.insert(41); 
mbh.insert(39); 
mbh.insert(33); 
mbh.insert(18); 
mbh.insert(27); 
mbh.insert(12);  
mbh.insert(55);
//swap 55 and 33
//swap 55 and 41
//55, 39, 41, 18, 27, 12, 33
 