/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// BST的创建 选择考虑这两种情况
// 左子树和右子树的划分 一层for
// 左子树集合和右子树集合的组合 2层for
var generateTrees = function (n) {
  function buildTree(start, end) {
    let _result = []
    // 指针交错递归终止
    if (start > end) return [null] // 原来如此 
    // i指针滑动，枚举left和right分段的所有可能
    for (let i = start; i <= end; i++) {
      // 左侧和右侧生成树的集合 返回为数组
      let left = buildTree(start, i - 1)
      let right = buildTree(i + 1, end)
      // 循环左右两侧的树集合 分别拼接到新树上，并且存储到结果数组中
      // 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
      for (const leftNode of left) {
        // left为空是这样的[null] 还是可以进来这个循环的 因为有这种场景你要想通 1==>2==>3 都是右子节点的情况
        for (const rightNode of right) {
          let node = new TreeNode(i)
          node.left = leftNode
          node.right = rightNode
          _result.push(node)
        }
      }
    }
    // 返回指定范围生成的树集合
    return _result
  }
  // n 为 0 是返回[]
  if (n === 0) return []
  // 指定最大范围
  return buildTree(1, n)
}
