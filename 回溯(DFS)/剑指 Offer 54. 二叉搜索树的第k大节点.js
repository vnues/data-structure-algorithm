/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// ! 二叉搜索树的特点
// 第几大 所以需要倒序 递减  中序正序是递增
 var kthLargest = function(root, k) {
   backtrack(root)
    let res
   function backtrack(root){
     // base case
     if(!root||k===0){
       return 
     }
     backtrack(root.right)
     // 中序遍历
     k--
     if(k===0){
      res= root.val
     }
     backtrack(root.left)
   }
};