/**
 * @param {number} num
 * @return {number}
 */
// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
var translateNum = function(num) {
  const str =num.toString()
  const n = num.length
  // dp[i]=x 表示前i个数的方法数为x
  const dp = []
  dp[0]=1
  dp[1]=1
  for(let i=2;i<=n;i++){
    const temp =Number( str[i - 2])+ Number(str[i - 1])
    if(temp>=10&&temp<=25){
      dp[i]=dp[i-1]+dp[i-2]
    } else{
      dp[i]=dp[i-1]
    }
  }
  return dp[n]
};