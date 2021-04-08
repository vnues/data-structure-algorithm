/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// ! 推导出三个问题
//  根据以上定义，若 rootroot 是 p, qp,q 的 最近公共祖先 ，则只可能为以下情况之一：
//  1.p 和 q 在root 的子树中，且分列root 的 异侧（即分别在左、右子树中）；
//  2.p=root ，且 q 在root 的左或右子树中；
//  3.q=root ，且 p 在root 的左或右子树中；
// ! 不要有这种误区 q就在左 q就在右 不是的
// 并且树的值唯一
var lowestCommonAncestor = function(root, p, q) {
  // LCA问题
  // 1.p节点和q节点其中一个是根节点的话 2.找到的节点的值等于p或者q
  if(root===null||root===p||root===q){
      return root
  }
  let left =lowestCommonAncestor(root.left,p,q)
  let right =lowestCommonAncestor(root.right,p,q)
  // 没有找到
  if(!left&&!right){return null}
  else if(left&&right){return root}
  // 只在left或者right找到
  // ! 满足2.3条件 意思是谁先找到谁就是祖先节点 因为另外一个节点肯定在它的左子树或者右子树
  else {return !left?right:left}
};