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