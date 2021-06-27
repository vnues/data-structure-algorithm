/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
  let res=[]; // 存放答案的数组
  let stack=[];
  let n=nums.length
  // 倒着往栈里放
  for (let i = n*2-1; i >= 0; i--) {
      while (stack.length && stack[stack.length-1] <= nums[i%n]) {
          stack.pop();
      }
      // nums[i] 身后的 next great number
      res[i%n] = !stack.length ? -1 : stack[stack.length-1];
      stack.push(nums[i%n]);
  }
  return res;
};


console.log(nextGreaterElements( [1,2,1])) // [2,-1,2]