// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {number}
//  */
//  var pathSum = function(root, targetSum) {
//    let map=new Map()
//    let ans=0
//   dfs(root,0)
//   return ans
//   /**
//    * 
//    * @param {*} root 
//    * @param {*} presum 前缀和
//    * @returns 
//    */
//   function dfs(root,presum){
//       if(!root){
//           return 0
//       }
//       map.set(presum,(map.get(presum)||0)+1)
//       let target = presum + root.val
//       ans+=(map.get(target-targetSum)||0)
//      // 继续找
//       dfs(root.left,target)
//       dfs(root.right,target)
//       // 回溯 撤销
//       map.set(presum,map.get(presum)-1)
//   }
// };

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
 * @param {number} sum
 * @return {number}
 */
 var pathSum = function(root, sum) {
  // 二叉树-题目要求只能从父节点到子节点 所以用先序遍历

  // 路径总数
  let ans = 0

  // 前缀和:一个节点的前缀和就是该节点到根之间的路径和
  // HashMap的key是前缀和， value是该前缀和的节点数量，记录数量是因为有出现复数路径的可能
  let map = new Map()

  // 先序遍历二叉树
  function dfs(presum,node) {
    if(!node)return 0 // 遍历出口

    // 将当前前缀和添加到map
    map.set(presum,(map.get(presum) || 0) +1 )
    // 从根节点到当前节点的值
    let target = presum + node.val
    // target-sum = 需要的前缀和长度
    // 然而前缀和之前我们都存过了 检索map里key为该前缀和的value
    // map的值相当于有多少个节点到当前节点=sum 也就是有几条路径
    // target - sum为0说明
    // 两节点间的路径和 = 两节点的前缀和之差
    ans+=(map.get(target - sum) || 0)
    // 按顺序遍历左右节点
    dfs(target,node.left)
    dfs(target,node.right)
    // 回溯 撤销操作
    // 状态恢复代码的作用就是： 在遍历完一个节点的所有子节点后，将其从map中除去。
    // 当我们讨论两个节点的前缀和差值时，有一个前提：
    // 一个节点必须是另一个节点的祖先节点
    // 换句话说，当我们把一个节点的前缀和信息更新到map里时，它应当只对其子节点们有效。
    map.set(presum,map.get(presum) -1 )
  }
  dfs(0,root)
  return ans
};