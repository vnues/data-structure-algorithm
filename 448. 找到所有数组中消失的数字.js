/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [4,3,2,7,8,2,3,1]
// [4,3,2,7,8,2,3,1]
// [12,19,18,15,8,2,11,9]
// 1对应数组下标0 对这个下标操作 相当于标识 其他数字如果不存在 那么也就标识不了对应的数组下标
var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  for (const num of nums) {
      const x = (num - 1) % n;
      // console.log(num,nums[x])
      nums[x] += n;
      // console.log(nums[x])
  }
  console.log("nums",nums)
  const ret = [];
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
        ret.push(i + 1);
    }
  }
  return ret;
};

console.log(findDisappearedNumbers(nums))