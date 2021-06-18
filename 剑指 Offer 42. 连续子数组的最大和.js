/**
 * @param {number[]} nums
 * @return {number}
 */
// 注意审题 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和
// 1.连续  这代表着不能这样表达 Math.max(dp[i-1],dp[i-1]+nums[i],nums[i]) Math.max(dp[i-1],dp[i-1]+nums[i],nums[i])这样写代表不连续了
// 设动态规划列表 dp ，dp[i]代表以元素 nums[i] 为结尾的连续子数组最大和 <===请求状态转移方程 这时候的dp[n-1]并不能代表整个数组
// 不能用前i个 因为不需要从0...i  i-1..i也行 单独一个i也行
var maxSubArray = function(nums) {
  const n=nums.length
  const dp=[]
  dp[0]=nums[0]
  let max=-Infinity
  for(let i=1;i<n;i++){
    dp[i]=Math.max(dp[i-1]+nums[i],nums[i])
    max=Math.max(max,dp[i])
  }
  return max
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))