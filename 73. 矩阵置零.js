/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m =matrix.length
    let n=matrix[0].length
    for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
        if(matrix[i][j]===0){
          dfs(matrix,i,j)
        }
      }
    }
    // 这一块应该还可以再优化下
    for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
        if(matrix[i][j]==='0'){
          matrix[i][j]=0
        }
      }
    }
    function dfs(matrix,i,j,flag){
       // 递归的baseb case
      if(i>=m||j>=n||i<0||j<0){
        return
      }
      if(matrix[i][j]!==0){
        matrix[i][j]=0 // 置为0
      }
      if(!flag||flag==='left'){
        dfs(matrix,i-1,j,'left')
      }
      if(!flag||flag==='top'){
        dfs(matrix,i,j-1,'top')
      }
      if(!flag||flag==='right'){
        dfs(matrix,i+1,j,'right')
      }
      if(!flag||flag==='bottom'){
        dfs(matrix,i,j+1,'bottom')
      }
    }
};

const matrix=[[1,1,1],[1,0,1],[1,1,1]]

setZeroes(matrix)