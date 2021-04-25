/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）
 */



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/**
 * 树的解决方式
 * ✅首先应该考虑那种方式去遍历树才能很好解决问题
 * 层级遍历 充分利用层级 使用level去定位节点需要放在哪个位置
 * 对于递归变量处理觉得棘手，可以考虑单独抽离出一个helper函数
 */
var levelOrder = function (root) {
    const levels = []
    function helper(node, level) {
        if (levels.length === level) {
            levels.push([])
        }
        levels[level].push(node.val)
        if (node.left) {
            helper(node.left, level + 1)
        }
        if (node.right) {
            helper(node.right, level + 1)
        }
    }
    if (!root) {
        return levels
    }
    helper(root, 0)
    return levels
}