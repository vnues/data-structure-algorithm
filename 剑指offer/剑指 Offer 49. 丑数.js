
  
  //  1, 2, 3, 4, 5, 6, 8, 9, 10, 12 状态转移方程
  // ! 类似求斐波那契数列 现在是求丑数系列
  function nthUglyNumber(n) {
      let a = 0, b = 0, c = 0; // 保证2 3 5都能覆盖到所有的丑数
      let dp = [];
      dp[0] = 1;
      for(let i = 1; i < n; i++) {
        // ! 状态转移方程
        // 这套方程可以避过重复项 比如 3*2 2*3
          let n2 = dp[a] * 2, n3 = dp[b] * 3, n5 = dp[c] * 5;
          // 排序
          dp[i] = Math.min(Math.min(n2, n3), n5);
          if(dp[i] === n2) a++;
          if(dp[i] === n3) b++;
          if(dp[i] === n5) c++;
      }
      return dp[n - 1]
  }

  /**
 * @param {number} n
 * @return {number}
 */
// 一看就是动态规划的题目
// 类似求斐波那契数列
// 不过这个是求丑数
var nthUglyNumber = function(n) {
   // 声明备忘录 dp
   let dp = []
   dp[0]= 1 // 声明base case
   // 保证2 3 5都能覆盖到所有的丑数
   let a=0
   let b=0
   let c=0
   // 1, 2, 3, 4, 5, 6, 8, 9, 10, 12
   for(let i=1;i<n;i++){
       let n2=dp[a]*2
       let n3=dp[b]*3
       let n5=dp[c]*5
       // ! 状态转移方程
       dp[i] = Math.min(n2,Math.min(n3,n5))
       // 排序
       if(dp[i]===n2) a++;
       if(dp[i]==n3) b++;
       if(dp[i]===n5) c++;
   }
   return dp[n-1] //数组下标从0开始
};
  console.log(nthUglyNumber(10))