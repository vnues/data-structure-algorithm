const nums =[2,3,1,1,4]

// 其实就是求最值问题 动态规划解决
var canJump=function(nums){
  let dp=new Array(nums.length).fill(false) // dp[i]=boolean 表示 是否能到i下标
  dp[0] = true // base case
  // 为什么是两层for循环 因为 0....j中 只要有一个方式能到 说明为true 类似选择排序
  // 前一个节点走过了 当前节点
  // 注意是dp[i] 不是dp[j][i] 因为都是从0...j开始的
  // 当前节点i是由 dp[j]&&nums[j]+j>=i 这个决定
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<i;j++){
      //  如果之前的j节点可达
      if(dp[j]&&nums[j]+j>=i){
        dp[i]=true
        break // 为true 找到一种方式就行
      }
    }
  }
  return dp[nums.length-1]
}