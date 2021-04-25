/** @format */

// 路径：记录在 track 中
// 选择列表：nums 中不存在于 track 的那些元素
// 结束条件：nums 中的元素全都在 track 中出现
let res = []
function backtrack(nums, track) {
	// 触发结束条件
	if (track.length == nums.length) {
		res.push([...track])
		return
	}

	for (let i = 0; i < nums.length; i++) {
		// 排除不合法的选择
		if (track.includes(nums[i])) continue
		// 做选择
		track.push(nums[i])
		// 进入下一层决策树
		backtrack(nums, track)
		// 取消选择
		track.pop()
	}
}

backtrack(['a', 'c', 'e', 'z'], [])
console.log(res)
