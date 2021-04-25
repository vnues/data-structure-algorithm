/**
 * @format
 * @param {number[]} nums
 * @return {string}
 */

// 理解题意 可以发现
// 排序 从小到大拼接就能得到最小的数
// var minNumber = function (nums) {
// 	return nums.sort((a, b) => '' + a + b - ('' + b + a))
// }

// console.log([7, 34, 12, 1, 9, 10].sort((a,b)=>a-b))
// console.log(minNumber([7,34,12,1,9,10]))

// ! 不是很懂sort

function minNumber(nums) {
	quickSort(nums, 0, nums.length - 1)
	console.log()
	return nums.join('')
}
// ! 该题其实考查的就是排序 但是对比大小的条件变了  数字的话根据大小来比
// ! 把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个  满足这种对比是根据 a+b 和 b+a的比较 决定排序位置
function quickSort(nums, l, r) {
	if (l >= r) return
	let i = l,
		j = r
	tmp = nums[i]
	const pivot = l
	while (i < j) {
		while ('' + nums[j] + nums[pivot] - ('' + pivot + nums[j]) >= 0 && i < j) j--
		while ('' + nums[i] + nums[pivot] - ('' + pivot + nums[i]) <= 0 && i < j) i++
		tmp = nums[i]
		nums[i] = nums[j]
		nums[j] = tmp
	}
	nums[i] = nums[pivot]
	nums[pivot] = tmp
	quickSort(nums, l, i - 1)
	quickSort(nums, i + 1, r)
}

console.log(minNumber([7, 34, 12, 1, 9, 10]))
