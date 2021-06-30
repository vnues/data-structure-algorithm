/**
 * @param {string} s
 * @return {number}
 */
//  输入：s = "12"
//  输出：2
//  解释：它可以解码为 "AB"（1 2）或者 "L"（12）。


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
      if (!s) return 0
      let len = s.length;
    // dp[i]=x 表示前I个字符解码的方法数
      let dp =  Array(len + 1).fill(0);
      dp[0] = 1;
      dp[1] = s[0] === '0' ? 0 : 1;
      // 我们求的是方法数（如何做选择 是可以同时存在的） 
      for (let i = 2; i <= len; i++) {
          // 要么一个数
          if (s[i - 1] !== '0') {
              dp[i] += dp[i - 1];
          }
          // 要么两个数
          if (s[i - 2] === '1' || (s[i - 2] === '2' && +s[i - 1] >= 0 && +s[i - 1] <= 6)) {
              dp[i] += dp[i - 2];
          }
      }
      return dp[len];
  };
  

console.log(numDecodings('06'))

