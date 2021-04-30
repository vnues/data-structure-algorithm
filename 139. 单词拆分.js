/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 该题转化为最值问题==>DP
var wordBreak = function(s, wordDict) {
  // 我们定义dp[i] 表示字符串s前i个字符组成的字符串 s[0..i-1] 是否能被空格拆分成若干个字典中出现的单词
  // dp[i]=bool
  let n=s.length
  let wordDictSet = new Set(wordDict)
  // 声明 dp Table
  let dp=new Array(n+1).fill(false)
  dp[0]=true
  // 两层for循环是因为:dp[i]表示字符串s前个字符组成的字符串 s[0..i-1]是否能被空格拆分成若干个字典中出现的单词
  // 在这串字符串中找到满足一个条件的就行了
  for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
      // 只要满足一个 为true就好
      // 注意题意 连续  我们可以拼凑起来
      if(dp[j]&&wordDictSet.has(s.substr(j,i-j))){
        dp[i]=true
      }
    }
  }
  return dp[n] // 前n个字符就是 0...n-1
};

let s = "leetcode", wordDict = ["leet", "code"]

console.log(wordBreak(s, wordDict))