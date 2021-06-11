// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = []
  backtrack(n,k,[],1)
  return res
  function backtrack(n,k,track,start){
    if(track.length===k){
      res.push([...track])
      return
    }
    for(let i=start;i<=n;i++){
      // 做选择
      if (track.includes(i)){continue}
      track.push(i)
      // 进入下一层决策树
      backtrack(n,k,track,i)
      // 撤销
      track.pop()
    }
  }
};

const n = 4
const k = 2

console.log(combine(4,2))
