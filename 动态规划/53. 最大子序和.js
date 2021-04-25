/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

/**
* @param {number[]} nums
* @return {number}
*/
/**
 * 动态规划
 * 状态转移方程：f(i)=max{f(i−1)+ai,ai)
 * ❗️定义状态就是定义dp数组的含义
 * dp数组的定义以 nums[i] 为结尾的「最大子数组和」为 dp[i]。
 * 知道dp[i-1]，推导出dp[i]
 */
var maxSubArray = function (nums) {
    const dp = new Array()
    let res = Number.NEGATIVE_INFINITY
    // base case
    dp[0] = nums[0] // 第一个结尾的前面没有子数组 可以给出
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }
    // 返回值
    for (let i = 0; i < nums.length; i++) {
        res = Math.max(res, dp[i])
    }
    // 不能直接返回dp[n-1] 因为我们定义dp[n]是nums[i] 为结尾的「最大子数组和」为 dp[i]
    // 不能用dp[n]代表n整体 而是用dp数组来代表 这是不同的
    return res
};