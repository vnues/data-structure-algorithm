

// 阶解题思路
// 挑选的基准值为数组中间的值
// 中间值就把数组分成了两组
// 左边一组，从左到右，挨个与 基准值 比较，找出比基准值大的值
// 右边一组，从右到左，挨个与 基准值 比较，找出比基准值小的值
// 左右两边各找到一个值，那么就让这两个值进行交换
// 然后继续找，直到左右两边碰到，这一轮就结束。这一轮就称为快速排序
// 继续对分出来的小组(左右分组 然后再进行排序 一轮下来 类似冒泡 确定了顺序 只不过是每轮都拆分了2个组进行排序)，进行上述的快速排序操作，直到组内只剩下一个数时，则排序完成
// 自上而下递归实际就是多个组了

const arr = [-9, 78, 0, 23, -567, 70]

// 快排=分区（partition）+递归
// 分区操作 ===>swap操作
// https://juejin.cn/post/6844903938915827725
function quickSort(nums, l, r) {
	if (l >= r) return
	let i = l,
		j = r
	tmp = nums[i]
	const pivot = l
	while (i < j) {
		while (nums[j] >= nums[pivot] && i < j) j--
		while (nums[i] <= nums[pivot] && i < j) i++
		tmp = nums[i]
		nums[i] = nums[j]
		nums[j] = tmp
	}
	// 这里是对pivot的调整
	nums[i] = nums[l]
	nums[l] = tmp
	quickSort(nums, l, i - 1)
	quickSort(nums, i + 1, r)
}

quickSort(arr, 0, arr.length - 1)

console.log(arr) // [ -9, -567, 0, 23, 78, 70 ]