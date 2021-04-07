/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
  backtrack(root)
  return root
  function backtrack(root){
     // base case 
     if(!root){
       return null
    }
     // 前序遍历
     // 交换操作
     let temp = root.left
     root.left= root.right
     root.right = temp
    /*** 这题不需要剪枝 ***/
     backtrack(root.left)
     backtrack(root.right)
   }
};