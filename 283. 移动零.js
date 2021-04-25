/**
 * @format
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
	// ! 一般快慢指针初始值都是一样的 <=== 理解这点很重要 起点设置好了 后面少坑
	let slow = 0
	let fast = 0
	// 换个思路想 移动0到后面 我们移动非0的到前面就行
	while (fast < nums.length) {
		if (nums[fast] !== 0) {
			if (fast !== slow) {
				let temp = nums[slow]
				nums[slow] = nums[fast]
				nums[fast] = temp
			}
			slow++
		}
		fast++
	}
}

const num = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0]

moveZeroes(num)

console.log(num)
