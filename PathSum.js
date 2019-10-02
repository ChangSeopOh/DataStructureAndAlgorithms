  function TreeNode(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }


/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let result = false;
    
    const add = (node, total = 0) => {
        if(!node) return false;
        
        let current = total + node.val;
           // if we reached the top of the tree...
        if(!node.left && !node.right && current === sum) {
            result = true;
        };
        
        add(node.left, current);
        add(node.right, current);
        
     
    }
    
    add(root);
    
    return result;
};


/*
tree problem usually recursion


given num sum is 22 then true
there exist a root-toleaf path 5->4->11->7
			5
		  /   \	
		4		8
	  /       /   \
	11		13	   4
   /  \             \
  7	   2		  	 1





*/