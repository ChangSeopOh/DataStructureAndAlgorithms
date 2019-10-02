class Node{
    constructor(val){
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    print(){
        var arr = [];
        let current = this.head;
        for(var i = 0; i<this.length;i++){
            arr.push(current.val);
            current = current.next;
        }

        return arr;
    }

    push(val){
        var newNode = new Node(val);
        if(this.length===0){
            this.head = newNode;
            this.tail = this.head;
        }else{ 
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode; 
        } 
        this.length ++; 
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
    
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{     
        this.tail = poppedNode.prev;
        this.tail.next = null; 
        poppedNode.prev = null;
        }

        this.length --; 
        return current; 
    }

    shift(){
        if(!this.head) return undefined;
        let removed = this.head;

        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }
        this.length --;
        return removed;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length ===0){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;

        return this;
    }

    get(index){
        if(index< 0||index>= this.length ) return null;
        
        let current = this.head;
        if(index <=this.length/2){
            //from head 
            for(let i =0; i<index; i++){
                current = current.next;
            }
        }else{
            current = this.tail;
            for(let i =this.length-1; i>index; i--){
                current = current.prev;
            }
        }

        return current;
    
    }

    set(index,val){
        let foundNode = this.get(index);
        if(!foundNode){
            return false;
        } 
        foundNode.val = val;
        return true; 
    }

    insert(index,val){
        if(index<0 || index>this.length) return false;

        if(index ===0){
            return !! this.unshift(val);
        }else if(index ===this.length){
            return !! this.push(val);
        }

        var newNode = new Node(val);
        var previousNode = this.get(index-1);
        var afterNode = previousNode.next;

        previousNode.next = newNode; 
        newNode.prev = previousNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++; 
        return true;
    }

    remove(index){
        if(index<0 || index>=this.length) return false;

        if(index===0){
            return !! this.shift();
        }else if(index === (this.length-1)){
            return !! this.pop();
        }
        let removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;
        
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        removedNode.prev = null;
        removedNode.next = null;    
             
        this.length--;
        return removedNode;

    }


}

var ddl = new DoublyLinkedList();
ddl.push(0);
ddl.push(1);
ddl.push(2);
ddl.push(3);
ddl.push(4);