// /**
//  * @param {string} s
//  * @return {number}
//  */
// // 暴力法
// // 🤔思路：使用一个当前指针一一扫描，遇到重复的 重新算起length 但是保留老的length
// // 重复 第一步骤，然后对比两个length
// // ❗️注意是连续不重复
// // hashMap 避免了 ii-1这样的的对比 而且范围更广
// // 字符串和数组是一一对应的
let hashMap = {} // 主要功能查询里面的字段 是否有重复 key是值 value任意值
var lengthOfLongestSubstring = function (s) {
    let length = 0; // 记录📝最长字串的长度
    let curLength = 0 // 当前正在扫描最长字串长度
    const arrStr = s.split("")
    if (s.length === 1) {
        return s.length
    }
    if (!s) {
        return 0
    }
    for (let i = 0; i < arrStr.length; i++) {
        for (let j = i; j < arrStr.length - i; j++) {
            // 在这个hashMap找到重复的
            // 优化
            if (hashMap[arrStr[j]]) {
                if (length < curLength) {
                    length = curLength
                }
                // 重置
                curLength = 0
                hashMap = {}
            } else {
                curLength++
                hashMap[arrStr[j]] = 1
                // 别忘了这一步的赋值操作
                if (j === arrStr.length - i - 1 && curLength > length) {
                    length = curLength
                    hashMap = {}
                    curLength = 0
                }
            }

        }
    }

    return length
};



// console.log(lengthOfLongestSubstring(s))

// 窗口滑落算法
// 我们需要扩大和缩小窗口 向右到方向扩大窗口 窗口左边缩小窗口 所以需要两个变量来跟踪
// 注意是连续的
var lengthOfLongestSubstring = function (s) {
    // 窗口的长度怎么计算right-left
    let left = 0
    let right = 0
    let maxLength = 0 // 最大长度
    const hashMap = {} // key为字符串值 value 随意
    while (right < s.length) {
        if (!hashMap[s[right]]) {
            hashMap[s[right]] = 1 // 值用来比较外来的key是否已在map 存在的话可以拿到为1
            // 不断扩大右边窗口
            right++
        } else {
            // 找到重复的值，此时应该左边缩小窗口，但要缩小后的窗口里面的值不是重复的
            // 如果有，继续缩小，周而复始
            while (left < right) {
                // 不断缩小窗口左边
                delete hashMap[s[left]]
                // 先删除后比较
                if (hashMap[s[left++]] === hashMap[s[right]]) {
                    break;
                }
            }
        }
        // 每一轮循环过后
        // 窗口的长度怎么计算right-left
        maxLength = Math.max(maxLength, right - left)
    }
    return maxLength
}











var s = 'abcda'
var lengthOfLongestSubstring = function (s) {
    let arr = [], max = 0
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        /**
         * 说明重复了
         */
        if (index !== -1) {
            /**
             * index+1 删除个数
             */
            arr.splice(0, index + 1);
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max)
    }
    return max
};

lengthOfLongestSubstring(s)















// 动态规划
// 输入: "abcabcbb" 输出: 3 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
// dp[i]表示以下标为i的字符结尾不包含重复字符的最长子字符串长度
// 状态转移方程 dp[n]=math.Max(dp[n-1],)
// const lengthOfLongestSubstring = (s) => {
//     const dp = new Array()
//     const hashMap = {}
//     dp[0] = 1 // base case
//     let res = 0
//     for (let i = 1; i < s.length; i++) {
//         if (!hashMap[s[i]]) {
//             dp[i] = dp[i - 1] + i
//         } else {
//             // 遇到重复的情况
//             let distance = i - hashMap[s[i]]
//             // 说明重复的元素不影响当前不含重复字符的最大子串长度
//             if (distance > dp[i - 1]) {
//                 dp[i] = dp[i - 1] + i
//             } else {
//                 dp[i] = distance
//             }
//         }
//         hashMap[s[i]] = i // 更新第i个元素最后出现的位置
//     }
//     res = max(res, dp[i])
// }








