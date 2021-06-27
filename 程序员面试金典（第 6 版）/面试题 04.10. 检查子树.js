/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
// 先序遍历
var checkSubTree = function(t1, t2) {
  return dfs(t1,t2)
    function dfs(t1,t2){
      if(!t1||!t2){
        return false
      }
      if(!t1&&!t2){
        return true
      }
      if(t1.val===t2.val){
        dfs(t1.left,t2.left)
        dfs(t1.right,t2.right)
      }
    }
};