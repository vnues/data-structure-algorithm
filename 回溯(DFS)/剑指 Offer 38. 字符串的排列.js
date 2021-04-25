/** @format */

// 解题框架
// result = []
// function backtrack(路径, 选择列表):
//     if 满足结束条件:
//         result.add(路径)
//         return

//     for 选择 in 选择列表:
//         做选择
//         backtrack(路径, 选择列表)
//         撤销选择

var permutation = function (s) {
	let track = []
	let res = []
	let dic = new Set() // 通过dic数组判断是否是同个下标重复
	function backtrack(s, track) {
		if (track.length === s.length) {
			let str = track.join('')
			if (res.includes(str)) {
				return
			}
			return res.push(str)
		}
		for (let i = 0; i < s.length; i++) {
			if (dic.has(i)) {
				continue
			}
			dic.add(i)
			track.push(s[i])
			backtrack(s, track)
			track.pop()
			dic.delete(i)
		}
	}

	backtrack(s, track)
	return res
}

console.log(permutation('aac'))
