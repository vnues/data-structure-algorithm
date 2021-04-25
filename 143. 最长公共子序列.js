/** @format */

var longestCommonSubsequence = function (text1, text2) {
	const m = text1.length,
		n = text2.length
	const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
	for (let i = 1; i <= m; i++) {
		const c1 = text1[i - 1]
		for (let j = 1; j <= n; j++) {
			const c2 = text2[j - 1]
			if (c1 === c2) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}
	console.log(dp)
	return dp[0][0]
}

/*********** 递归解法 *************/

// 备忘录，消除重叠子问题

/* 主函数 */
// let memo = []

// function longestCommonSubsequence(s1, s2) {
// 	let m = s1.length,
// 		n = s2.length
// 	// 备忘录值为 -1 代表未曾计算
// 	// 计算 s1[0..] 和 s2[0..] 的 lcs 长度
// 	memo = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-1))
// 	return dp(s1, 0, s2, 0)
// }

// // 定义：计算 s1[i..s1.length-1] 和 s2[j..s2.length-1] 的最长公共子序列长度
// function dp(s1, i, s2, j) {
// 	// base case
// 	if (i == s1.length || j == s2.length) {
// 		return 0
// 	}
// 	// 如果之前计算过，则直接返回备忘录中的答案
// 	if (memo[i][j] != -1) {
// 		return memo[i][j]
// 	}
// 	// 根据 s1[i] 和 s2[j] 的情况做选择
// 	if (s1[i] === s2[j]) {
// 		// s1[i] 和 s2[j] 必然在 lcs 中
// 		memo[i][j] = 1 + dp(s1, i + 1, s2, j + 1)
// 	} else {
// 		// s1[i] 和 s2[j] 至少有一个不在 lcs 中
// 		memo[i][j] = Math.max(dp(s1, i + 1, s2, j), dp(s1, i, s2, j + 1))
// 	}
// 	return memo[i][j]
// }

console.log(longestCommonSubsequence('a', 'aaaaaaaaaaaa'))

// console.log(memo)
