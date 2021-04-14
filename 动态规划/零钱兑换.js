/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 初始化base
  // 这样理解 找到120 的 需要dp[118]+1（面值为2） <===> 118+2 dep[118]+dep[2]
  // 所以第一层是求所有的子问题
  // 第二层  内层 for 在求所有子问题 + 1 的最小值
  // 从1开始 因为最小的子问题是1元
  for (let i = 1; i < dp.length; i++) {
      for (let coin of coins) {
          // i - coin >= 0表示子问题有解
          // 假设你求dep[1] 表示1元有dep[1]种解法 这时候面值最小的为2 所以无解
          // 转化为出来就是i - coin >= 0 面值为i的钱（实际就是防止数组越界）
          if (i - coin >= 0) {
              // 做选择，选择需要硬币最少的那个结果
              // dp[i] = x 表示，当目标金额为 i 时，至少需要 x 枚硬币。
              // 拿到最优子结构
              // coin==>1个硬币
              dp[i] = Math.min(dp[i], dp[i - coin] + 1);
              // dp[i] = dp[i - coin] + 1
          }
      }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}