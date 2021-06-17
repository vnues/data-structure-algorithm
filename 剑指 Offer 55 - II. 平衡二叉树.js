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
var isBalanced = function(root) {
  return dfs(root) ===-1
  // 后序遍历
  function dfs(root){
    if(!root){
      return 0
    }
    let left = dfs(root.left)
    if(left===-1){
      return -1
    }
    let right = dfs(root.right)
    if(right===-1){
      return -1
    }
    return Math.abs(left-right)>1?-1:Math.max(left,right)+1
  }
};