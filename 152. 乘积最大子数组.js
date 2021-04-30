/**
 * @param {number[]} nums
 * @return {number}
 */
// 题意：最大的连续子数组
var maxProduct = function(nums) {
  let maxF = nums[0], minF = nums[0], ans = nums[0]
  for(let i=1;i<nums.length;i++){
    // 得考虑负数的情况
    maxF = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
    // 考虑负数情况 我们要算出最小值 因为最小值* 负数 可能就是变为最大值
    // 这里的minF表达式就是为了解决负数情况的
    minF = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
    ans = Math.max(maxF, ans);
  }
  return ans
};

const nums=[-2,3,-4]

console.log(maxProduct(nums))