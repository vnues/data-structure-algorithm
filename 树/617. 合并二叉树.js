// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root1
//  * @param {TreeNode} root2
//  * @return {TreeNode}
//  */
// // 层序遍历
// var mergeTrees = function(root1, root2) {
//   let queue = []
//   queue.push(root1)
//   queue.push(root2)
//   let root3 = null
//   let node = null
//   while(queue.length){
//     let size = queue.length // 注意 queue的长度可能会变动 所以先保留对应长度值
//     for(let i=0;i<size;i++){
//       let node1=queue.shift()
//       let node2 = queue.shift()
//       if(!root3){
//         root3 = new TreeNode(node1.val+node2.val)
//         node =root3
//       } else if (!node.left){
//         // 左子节点没有值
//         node.left =  new TreeNode(node1.val+node2.val)
//       } else if(!node.right) {
//         // 右子节点没有值
//         node.right =  new TreeNode(node1.val+node2.val)
//       }
//       if(node1.left){
//         queue.push(node1.left)
//       }
//       if(node1.right){
//         queue.push(node1.right)
//       }
//       if(node2.left){
//         queue.push(node2.left)
//       }
//       if(node2.right){
//         queue.push(node2.right)
//       }
//     }
//   }
//   return root3
// };

// !解法错误 放弃了

// 前序遍历