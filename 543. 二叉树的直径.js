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
 * @return {number}
 */
// 注意并不一定串过根节点 
// 只要是某个节点下的直径全树最大 那么就是这颗树的最大
// !树的问题===>确定遍历方式===>框架
// 学会把大问题拆解成小问题 ===> 深度 如何确定深度 比较深度
// 搞懂树的遍历
var diameterOfBinaryTree = function(root) {
  let len=0
  dfs(root)
  return len
  function dfs(root){
    if(!root){
      return -1
    }
    // 后序遍历
    let leftMax=dfs(root.left)+1 // +1表示左子节点跟父节点的路径
    let rightMax=dfs(root.right)+1 // +1表示右子节点跟父节点的路径  
    len=Math.max(len,leftMax+rightMax) // 树的直径可以理解为左子节点的深度+右子节点的深度
    return Math.max(leftMax,rightMax) // 返回深度最大的那个
  } 
};