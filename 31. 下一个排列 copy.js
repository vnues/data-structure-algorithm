/** @format */

// 算法过程
// 标准的“下一个排列”算法可以描述为：

// 从后向前查找第一个相邻升序的元素对 (i,j)，满足 A[i] < A[j]。此时 [j,end) 必然是降序
// 在 [j,end) 从后向前查找第一个满足 A[i] < A[k] 的 k。A[i]、A[k] 分别就是上文所说的「小数」、「大数」
// 将 A[i] 与 A[k] 交换
// 可以断定这时 [j,end) 必然是降序，逆置 [j,end)，使其升序
// 如果在步骤 1 找不到符合的相邻元素对，说明当前 [begin,end) 为一个降序顺序，则直接跳到步骤 4

function nextPermutation(nums) {
	// 最后一个元素的下标是nums.length-1
	let i = nums.length - 2
	// 从后查找第一个相邻升序的元素对 (i,j)，满足 A[i] < A[j] 这样反转才可以使整个数值变大
	while (i >= 0 && nums[i] >= nums[i + 1]) {
		i--
	}
	if (i >= 0) {
		let j = nums.length - 1
		// 在 [j,end) 从后向前查找第一个满足 A[i] < A[k] 的 k。A[i]、A[k] 分别就是上文所说的「小数」、「大数」
		while (j >= 0 && nums[i] >= nums[j]) {
			j--
		}
		// !确定ij要交换的位置就行
		swap(nums, i, j)
	}
	// 交换过后 后面必定是个升序的 我们要变为降序 双指针即可
	// 变为升序
	reverse(nums, i + 1)
}
// 交换
function swap(nums, i, j) {
	let temp = nums[i]
	nums[i] = nums[j]
	nums[j] = temp
}

// 反转
function reverse(nums, start) {
	let left = start,
		right = nums.length - 1
	while (left < right) {
		swap(nums, left, right)
		left++
		right--
	}
}
