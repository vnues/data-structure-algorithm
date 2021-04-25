/**
 * @param {string} s
 * @return {number}
 */
// 用hashMap 映射 也就是key-value
// 好处可以拿到罗马数字对应的10进制值 也可以比较优先级
// s类型注解可以得到是string类型
// 时间复杂度 O(n)
// hashMap 查找特别快 
const romanToInt = function (s) {
    const hashMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const arr = s.split("")
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            res = res + hashMap[arr[i]]
        } else {
            // 左边的优先级小于右边的
            if (hashMap[arr[i - 1]] < hashMap[arr[i]]) {
                res = hashMap[arr[i]] + res - 2 * hashMap[arr[i - 1]]
            } else {
                res = res + hashMap[arr[i]]
            }
        }
    }
    return res
};