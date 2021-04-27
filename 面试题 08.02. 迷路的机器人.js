/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function(obstacleGrid) {
  let res = []
  dfs(obstacleGrid,0,0,[])

  return res.length?res[0]:[]
  function dfs(obstacleGrid,i,j,track){
    // 递归的base case
    // res有长度 找到一个就行 后面不继续找
    if(i>=obstacleGrid.length||j>=obstacleGrid[0].length&&res.length){
      return
    }
    if(obstacleGrid[i][j]===0){
      track.push([i,j])
      obstacleGrid[i][j]=2 // 已经走过了标记一下 进行剪枝
       // 走到终点了
        if(i===obstacleGrid.length-1&&j===obstacleGrid[0].length-1){
          console.log([...track])
          res.push([...track])
          // 撤销
          track.pop()
          return
        }
      // 向右
      dfs(obstacleGrid,i,j+1,track)
      // 向下
      dfs(obstacleGrid,i+1,j,track)
      // 撤销
      track.pop()
    }
  }
};

const array1=[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
pathWithObstacles(array1) // [[0,0],[0,1],[0,2],[1,2],[2,2]]