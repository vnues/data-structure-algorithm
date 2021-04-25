/**
 * @format
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				dfs(matrix, i, j)
				// matrix[i][j] = 'flag'
			}
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 'flag') {
				matrix[i][j] = 0
			}
		}
	}

	console.log(matrix)

	function dfs(matrix, i, j, dir) {
		// 递归的base case
		// console.log(matrix.length)
		if (i >= matrix.length || j >= matrix[0].length || i < 0 || j < 0) {
			return
		}
		if (matrix[i][j] !== 0) {
			matrix[i][j] = 'flag' // 后面替换为0
		}
		if (!dir || dir === 'up') {
			dfs(matrix, i - 1, j, 'up') // 向上
		}
		if (!dir || dir === 'down') {
			dfs(matrix, i + 1, j, 'down') // 向下
		}
		if (!dir || dir === 'left') {
			dfs(matrix, i, j - 1, 'left') // 向左
		}
		if (!dir || dir === 'right') {
			dfs(matrix, i, j + 1, 'right') // 向右
		}
	}
}

const nums = [
	[0, 0, 0, 5],
	[4, 3, 1, 4],
	[0, 1, 1, 4],
	[1, 2, 1, 3],
	[0, 0, 1, 1],
]
setZeroes(nums)
