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
var countNodes = function(root) {

};



// /**
//  * Definition for a binary tree node.
//  * public class TreeNode {
//  *     int val;
//  *     TreeNode left;
//  *     TreeNode right;
//  *     TreeNode() {}
//  *     TreeNode(int val) { this.val = val; }
//  *     TreeNode(int val, TreeNode left, TreeNode right) {
//  *         this.val = val;
//  *         this.left = left;
//  *         this.right = right;
//  *     }
//  * }
//  */
//  class Solution {
//   public int countNodes(TreeNode root) {
//     if(root == null) {
//       return 0;
//     }
//     int left = countNodes(root.left);
//     int right = countNodes(root.right);
    
//     return left+right+1;
    
//   }
// }


// public int countNodes(TreeNode root) {
//   TreeNode l = root, r = root;
//   // 记录左、右子树的高度
//   int hl = 0, hr = 0;
//   while (l != null) {
//       l = l.left;
//       hl++;
//   }
//   while (r != null) {
//       r = r.right;
//       hr++;
//   }
//   // 如果左右子树的高度相同，则是一棵满二叉树
//   if (hl == hr) {
//       return (int)Math.pow(2, hl) - 1;
//   }
//   // 如果左右高度不同，则按照普通二叉树的逻辑计算
//   return 1 + countNodes(root.left) + countNodes(root.right);
// }