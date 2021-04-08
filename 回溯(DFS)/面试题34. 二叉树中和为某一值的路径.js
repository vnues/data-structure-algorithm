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
 * @param {number} target
 * @return {number[][]}
 */
// DFS 选择前序遍历
// 根节点到叶子节点的路径
 var pathSum = function(root, target) {
    let res=[]
    let path=[]
    backtrace(root,target)
    return res
    function backtrace(root,target){
      // base case
      if(!root){
        return
      }
      path.push(root.val)
      target=target-root.val
      // 差点忽略了是叶子节点的操作
      // 这里不能return 因为还有个撤销操作要触发
      if(target===0&&!root.left&&!root.right){
        res.push([...path]) // 浅拷贝
        path.pop()
        return
      }
      backtrace(root.left,target)
      backtrace(root.right,target)
      // 回溯撤销 撤销目的是为了不影响到上一层的
      // ! 单个递归的撤销容易理解 参考全排列 2个就不好理解 ===>但是没问题 当做一个整体就行
      // 左子节点会 ==》 backtrace(root.left,target)  backtrace(root.right,target)  
      // 当做一个整体 看看回到父节点上的场景 为了不干扰到右子节点的值运算
      path.pop()
    }
};