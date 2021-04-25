// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// // 暴力解法
// // ❗️注意是公共前缀
// // 找到最小长度的字符串 
// var longestCommonPrefix = function (strs) {
//     let preStr = "" // 公共前缀
//     let flag = true // 标识是否是公共前缀
//     // 借助一个临时变量 可以省去很多麻烦
//     let min = 0 // 初始化 最小长度的字符串
//     if (!strs.length || !strs[0].length) {
//         return ""
//     } else {
//         min = strs[0]
//     }
//     for (let i = 0; i < strs.length; i++) {
//         if (min.length > strs[i].length) {
//             min = strs[i]
//         }
//     }
//     for (let i = 0; i < min.length; i++) {
//         debugger
//         flag = true // 重置
//         for (let j = 0; j < strs.length; j++) {
//             if (min.charAt(i) !== strs[j].charAt(i)) {
//                 flag = false
//                 break;
//             }
//         }
//         if (flag) {
//             preStr += min.charAt(i)
//         } else {
//             return preStr
//         }
//     }
//     return preStr
// };

// longestCommonPrefix(["aac", "ab"])



/**
 * @param {string[]} strs
 * @return {string}
 */
/**
 * 审题：最长公共前缀
 * 感觉一般最值的问题可以用动态规划做，但是好像不行啊 这个状态是三个
 * 思路：以第一个为最长公共前缀，挨个与后面的进行比较，然后删减
 */
var longestCommonPrefix = function (strs) {
    let prefix = strs[0]
    for (let i = 0; i < strs.length; i++) {
        // indexOf 跟的是prefix 因为要动态变化
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    if (!prefix) {
        return ''
    }
    return prefix
};