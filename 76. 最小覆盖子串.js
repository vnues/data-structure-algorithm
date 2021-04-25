/** @format */

function minWindow(s, t) {
	let need = {} // 需要凑齐的字符  ===>就是满足t
	let window = {} // 记录窗口中的字符
	for (let i = 0; i < t.length; i++) {
		need[t[i]] ? need[t[i]]++ : (need[t[i]] = 1)
	}

	let left = 0,
		right = 0
	let valid = 0
	// 记录最小覆盖子串的起始索引及长度
	let start = 0,
		len = Infinity
	while (right < s.length) {
		// c 是将移入窗口的字符
		let c = s[right]
		// 右移窗口
		right++
		// 进行窗口内数据的一系列更新
		if (need[c]) {
			window[c] ? window[c]++ : (window[c] = 1)
			if (window[c] == need[c]) {
				valid++
			}
		}

		// 判断左侧窗口是否要收缩
		while (valid === Object.keys(need).length) {
			// 在这里更新最小覆盖子串
			if (right - left < len) {
				start = left
				len = right - left
			}
			// d 是将移出窗口的字符
			let d = s[left]
			// 左移窗口
			left++
			// 进行窗口内数据的一系列更新
			if (need[d]) {
				if (window[d] == need[d]) valid--
				window[d]--
			}
		}
	}
	// 返回最小覆盖子串
	return len == Infinity ? '' : s.substr(start, len)
}

/**
 * ! 注意对于子串问题  为什么需要使用hashMap
 * 1.通常都含有不重复这个特点  这个时候就是需要map
 * 2.另外map还要一个特点就是统计
 */
