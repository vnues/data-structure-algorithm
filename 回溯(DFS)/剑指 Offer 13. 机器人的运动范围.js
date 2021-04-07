/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
//  法一：深度优先遍历 DFS
//  深度优先搜索： 可以理解为暴力法模拟机器人在矩阵中的所有路径。DFS 通过递归，先朝一个方向搜到底，再回溯至上个节点，沿另一个方向搜索，以此类推。
//  剪枝： 在搜索中，遇到数位和超出目标值、此元素已访问，则应立即返回，称之为 可行性剪枝 
 
var movingCount = function(m, n, k) {
  // 记忆表
  let step={} // 记录已经走过的宫格
  let num=0
  dfs(0,0,k) // 矩阵通过m,n即可获取坐标 不需要生成实际的数组 这是明白问题的第一步
  return num
  function dfs(i,j,k){
    // 递归的base case
    if(i<0||j<0||i>=n||j>=m){
      return
    }
    // 主要防止这种情况 0==> 1  1===>0 就会触发死循环
    // 所以DFS应该注意这种情况===>剪枝
    // 1.构建目标 树还是数组 坐标轴
    // 2.创建dfs函数 判断base case
    // 3.根据题目选择起点 开始进行DFS
    // 4.剪枝 避免死循环或者性能优化
    if(!step[`${i}|${j}`]&&canMove(i,j,k)){
      // ! 判断此格子走没走过，如果走过则剪枝return
        step[`${i}|${j}`]=true
        num++
        dfs(i,j-1,k)
        dfs(i,j+1,k)
        dfs(i-1,j,k)
        dfs(i+1,j,k)
    }
  }
  
  // 是否可以移动
  function canMove(i,j,k){
    let vali = i.toString().split('').reduce((a,b)=>{return Number(a) + Number(b)})
    let valj = j.toString().split('').reduce((a,b)=>{return Number(a) + Number(b)})
    // ! 因为我们是记录格子的 所以是<=K
    if((Number(vali) + Number(valj)) <= k) return true
    return false
  }
};

let m = 2, n = 3, k = 1

console.log(movingCount(m,n,k))