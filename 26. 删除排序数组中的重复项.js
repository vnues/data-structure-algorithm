/**
 * @param {number[]} nums
 * @return {number} // 返回的是长度
 */
// 审题：注意是已经排序的数组
// 快慢指针法
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
// 返回移除后数组的新长度。
var removeDuplicates = function (nums) {
    let i = 0 // i是慢指针
    for (let j = 0; j < nums.length; j++) {
        // j是快指针
        if (nums[i] !== nums[j]) {
            i++ // 这类使用了i +1后的i了
            nums[i] = nums[j]
        }
    }
    // 返回的是长度
    return i + 1
};