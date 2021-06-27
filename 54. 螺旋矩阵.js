/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length){return []}
    let top=0
    let left=0
    let right=matrix[0].length-1
    let bottom=matrix.length-1
    let res=[]
    let x=0
    while(true){
        // 在对应方向移动i步
        // 从左到右 →
        for(let i=left;i<=right;i++){
            res[x++]=matrix[top][i]
        }
       // 从左到右 向下缩小边界
        if(++top>bottom){
            break;
        }
        // 从上到下 ⏬
        for(let i=top;i<=bottom;i++){
            res[x++]=matrix[i][right]
        }
        // 从上到下 向右缩小边界
        if(--right<left){
            break;
        }
        // 从右到左 ◀️
        for(let i=right;i>=left;i--){
            res[x++]=matrix[bottom][i]
        }
        // 从右到左 向上缩小边界
        if(--bottom<top){
            break;
        }
        // 从下向上 🔼
        for(let i=bottom;i>=top;i--){
            res[x++]=matrix[i][left]
        }
        // 从下向上  向右缩小边界
        if(++left>right){
            break;
        }
    }
};