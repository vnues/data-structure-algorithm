/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  // 先拿到s字符串里面有哪些子字符串是回文
  let n = s.length
  // 表示dp[i][j]表示字符i..j是否是回文字符
  const dp = new Array(n).fill(0).map(()=> new Array(n).fill(true))
  for(let i=n-1;i>=0;i--){
    // 每次从2个起步 单个的就不需要了 因为我们已经知道是回文了
    for(let j=i+1;j<n;j++){
      dp[i][j] = s[i]===s[j] && dp[i+1][j-1] // i..i+1...j-1..j
    }
  }
  console.log(dp)
  let ret=[]
  let ans=[]
  function dfs(i){
    if(i===n){
      ret.push([...ans])
      return
    }
    // 这个子序列是回文 那么就按照这样进行分割
    for(let j=i;j<n;j++){
      if(dp[i][j]){
        let str=s.slice(i,j+1)
        ans.push(str)
        dfs(j+1)
        ans.pop()
      }
    }
  }
  dfs(0)
  return ret
}

let s = "aab"

console.log(partition(s))