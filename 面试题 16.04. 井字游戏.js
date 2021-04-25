/**
 * @param {string[]} board
 * @return {string}
 */
// 求和运算
// 注意是N*N的棋盘
var tictactoe = function(board) {
  let len = board.length
  let sum_row =''
  let sum_col=''
  let sum_dia_left=''
  let sum_dia_right=''
  let isFull=1
  let sumX = 'X'.repeat(len)
  let sumO = 'O'.repeat(len)
  console.log(sumX,sumO)
  for(let i=0;i<len;i++){
    sum_row=''
    sum_col=''
    // 当前行或者当前列
    for(let j=0;j<len;j++){
      sum_row +=board[i][j] // 行
      sum_col +=board[j][i] // 列
      if(board[i][j]===' '){
         // 只要存在空格就标记
        // 存在有空格 玩家获胜的情况
        isFull=0 
      }
    }
    console.log(sum_row,sum_col)
    if(sum_row===sumX||sum_col===sumX){
      return 'X'
    }
    if(sum_row===sumO||sum_col===sumO){
      return 'O'
    }
    // 对角线
    sum_dia_left +=board[i][i]
    sum_dia_right +=board[i][len-1-i]
  }
  if(sum_dia_left===sumX||sum_dia_right===sumX){
    return 'X'
  }
  if(sum_dia_left===sumO||sum_dia_right===sumO){
    return 'O'
  }
  if(isFull){
    return 'Draw'
  } else {
    return 'Pending'
  }
};


const  board = ["OX ","OX ","O  "]

console.log(tictactoe(board))