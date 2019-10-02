class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        //put node and based off of its priority
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
        
        return this;
    }
    bubbleUp(){
        if(this.values.length<2) return this.values;

        let index = this.values.length-1;
        let parentIdx = Math.floor((index-1)/2); 
        while(parentIdx>=0 &&this.values[index].priority < this.values[parentIdx].priority ){
            let temp = this.values[index];
            this.values[index] = this.values[parentIdx];
            this.values[parentIdx] = temp;

            index = parentIdx;
            parentIdx =Math.floor((index-1)/2); 
        }
 
    }

    dequeue(){ //remove root
        if(this.values.length ===0) return false;
        const max = this.values[0];
        if(this.values.length>1){
            this.values[0]= this.values.pop(); 
        }else{
            this.values.pop(); 
        }

        this.sinkDown();

        return max;

    }

    sinkDown(){
        if(this.values.length<=1) return false;

        let index = 0;
        let childA = (2*index)+1;
        let childB = (2*index)+2;
        let temp = this.values[index];
        
        while(this.values[childB]&&(
              this.values[index].priority >this.values[childA].priority ||
              this.values[index].priority >this.values[childB].priority)){
              
              temp = this.values[index];
              if(this.values[childA].priority >this.values[childB].priority){
                this.values[index] = this.values[childB];
                this.values[childB] = temp;
                index = childB;
              }else{
                this.values[index] = this.values[childA];
                this.values[childA] = temp;
                index = childA; 
              }
              
              childA = (2*index)+1;
              childB = (2*index)+2; 
              }//while


    }

}

class Node{
    constructor(val, priority){
        this.value = val;
        this.priority = priority;

    }

}

var heap = new PriorityQueue();

heap.enqueue("five",5);
heap.enqueue("three",3);
heap.enqueue("four",4);
heap.enqueue("one",1);
heap.enqueue("two",2);