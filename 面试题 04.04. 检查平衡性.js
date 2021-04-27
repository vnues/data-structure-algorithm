/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
  function isBalanced( root) {
      if(root == null){
          return true;
      }
      let left = Height(root.left);
      let right = Height(root.right);
      //必须左子树和右子树也要平衡
      return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);       
  }
  function Height( root){
      if(root == null){
          return 0;
      }
      // 实际就是后序遍历
      return Math.max(Height(root.left),Height(root.right)) + 1;
}
