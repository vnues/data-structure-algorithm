/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// 二叉搜索树转化为双向循环链表
// 这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点
// 双向链表 前驱和后继的概念 其实就是中序遍历+双向链表的操作
var treeToDoublyList = function(root) {
  let pre = null
  let head = root
  dfs(root)
  // 这时候的pre不是null，而是末尾节点值
  pre.right=head
  head.left=pre
  return head
  function dfs(root){
    if(!root){
      return null
    }
    // 中序遍历
    dfs(root.left)
    if(pre){
      pre.right = root
    } else {
      head=root
    }
    root.left=pre
    pre=root
    dfs(root.right)
  }
};