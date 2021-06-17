/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return dfs(root)
  function dfs(root){
    if(!root){
      return 0
    }
    let left = dfs(root.left)
    let right=dfs(root.right)
    return Math.max(left+1,right+1)
  }
};