/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const dp =[]
  dp[0]=1
  dp[1]=1
  for(let i=2;i<n;i++){
    dp[i]=dp[i-2]+dp[i-1]
  }
  console.log(dp)
  // 返回第n项
  return dp[n-1]
};

console.log(fib(5))