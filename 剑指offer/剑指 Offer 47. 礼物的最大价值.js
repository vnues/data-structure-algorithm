/**
 * @param {number[][]} grid
 * @return {number}
 */

// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

var maxValue = function(grid) {
  let m=grid.length
  let n=grid[0].length
  // dp[i][j] 表示起始位置到i,j的最大值为x
  const dp=new Array(m).fill(0).map(()=>new Array(n).fill(0))
  dp[0][0]=grid[0][0]
  // top边界 只能往右
  for(let j=1;j<n;j++){
    dp[0][j]+=dp[0][j-1]+grid[0][j]
  }
  // left边界 只能往下
  for(let i=1;i<m;i++){
    dp[i][0]+=dp[i-1][0]+grid[i][0]
  }
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])+grid[i][j]
    }
  }
  return dp[m-1][n-1]
};


const grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

console.log(maxValue(grid))