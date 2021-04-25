/** @format */

// 题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// LeetCode 240.搜索二维矩阵
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	// 不要一开始就从坐上角开始 因为就要判断两个条件
	// 从一个极端开始
	let row = matrix.length - 1
	let col = 0
	while (row >= 0 && col < matrix[0].length) {
		if (matrix[row][col] > target) {
			// 大于 ==>从左下角开始的 这时候col已经很小了 不可能继续减了
			row--
		} else if (matrix[row][col] < target) {
			col++
		} else {
			return true
		}
	}
}
