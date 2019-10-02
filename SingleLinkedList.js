class Node{
    constructor(val){
        this.val = val
        this.next = null;       
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(val){  //add last node
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    pop(){ //remove last node
        if(!this.head) return undefined;

         var current = this.head;
         var newTail = current;
         while(current.next){ 
                 newTail = current;
                 current = current.next; 
         }
         this.tail = newTail; //right before tail value
         this.tail.next = null; 
         this.length--;
         if(this.length===0){
             this.head = null;
             this.tail = null;
         }

         return current; 
    }
    shift(){  //remove first node
        if(!this.head) return undefined;
        
        var temp = this.head;
        this.head = temp.next;
        this.length --;
         if(this.length===0){
             this.tail = null;
         }
    
        return temp;

    }
    unshift(val){ //add first node
        var newNode = new Node(val);

        if(!this.head) {
            this.head = newNode
            this.tail = this.head; 
        }else{
             newNode.next = this.head;
             this.head = newNode;
        }
        this.length ++;
        return this; 
    } 
    get(index){
        if(index <0 || index>=this.length) return null;
        var count=0;
        var current = this.head; 
        while(count!==index){   
            current = current.next; 
            count++; 
         }
         return current;
    }
    set( index, value){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, value){
        if(index<0 || index > this.length) return false;

        if(index===this.length){
            this.push(value);
        return true;  
        }else if(index===0){
            this.unshift(value);
        return true;  
        }else{
            var newNode = new Node(value);
            var prev = this.get(index-1);
            var temp = prev.next;
            prev.next = newNode;
            newNode.next = temp; 
            this.length++;
        return true;  
        }
        
        return false;
      
    }
    remove(index){
        if(index <0 || index >= this.length) return undefined;

        if(index ===0){
           return this.shift();
        }else if(index ===this.length-1){ //last node
            return this.pop();
        }else{
            var prev = this.get(index-1);

            var removed = prev.next; //index
            prev.next = removed.next;
 
            this.length--;
            
            return removed;
        }

    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val);
            current= current.next;
        }
        console.log(arr);
    }
//     reverse(){
//         //swap the head and tail
//         var node = this.head; 
//         this.head = this.tail;
//         this.tail = node; 
        
//         //create a variable called next
//         var next = null;
//         //create a variable called prev
//         var prev = null; 
//         //create a variable called node and initialize it to the head property
//         for(var i =0; i<this.length;i++){ 
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         return this;

//     }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var temp;
        var prev = null;

        for(var i =0; i<this.length;i++){
            temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;

        }
        return this;
    }

    
}




var list = new SinglyLinkedList();