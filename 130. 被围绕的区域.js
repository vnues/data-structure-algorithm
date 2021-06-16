/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 const solve = (board) => {
    const m = board.length;
    if (m == 0) return;         // [] 情况的特判
    const n = board[0].length;
    const dfs = (i, j) => {
      if (i < 0 || i == m || j < 0 || j == n) return; // 越界了
      if (board[i][j] == 'O') { // 遇到O，染为NO      
        board[i][j] = 'NO';                    
        dfs(i + 1, j);          // 对四个方向的邻居进行dfs
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
      }
    };
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          // 换个思路 我们找到边界上的O然后找到其相连的 这样问题就简单很多了
        if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
          if (board[i][j] == 'O') dfs(i, j); // 从最外层的O，开始DFS
        }
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 'NO') board[i][j] = 'O';     // 恢复为O
        else if (board[i][j] === 'O') board[i][j] = 'X'; // O变为X
      }
    }
  };

solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])