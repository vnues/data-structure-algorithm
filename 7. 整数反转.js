/**
 * @param {number} x
 * @return {number}
 */
// 思路将数字==>数组 压入栈
// 复杂度O(n)
// var reverse = function(x) {
//    let xStr = x+""
//    let arr= xStr.split("").reverse()
//    for(let i=0;i<arr.length;i++){
//       if(arr[i]==='-'){
//           arr.pop()
//           arr.unshift('-')
//       }
//    }
//    const num =Number(arr.join(""))
//    if(num>Math.pow(2,31)-1||num<Math.pow(-2,31)){
//        return 0
//    }
//    return num
// };

// 用 % / 运算来代替栈 pop 操作
var reverse = function (x) {
    let pop = 0
    let rev = 0
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31)
    while (x !== 0) {
        pop = x % 10 // 取个位数（末尾数）
        // 个位数向左进一步
        //  舍弃后面的小数点
        // ~~ 去除小数点
        //x=Math.floor(x/10) 
        x = ~~(x / 10)
        // 注意不能用向下取整去去除小数点 那相当于无限大下去 或者无限小
        // Math.pow(2,31)-1就栈溢出 所以应该先/10 不让这种大的数字出现
        // 感觉这里的计算实际是溢出的了 因为已经先计算出来的
        // 前期先这样处理吧
        if (rev >= (max - pop) / 10 || rev <= (min - pop) / 10) {
            rev = 0
            break;
        }
        rev = rev * 10 + pop
    }
    return rev
}