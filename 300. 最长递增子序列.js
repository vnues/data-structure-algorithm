/** @format */

// dp[i] 的值代表 nums 前 i 个数字的最长子序列长度

const nums = [10, 9, 2, 5, 3, 4]

// 转移方程： 设 j∈[0,i)j∈[0,i)，考虑每轮计算新 dp[i]dp[i] 时，遍历 [0,i)[0,i) 列表区间，做以下判断：

// 当 nums[i] > nums[j]nums[i]>nums[j] 时： nums[i]nums[i] 可以接在 nums[j]nums[j] 之后（此题要求严格递增），此情况下最长上升子序列长度为 dp[j] + 1dp[j]+1 ；
// 当 nums[i] <= nums[j]nums[i]<=nums[j] 时： nums[i]nums[i] 无法接在 nums[j]nums[j] 之后，此情况上升子序列不成立，跳过。
// 上述所有 1. 情况 下计算出的 dp[j] + 1dp[j]+1 的最大值，为直到 ii 的最长上升子序列长度（即 dp[i]dp[i] ）。实现方式为遍历 jj 时，每轮执行 dp[i] = max(dp[i], dp[j] + 1)dp[i]=max(dp[i],dp[j]+1)。
// 转移方程： dp[i] = max(dp[i], dp[j] + 1) for j in [0, i)

// 申请题意 不必连续的 所以理解 dp[j]+1

// i 表示当前元素 j是i-1..... i前面的元素 <====dp[i] 的值代表 nums 前 i 个数字的最长子序列长度

// 状态转移方程===>dp[i] = max(dp[i], dp[j] + 1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	// 动态规划框架
	let dp = new Array(nums.length).fill(1)
	let res = 1
	for (let i = 0; i < nums.length; i++) {
		// 这层for循环得出dp[i]
		for (let j = 0; j < i; j++) {
			// j跟i-1...前面的数比较 因为这种情况[10, 9, 2, 5, 3, 4] 不一定连续 所以是要多一层for循环
			if (nums[i] > nums[j]) {
				// 当前元素大于前面的一个 dp[j]+1
				// 但是dp[i]有多个子问题(for循环) 需要从这个子问题选取最大的
				// Math.max(dp[i],dp[j]+1) 这里的dp[i]表示前面的子问题筛选出的结果和当前子问题
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
		res = Math.max(res, dp[i])
	}
	return res
}

console.log(lengthOfLIS(nums)) // 2 3 4
