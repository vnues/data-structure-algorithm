/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root){
    return false
  }
  // ! 注意作用的对象是node1 node2
   function backtrack(node1,node2){
     // base case
     // 递归走完了
     if(!node1 && !node2 ) {
      return true
     }
      // 前序遍历 
     if(!node1||!node2||node1.val!==node2.val){
       return false
     }
     return backtrack(node1.left,node2.right) && backtrack(node1.right,node2.left)
     
   }
   return backtrack(root.left,root.right)
};