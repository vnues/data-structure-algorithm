/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
  * 
  * @param root TreeNode类 
  * @return int整型
  */
/**
* 最大深度是指树的根结点到最远叶子结点的最长路径上结点的数量
* 递归的关键是拆解子问题
* 
*/
function maxDepth(root) {
  // 采用遍历方式 后序遍历
  if (!root) {
    return 0
  }
  // 进行后序遍历 +1  表示自身节点加1
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
}




// 最小深度

function minDepth(root) {
  if (!root) { return 0 }
  if (!root.left && !root.right) { return 1 } // 说明是叶子节点或者是只有一个根节点
  let minDep = Infinity // 无穷大
  if (root.left) {
    minDep = Math.min(minDepth(root.left), minDep)
  }
  if (root.right) {
    minDep = Math.min(minDepth(root.right), minDep)
  }
  // +1 是加上了父节点
  // 递归小技巧 不需要定义一个全局变量一直往下传递
  // 通过返回值代替即可
  return minDep + 1
};