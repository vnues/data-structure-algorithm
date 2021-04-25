/** @format */

var findNumberOfLIS = function (nums) {
	if (!nums.length) return 0
	let len = nums.length,
		dp = Array(len).fill(1),
		count = Array(len).fill(1),
		ans = 0

	for (let i = 1; i < len; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				// 如果+1大于当前长度 则组合数不变
				// 最大值 max选择
				if (dp[j] + 1 > dp[i]) {
					dp[i] = dp[j] + 1
					count[i] = count[j]
				} else if (dp[j] + 1 == dp[i]) count[i] += count[j]
			}
		}
	}

	let max = Math.max(...dp)
	console.log(count)
	for (let i = 0; i < len; i++) if (dp[i] == max) ans += count[i]

	return ans
}

const nums = [1, 3, 5, 4, 7]

console.log(findNumberOfLIS(nums))
