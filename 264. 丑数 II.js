/**
 * @param {number} n
 * @return {number}
 */
// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
var nthUglyNumber = function(n) {
  // dp[i]表示第i个 第一个对应数组的i-1下标
  // 为什么需要三指针，确定位置 比较大小后 确定接下来的位置
  const dp = new Array(n).fill(0)
  let p2=0
  let p3=0
  let p5=0
  dp[0]=1
  for(let i=1;i<n;i++){
    const num2 = dp[p2]*2
    const num3 = dp[p3]*3
    const num5 = dp[p5]*5
    dp[i]=Math.min(num2,num3,num5)
    if(dp[i]===num2){
      p2++
    }
    if(dp[i]===num3){
      p3++
    }
    if(dp[i]===num5){
      p5++
    }
  }
  console.log(dp)
  // 第n个
  return dp[n-1]
};

console.log(nthUglyNumber(10))