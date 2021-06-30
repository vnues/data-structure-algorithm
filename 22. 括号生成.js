<<<<<<< HEAD
/**
 * @param {number} n
 * @return {string[]}
 */
// 注意是DFS 先画图 再剪枝
// https://leetcode-cn.com/problems/generate-parentheses/solution/sui-ran-bu-shi-zui-xiu-de-dan-zhi-shao-n-0yt3/ (这里可以看看图图)
function generateParenthesis(n) {
	let res = []
	backtrace('', 0, 0)
	return res
	function backtrace( str, left, right) {
    if (left > n || right > left){
      return
    }
    // n*2是因为括号是成对出现的
    if(str.length===n*2){
      res.push(str)
      return
    }
    // 用+号比较符合正常思维
		backtrace(str + '(', left + 1, right)
    backtrace(str + ')', left, right + 1)
	}
}

console.log(generateParenthesis(3))
=======
/** @format */
// ! 考查的就是前序遍历操作+筛选适合的路径path
// 先知道树的深度
// 前序遍历
// ! 首先得明白回溯应该脑海中塑造一棵树
// ! 这题 很明显 子节点下都有（ ）  因为都可以选择
function generateParenthesis(n) {
	let strs = []
	backtrace(strs, '', n, 0)
	return strs
	function backtrace(strs, str, left, right) {
		// 是否合法的括号
		// !理论上🌲都深度由n控制
		// ! 但是因为括号的合法性
		// ! 所以由left的决定 深度是为3
		// ! 要有回溯的思路
		// 都走完了
		if (left == 0 && right == 0) {
			strs.push(str)
			return
		}
		// ! 前序遍历 但是遍历不是加上 你可以拿到自己合适的  别误会成每遍历一个就加上一个
		// ! 递归后有多少趟回溯
		// 左子节点是（
		// 右子节点是 ）
		// ! left right控制合法括号  舍弃非合法的
		// ! left超过边界就告诉递归函数 不用再递归左子节点了
		// 遍历左子节点 这时候 str + '(' left-1   str + '(' ====》就是前序操作
		// 类似这样
		// let l = str + ')'
		// let r = str + ')'
		if (left > 0) backtrace(strs, str + ')', left - 1, right + 1)
		// ! 这里left不动 因为我们是前序遍历这个右子节点
		// 遍历右子节点 这时候right-1   str + ')'前序操作
		if (right > 0) backtrace(strs, str + ')', left, right - 1)
	}
}

console.log(generateParenthesis(3))

// function generateParenthesis(n) {
// 	let strs = []
// 	backtrace(strs, '', n, 0)
// 	return strs
// 	function backtrace(strs, str, left, right) {
// 		// 是否合法的括号
// 		// !🌲都深度由n*2控制 因为总长是n*2 根据DFS树的深度应该是n*2  因为一种情况是一路向左子节点递归下去
// 		// 成对出现
// 		if (str.length === n * 2) {
// 			strs.push(str)
// 			return
// 		}
// 		// ! 前序遍历 但是遍历不是加上 你可以拿到自己合适的  别误会成每遍历一个就加上一个
// 		// ! 递归后有多少趟回溯
// 		// 左子节点是（
// 		// 右子节点是 ）
// 		// ! left right控制合法括号  舍弃非合法的
// 		backtrace(strs, str + '(')

// 		backtrace(strs, str + ')')
// 	}
// }

// console.log(generateParenthesis(4))

// ! 这道题懂8成

// ! 看走的路径
>>>>>>> faf151e4efecf76869362fce4dde511334ce328f
