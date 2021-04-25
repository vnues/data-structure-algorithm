class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        /**
        注意p,q必然存在树内, 且所有节点的值唯一!!!
        递归思想, 对以root为根的(子)树进行查找p和q, 如果root == null || p || q 直接返回root
        表示对于当前树的查找已经完毕, 否则对左右子树进行查找, 根据左右子树的返回值判断:
        1. 左右子树的返回值都不为null, 由于值唯一左右子树的返回值就是p和q, 此时root为LCA
        2. 如果左右子树返回值只有一个不为null, 说明只有p和q存在于左或右子树中, 最先找到的那个节点为LCA
        3. 左右子树返回值均为null, p和q均不在树中, 返回null
        **/
        if (root == null || root == p || root == q) return root;
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left == null && right == null) return null;
        else if (left != null && right != null) return root;
        else return left == null ? right : left;
    }
}



/**
 * 寻找最近祖先相当于寻找两个p,q节点 通过后序遍历先拿到他们 自然而然祖先节点就能拿到了
 */
function LCA(root, p, q) {
    /**
     * LCA问题
     */
    if (root === null || root === p || root === q) {
        return root
    }
    /**
     * 递归去寻找
     */
    let left = lowestCommonAncestor(root, p, q)
    let right = lowestCommonAncestor(root, p, q)
    /**
     * 找不到返回null
     */
    if (left === null && right === null) { return null }
    else if (left !== null && right !== null) { return root }
    /**
     * 这种情况是p是q的祖先或者q是p的祖先
     */
    else {
        return left === null ? right : left
    }
}