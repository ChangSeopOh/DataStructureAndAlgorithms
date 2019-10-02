
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root) return this.root = newNode;
        
        var parrent = this.root;

        while(true){
            if(parrent.value > newNode.value){ //left 
                if(parrent.left){
                    parrent = parrent.left;
                }else{
                    parrent.left = newNode;
                    return this;
                } 
            }else if(parrent.value < newNode.value){ //right 
                if(parrent.right){
                    parrent = parrent.right;
                }else{
                    parrent.right = newNode;
                    return this;
                }
            }else{
                return undefined;
            }
        } 
    }

    find(value){
        if(!this.root) return false; 
        
        let current = this.root;
        while(true){    
            if(current.value ===value){
                return true;
            }else if(current.value > value){
                if(current.left){
                    current = current.left; 
                }else{
                    return false;
                }
            }else if(current.value<value){
                 if(current.right){
                    current = current.right; 
                }else{
                    return false;
                }
            }else{
                return false; // empty
            } 
        } //while
 
    }//find

    bfs(){ //breadth-first search
        if(!this.root) return null;


        let data = []; // result
        let queue =[]; //temporary
         
        let node = this.root;
        queue.push(node);

        while(queue.length){ //0 meaning is false  
            node = queue.shift();
            data.push(node.value);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }


        return data;
    }
    //PreOrder(parent first), PostOrder(left first), InOrder(Last first)
    DfsPreOrder(){ //depth-first search /parent first
        let data = []; 
         
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }

    DfsPostOrder(){ //depth-first search / left first
        let data = []; 
         
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);

        return data;
    }
    DfsInOrder(){ //depth-first search / last first
        let data = []; 
         
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }


}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);