/**
 * @format
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 算法流程：
// 空值处理： 当 matrix 为空时，直接返回空列表 [] 即可。
// 初始化： 矩阵 左、右、上、下 四个边界 l , r , t , b ，用于打印的结果列表 res 。
// 循环打印： “从左向右、从上向下、从右向左、从下向上” 四个方向循环，每个方向打印中做以下三件事 （各方向的具体信息见下表） ；
// 根据边界打印，即将元素按顺序添加至列表 res 尾部；
// 边界向内收缩 11 （代表已被打印）；2
// 判断是否打印完毕（边界是否相遇），若打印完毕则跳出。

var spiralOrder = function (matrix) {
	if (matrix.length == 0) return []
	let left = 0,
		right = matrix[0].length - 1,
		top = 0,
		bottom = matrix.length - 1,
		x = 0
	let res = []
	while (true) {
		for (let i = left; i <= right; i++) res[x++] = matrix[top][i]
		if (++top > bottom) break
		for (let i = top; i <= bottom; i++) res[x++] = matrix[i][right]
		if (left > --right) break
		for (let i = right; i >= left; i--) res[x++] = matrix[bottom][i]
		if (top > --bottom) break
		for (let i = bottom; i >= top; i--) res[x++] = matrix[i][left]
		if (++left > right) break
	}
	return res
}
