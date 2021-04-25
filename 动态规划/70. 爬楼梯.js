/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 */

/**
* @param {number} n
* @return {number}
*/
/**
 * 动态规划
 * 明白dp[n]=x的定义 dp[n]这个状态的定义:表示到第n个台阶有多少种爬法
 * 如何根据dp[n-1]推导出dp[n]
 */
var climbStairs = function (n) {
    const dp = new Array()
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};