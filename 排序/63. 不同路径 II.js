/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// DFS 会超时
var uniquePathsWithObstacles = function(obstacleGrid) {
  let count=0
  dfs(obstacleGrid,0,0,[])

  return count
  function dfs(obstacleGrid,i,j,track){
    // 递归的base case
    // res有长度 找到一个就行 后面不继续找
    if(i>=obstacleGrid.length||j>=obstacleGrid[0].length){
      return
    }
    if(obstacleGrid[i][j]===0){
      // 已经走过了并且走不通标记一下 进行剪枝
      if(i+1<obstacleGrid.length-1&&j+1<obstacleGrid[0].length-1&&obstacleGrid[i+1][j]===1&&obstacleGrid[i][j+1]===1){
        obstacleGrid[i][j]=2 
      }
       // 走到终点了
        if(i===obstacleGrid.length-1&&j===obstacleGrid[0].length-1){
          count++
          return
        }
      // 向右
      dfs(obstacleGrid,i,j+1)
      // 向下
      dfs(obstacleGrid,i+1,j)
    }
  }
};


// 不用管具体走的路径 只要求多少种 可以认为是最值问题 用动态规划可以解决
// f(m, n) = f(m - 1, n) + f(m, n - 1) ===> 递归公式是 dp(i,j)=dp(i-1,j)+dp(i,j-1) // i,j表示终点 
// 状态转移方程 dp[i][j]=x表示dp[i][j] 表示走到格子 (i, j) 的方法数

var uniquePathsWithObstacles = function(obstacleGrid) {
  let n=obstacleGrid.length
  let m=obstacleGrid[0].length
   // 目的 求dp[n-1][m-1]
  // 定义dp table
  const dp=new Array(n).fill(0).map(()=>new Array(m).fill(0))
  // 定义base case
  // 只能往上或者往左 对应题目的往下或者往右 因为我们是从目标为起点的
  // 第 1 列的格子只有从其上边格子走过去这一种走法，因此初始化 dp[i][0] 值为 1，存在障碍物时为 0；
  // i<n && obstacleGrid[i][0] == 0; 其中一个不满足就停止循环了 这时候就有点路径的味道了
  for(let i=0;i<n && obstacleGrid[i][0] == 0;i++){
    dp[i][0]=1
  }
 // 第 1 行的格子只有从其左边格子走过去这一种走法，因此初始化 dp[0][j] 值为 1，存在障碍物时为 0。
  for(let j=0;j<m && obstacleGrid[0][j] == 0;j++){
    dp[0][j]=1
  }

  for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
      if(obstacleGrid[i][j]===0){
        dp[i][j]=dp[i-1][j]+dp[i][j-1]
      }
    }
  }
  return dp[n-1][m-1]
}