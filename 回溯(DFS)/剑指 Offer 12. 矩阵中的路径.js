let board = [['a','b']], word = "ba"


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // 二维数组跟树不同 做DFS的时候 有不同的起点
  /**
   * ! 二维数组任意一个元素都可以作为起点
   */
  for(let i=0;i<board.length;i++){
      // 因为是矩阵 board[0]
    for(let j=0;j<board[0].length;j++){
      if(dfs(board,word,i,j,0)){
        return true
      }
    }
  }
  return false

  // DFS 最后一步拿到结果 回溯的时候 上层（栈底）才能拿到值
  function dfs(board,word,i,j,k){
    // 递归的base case
    if(i<0||j<0||i>=board.length||j>=board[0].length||board[i][j]!==word[k]){
      return false
    }
    if(k===word.length-1){
      console.log('k',k)
      return true
    }
    board[i][j] ='' // 标记下已经查找过的
    // !上下左右 每次进去 k+1==>表示 走了多少步
    let res =dfs(board,word,i-1,j,k+1)||dfs(board,word,i+1,j,k+1)||dfs(board,word,i,j-1,k+1)||dfs(board,word,i,j+1,k+1)
    // 撤销
    board[i][j]=word[k]
    return res
  }
};

console.log(exist(board,word))

