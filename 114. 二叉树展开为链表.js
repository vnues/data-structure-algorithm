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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// ! 前序遍历后序遍历都行 把左右节点树捋直
var flatten = function(root) {
  // base case
  if(!root){
    return null
  }
  flatten(root.left)
  flatten(root.right)
  // 实际的展开操作 ===>看第一层的变化就行
  let left =root.left
  let right=root.right
  root.right=left
  root.left=null
  // 这时候左右两个链表都捋直了
  // ! 将原先的右子树接到当前右子树的末端
  let temp =root
  // ! while(temp)跳出这个其你去 temo必定为Null 以后就用这个定位
  while(temp.right){
    // 一直在右边
    temp=temp.right
  }
  // 拼接上去
  temp.right=right
};