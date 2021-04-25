/**
 * @format
 * @param {number[]} numbers
 * @return {number}
 */
// 输入的是一个原本有序的数组进行了旋转操作
var minArray = function (numbers) {
	let left = 0
	let right = numbers.length - 1
	while (left < right) {
		let mid = parseInt((right + left) / 2)
		if (numbers[mid] < numbers[right]) {
			right = mid
		} else if (numbers[mid] > numbers[right]) {
			left = mid + 1
		} else {
			right--
		}
	}
	return numbers[left]
}
