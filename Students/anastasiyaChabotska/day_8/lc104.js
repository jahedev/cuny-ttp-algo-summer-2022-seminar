// Problem#

// Given a binary tree, find its maximum depth (or height).

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function find_maximum_depth(root) {
  let queue = [];
  queue.push(root);

  let level = 0;


  
  while(queue.length > 0){


    size = queue.length;
    //doesn't matter end to start or start to end since we use fifo queue
    for (i=size; i > 0; i--)
    {
    
    let node = queue.shift();


    if(node.left) queue.push(node.left);
  
    if(node.right) queue.push(node.right);
   
  }



  //after we finish working on a level, record it
  level++;

  }

 

  return level;
}

//start node
// neighbors = current.left, current.right
//queue.push(start)
//while (queue.length > 0)
//

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);


