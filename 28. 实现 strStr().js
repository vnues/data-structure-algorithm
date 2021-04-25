/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 窗口滑动算法
// 窗口滑动算法关键是存入元素 缩小窗口（如何缩小窗口的左边） 扩大窗口（存入元素）
var strStr = function (haystack, needle) {
    if (haystack === needle || !needle.length) {
        return 0
    }
    let str = '' // 维护一个窗口 窗口的大小是needle.length
    for (let i = 0; i < haystack.length; i++) {
        str += haystack[i]
        if (str.length === needle.length) {
            if (str === needle) {
                return i - needle.length + 1
            }
            str = str.substr(1)  // 删除一个字符串
        }

    }
    return -1
};