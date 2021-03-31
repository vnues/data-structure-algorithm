/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 节点的next默认就是指向null
// ! 一看就是前序遍历的框架
function connectTwoNode(node1,node2){
  if(!node1){
    return
  }
  node1.next=node2
}
// var connect = function(root) {
//    // 递归的base case
//     if(!root||!root.left){
//       return root
//     }
//     // 前序遍历的位置
//     connectTwoNode(root.left,root.right)
//     connect(root.left)
//     connect(root.right)
//     connectTwoNode(root.left.right,root.right.left)
//     return root
// };


// ! 树的问题细化为节点问题  将每两个相邻节点都连接起来

var connect = function(root) {
  if(!root){
    return null
  }
  connectTwoNode(root.left,root.right)
  return root
  function connectTwoNode(node1,node2){
    // 左子节点 右子节点
    if(!node1||!node2){
      return 
    }
    // 前序遍历
    node1.next=node2
    connectTwoNode(node1.left,node1.right)
    connectTwoNode(node2.left,node2.right)
    // 连接跨越父节点的两个子节点  <=== 这个逻辑也是递归单元 因为跨越父节点有多个
    connectTwoNode(node1.right,node2.left)
    // 不能这样处理 缺少9-->10这种情况
    // 9-->10这种情况 3--->4才能拿到 而3--->4就是跨越父节点 所以需要递归
    // if(node1.right){
    //   node1.right.next=node2.left
    // }
  }
}