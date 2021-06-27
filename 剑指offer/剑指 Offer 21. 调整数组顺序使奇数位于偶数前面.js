/**
 * @format
 * @param {number[]} nums
 * @return {number[]}
 */

// 不用看双指针  数组问题基本要想到双指针
// 双指针解法可以优化空间和时间 原地
// ! 快慢指针 起点应该相同 然后根据条件 谁走快 谁走的慢而已
var exchange = function (nums) {
	let front = 0
	let after = 0
	// for可以改用while
	for (let i = 0; i < nums.length; i++) {
		// 证明是偶数
		if (nums[after] % 2 === 0) {
			// front 前指针负责找到奇数
			while (nums[front] % 2 === 0) {
				front++
			}
			if (front < nums.length) {
				// 交换
				let temp = nums[front]
				nums[front] = nums[after]
				nums[after] = temp
			}
		}
		after++
		front++
	}
	return nums
}

console.log(exchange([1, 2, 3, 4]))
