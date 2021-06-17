/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 观察发现 可以先水平翻转===>对角线翻转
var rotate = function(matrix) {
  let m = matrix.length
  // 水平翻转
  for(let i=0; i<Math.floor(m/2);i++){
    for(let j=0;j<m;j++){
      [matrix[i][j],matrix[m-i-1][j]]=[matrix[m-i-1][j],matrix[i][j]]
    }
  }
  // 主对角线翻转
  for(let i=0;i<m;i++){
    for(let j=i+1;j<m;j++){
      [matrix[i][j],matrix[j][i]]= [matrix[j][i],matrix[i][j]]
    }
  }
};