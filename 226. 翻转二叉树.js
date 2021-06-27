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
 * @return {TreeNode}
 */
// !一看就是前序遍历
// !这道题目比较简单，关键思路在于我们发现翻转整棵树就是交换每个节点的左右子节点，于是我们把交换左右子节点的代码放在了前序遍历的位置。
var invertTree = function(root) {
   // 前序遍历的位置
   // 进行反转操作
   // 递归的base case
   if(!root){
     return
   }
    let temp = root.left // 当前左子节点 
    root.left = root.right // 当前右子节点
    root.right = temp
    // 左子树
    invertTree(root.left)
    // 右子树
    invertTree(root.right)
    return root
};