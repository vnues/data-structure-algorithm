/**
 * @format
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
	let res = []
	let track = []
	function backtrack(nums, track) {
		if (track.length === nums.length) {
			res.push([...track]) // 注意地址拷贝
			return
		}
		for (let i = 0; i < nums.length; i++) {
			// 下面两步做选择
			if (track.includes(nums[i])) {
				continue
			}
			track.push(nums[i])
			backtrack(nums, track)
			// 撤销选择
			track.pop()
		}
	}
	backtrack(nums, track)
	return res
}

console.log(permute([1, 2, 3]))
