/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
//  A = "pale"
//  B = "ple"
// !两种解释 A删除a B也可以添加a 都可以做到
// 这题可以转化为动态规划 最小操作数
// 设d[i][j]表示将first前i个字符转变成与second前j个字符相等时的最小操作次数。
var oneEditAway = function(first, second) {
  let len1 = first.length,len2 = second.length; 
  if(Math.abs(len1-len2)>1)  return false;
  // dp[i][j] 对应s[0...i-1] s[0...j]
  let dp = new Array(len1+1).fill(0).map(()=> new Array(len2+1).fill(0))
  for(let i=0;i<=len1;i++){
    dp[i][0]=i
  }
  for(let j=0;j<=len2;j++){
    dp[0][j]=j
  }
  // 填充dp Table
  for(let i=1;i<=len1;i++){
    for(let j=1;j<=len2;j++){
      // 状态转移方程
      // 最后一个字符相同
      // dp(i，j) 表示A的前i个字符转变为B前j个字符的最小操作数 对应的数组下标就是i-1 j-1
      if(first.charAt(i-1) == second.charAt(j-1)){
        dp[i][j]=dp[i-1][j-1]
      } else{
        // A[i-1]替换操作，替换为B[j-1]，则dp[i][j]=dp[i-1][j-1]+1
        // A[i-1]插入一个B[j-1]一样的字符，则dp[i][j]=dp[i][j-1]+1
        // A[i-1]删除，则dp[i][j]=dp[i-1][j]+1
        // dp(i, j - 1) + 1,    # 插入
        // dp(i - 1, j) + 1,    # 删除
        // dp(i - 1, j - 1) + 1 # 替换
        dp[i][j] = Math.min(Math.min(dp[i-1][j]+1, dp[i-1][j-1]+1),dp[i][j-1]+1)
      }
    }
  }
  return dp[len1][len2]<=1
};

// 就是就是那道编辑距离的问题
// 操作一个字符串有增删替 三种操作 那种操作花费的操作最少就用哪种