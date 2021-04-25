/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 审题：排序好的 
// 解题：如果这样子来判断是很难的 i<target<i+1 这样思考\U0001f914增加了判断难度相当于二维的判断
// 我们把这种判断条件换为 i>=target 就确定唯一了
// 折半去查找会比较快些
// 这是插入 不存在-1的情况
// 注意❗️二分查找是一个不断迭代的过程
var searchInsert = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = 0 // mid是动态变化的
    // 符合这个条件就执行 否则就不执行 while循环应该会用了吧
    while (left <= right) {
        mid = parseInt((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            // 在左边
            right = mid - 1
        } else {
            // 在右边
            left = mid + 1
        }
    }
    return right
};


console.log(a)

let a = new Person()



function Person(){}