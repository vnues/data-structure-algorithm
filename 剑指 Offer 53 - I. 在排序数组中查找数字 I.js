/**
 * @format
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 题意：已经排好序 查找 那么就是二分法]=6m[    K{AAAAAAAAAAAAAAaaaaaa}]
var search = function (nums, target) {
	function BinaySearch(nums, left, right) {
		if (left > right) {
			return -1 // 找不到
		}
		let mid = Math.floor((left + right) / 2)
		if (target < nums[mid]) {
			// 在左侧
			return BinaySearch(nums, left, mid - 1)
		} else if (target > nums[mid]) {
			// 在右侧
			return BinaySearch(nums, mid + 1, right)
		} else {
			// 找到了
			return mid
		}
	}
	let count = 0
	let left = 0
	let right = nums.length - 1
	let tarIdx = 0
	while (left < right) {
		// 有序数组
		left = BinaySearch(nums, left, right)
		tarIdx = left
		console.log('left', left)
		if (left !== -1 && left >= tarIdx) {
			count++
			left--
		} else {
			left = tarIdx
			left++
			continue
		}
	}
	return count
}

let nums = [5, 7, 7, 8, 8, 10]
let target = 8

console.log(search(nums, target))
