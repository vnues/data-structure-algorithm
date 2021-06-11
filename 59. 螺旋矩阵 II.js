// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]

/**
 * @param {number} n
 * @return {number[][]}
 */
// 按照螺旋矩阵遍历 
var generateMatrix = function(n) {
    const arr =new Array(n).fill(0).map(()=>new Array(n).fill(0)) // 生成一个n*n的二维数组
    let top=0
    let left=0
    let right=n-1
    let bottom=n-1
    let count=1
    while(count<=n*n){
      // 从左到右
      for(let i=left;i<=right;i++){
        // arr[0][1] arr[0][2]
        arr[top][i]=count
        count++
      }
      // 从左到右 向下缩减边界
      if(++top>bottom){
        break
      }
      // 从上到下
      for(let i=top;i<=bottom;i++){
        // arr[1][3] arr[2][3]
        arr[i][right]=count
        count++
      }

      // 从上到下 向左缩减边界
      if(--right<left){
        break
      }
      // 从右到左
      for(let i=right;i>=left;i--){
        arr[bottom][i]=count
        count++
      }
      // 从右到左 向上缩小边界
      if(--bottom<top){
        break
      }
      // 从下到上
      for(let i=bottom;i>=top;i--){
        arr[i][left]=count
        count++
      }
      //  从下到上 向右缩小边界
      if(++left>right){
        break;
      }
    }
    return arr
};

console.log(generateMatrix(3))