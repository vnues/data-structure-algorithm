const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];


var minPathSum = function (grid) {
  let dp = new Array(grid.length).fill(0).map(()=>new Array(grid[0].length).fill(0))
  // dp[i][j] 表示从左下角走到i,j的最小路径和
  dp[0][0]=grid[0][0] // base case
  // 二维数组遍历肯定就是双层for循环了
  // 行 i
  for (let i = 0; i < grid.length; i++) {
    // 向下走
    // 向右走
    for (let j = 0; j < grid[0].length; j++) {
      if (i == 0 && j == 0) continue; // 第一步
      // 状态转移方程
      // 一直往下走
      else if (i == 0) dp[i][j] = dp[i][j - 1] + grid[i][j];
      // 一直往右走
      else if (j == 0) dp[i][j] = dp[i - 1][j] + grid[i][j];
      // 左和右都走可能走 比较值
      // ! 注意grid[i-1][j]和dp[i-1][j]的区别
      else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};

console.log(minPathSum(grid))