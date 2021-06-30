/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
  // 思路是找到初始root节点 然后DFS比较 这个思路有毒 重复路径多 而且只确定单一的节点就确定是root 这是错误的 应该通过找的过程去确定  全部去遍历去找这颗树 然后遍历局部范围

// var isSubStructure = function(A, B) {
//   let root1 = findCommonRoot(A,B)
//   return dfs(root1,B)
//   function dfs(root1,root2){
//       if(root1.val!==root2.val){
//         return false
//       }
//       let left=dfs(root1.left,root2.left)
//       let right=dfs(root1.right,root2.right)
//       return left&&right
//     }
//   function findCommonRoot(a,b){
//     if(!a||!b){
//       return null
//     }
//     if(A.val===B.val){
//       return A
//     }
//     let left=findCommonRoot(a.left,b)
//     if(left){
//       return left
//     }
//     let right=findCommonRoot(a.rigth,b)
//     if(right){
//       return right
//     }
//   }
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
  if(!A || !B) {
     return false;
  }
  return isSameTree(A,B) || isSubStructure(A.left,B)|| isSubStructure(A.right,B)
};
var isSameTree=function(a,b){
 if(!b){
     // 一直找到子树b为空都没有发现a.val !== b.val的情况，那么就确定确实存在这颗子树了
     return true
 }
 if(!a){
     return false
 }
 // 当前节点的值不相等，不 ok
 if(a.val !== b.val) {
     return false;
 }
 // 递归考察左子树、右子树
 // 这里找到整颗的
 return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}