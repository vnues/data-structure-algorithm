
// 这题可以用动态规划求解 我们转化为最值就行了
// ! 动态规划的框架
function countSubstrings(s) {
  // 动态规划法
  // ! 动态规划问题===>搞清楚定义
  let dp = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));
  let ans = 0;
// 为什么是2层for循环 首先我们先确定动态规划的dp数据结构
// i...j表示一个回文字符串 那么dp[i][j]表示i...j是一个回文字符串 所以是个二维数组 二维数组当然就是两层了
// 这里不需要的dp存储再遍历累加 直接用计数器就行
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
        // 正着循环 2种情况
        // s.charAt(i) == s.charAt(j)&&j - i < 2（注意是<2 说明一个也行）   dp[i + 1][j - 1]&&s.charAt(i) == s.charAt(j)
        // 这就是状态转移方程
        // 为什么是 dp[i + 1][j - 1] 因为状态转移方程是这样的 i dp[i + 1][j - 1] j 回文子串 不是dp[i][j-1] 
        // 所以得找对状态转移方程
      if (s.charAt(i) == s.charAt(j) && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        ans++;
      }
    }
  }

  return ans;
}
