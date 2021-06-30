/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const res = []
    dfs(root)
    console.log(res)
    return res[k]
    function dfs(root){
      if(!root){
        return null
      }
      // 中序遍历
      dfs(root.left)
      res.unshift(root.val)
      dfs(root.right)
    }
};