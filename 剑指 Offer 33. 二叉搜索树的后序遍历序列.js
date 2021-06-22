
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
// 利用后序遍历+BST
// 左子树肯定是小于根节点 右子树肯定是大于根节点
// 问题就拆分左右子树 然后挨个判断 （肯定是要全部判断的 一个不满足就返回false）
var verifyPostorder = function(postorder) {
  if(postorder.length <=2)return true
  //后序遍历结果：左右根
  //左子树比根节点小，右子树比根节点大
  const root = postorder.pop()
  let i =0
  // 获取左子节树节点数目
  while (postorder[i]< root) {
      i++
  }
  //i及后面的节点都应该大于root
  // 右子树
  const rightResult = postorder.slice(i).every(item=>item>root)
  //对左右子树递归判断。如果所有的都满足就返回true，否则返回false
  // postorder.slice(0,i)左子树
  // postorder.slice(i)右子树
  return rightResult && verifyPostorder(postorder.slice(0,i)) && verifyPostorder(postorder.slice(i))
};