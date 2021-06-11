/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 完全背包问题
var change = function(amount, coins) {
  const n=coins.length
  // 定义dp状态转移方程 dp[i][j]=x表示前i个硬币装满容量为j的背包有x种方案 想要得到结果为dp[n][amount]
  const dp=new Array(n+1).fill(0).map(()=>new Array(amount+1).fill(0))
  // base case
  for(let i=0;i<=n;i++){
    dp[i][0]=1 // 没有容量的背包默认有一种解决方案
  }
  for(let i=1;i<=n;i++){
    const num=coins[i-1]
    for(let j=0;j<=amount;j++){
      // 背包没有容量了
      if(j-num<0){
        dp[i][j]=dp[i-1][j]
      } else{
        // 1.如果你不把这第 i 个物品装入背包 dp[i-1][j]
        // 2.如果你把这第 i 个物品装入了背包  dp[i][j-coins[i-1]]
        // dp[i][j-num] 前i个把j-num容量的背包装满
        dp[i][j]=dp[i-1][j]+dp[i][j-num]
      }
    }
  }
  return dp[n][amount]
};

console.log(change(5,[1,2,5]))