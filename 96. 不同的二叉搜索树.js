/**
 * @param {number} n
 * @return {number}
 */
// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
var numTrees = function(n) {
  // dp[i]=n 表示1...n有n种二叉搜索树
  // 关键问题 如何排列组合确定为二叉搜索树的
  // 比如n=3 根节点k可以为 1 2 3  发现这个规律后  确定二叉树就可以迎刃而解了====>拆分为左子树和右子树===>推出状态转移方程
  const dp = new Array(n + 1).fill(0)
  dp[0]=1
  dp[1]=1
  // 第一层for循环表示1...n的dp集合
  for(let i=2;i<=n;i++){
    // i-1表示减去根节点
    for(let j=0;j<=i-1;j++){
      console.log(dp[j])
      // 注意是 dp[i] +=  
      // 以i为3来说 根节点为1  2 3  1 23 null 1 null 23这样 至于怎么构建 不关心  统计个数就行
      // 我们不看是如何构建成二叉树搜索树（二叉搜索树长啥样） 看构建个数
      dp[i] += dp[j]*dp[i-1-j]
    }
  }
  return dp[n]
};

console.log(numTrees(3))