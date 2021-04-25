/**
 * @param {number} x
 * @return {boolean}
 */
// 做题先看上面的函数要求条件\U0001f446
var isPalindrome = function (x) {
    let arr = (x + "").split("").reverse()
    let reverseX = Number(arr.join(""))
    if (x === reverseX) {
        return true
    }
    return false
};