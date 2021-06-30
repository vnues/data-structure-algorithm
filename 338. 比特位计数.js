/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const dp=new Array(n+1).fill(0)
  dp[0]=0
  for(let i=1;i<=n;i++){
    dp[i]=dp[i&i-1]+1
  }
  return dp
};