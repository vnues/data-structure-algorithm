/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 申请题意
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
// 所以是每个数组元素都会参与进去：
// 1.这时候要计算出数组元素的和sum  设neg为-的部分 则+的部分为sum-neg  所以sum-neg-neg=target
// 继而将问题转化为求值neg时，数组中元素有多少种组合
// 通过推导将2个自己问题转化为单个子集问题===>动态规划解决
// 定义二维数组 其中dp[i][j] 表示在数组nums 的前 i 个数中选取元素，使得这些元素之和等于 j 的方案数
// 若当前遍历的元素 nums[i] 不选，则此时满足背包容量 j 的方法数不变，不进行任何操作；
// 若当前遍历的元素 nums[i] 选择
var findTargetSumWays = function(nums, target) {
  let sum=0
  for(let i=0;i<nums.length;i++){
    sum+=nums[i]
  }
  let diff=sum-target
  const n=nums.length
  const neg=diff/2 // diff肯定可以被整除 必定是偶数
  if (diff < 0 || diff % 2 != 0) {
    return 0;
 }
  // 定义二维数组 其中dp[i][j] 表示在数组nums 的前 i 个数中选取元素，使得这些元素之和等于 j 的方案数
  // 前i个对应数组下标 i-1
  const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
  dp[0][0]=1 // 当没有任何元素可以选取时，元素和只能是 0，对应的方案数是 1
  // 数组是 0 <= nums[i] <= 1000 注意是有顺序的
  for(let i=1;i<=n;i++){
    let num=nums[i-1] // 前i个对应数组下标i-1
    for(let j=0;j<=neg;j++){
      // j<num 则不能选 num
      // j>=num 可以选num
      dp[i][j]=dp[i-1][j]
      if(j>=num){
        dp[i][j]+=dp[i-1][j-num]
      }
    }
  }
  // 自底向上
  return dp[n][neg]
};