/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法的思想
// 1.挨着跳 如果找到比自己大的step 就用大的 比自己的小，还是用原来的step <=== 挨着跳可以做到
var jump = function(nums) {
  let n = nums.length
  let start = 0 // 根据起点start<i<end 这个起跳点范围，我们每次取最大的，然后依次做这样的筛选操作
  let end = 0 // end才是衡量跳的位置  start是用来筛选范围格子内可以跳跃的最远距离
  let maxPos = 0
  let ans=0
  // 终点是n-1 我们的的步数满足n-1就到达目的
  while(end<n-1){
    // 如果某一个作为 起跳点 的格子可以跳跃的距离是 3，那么表示后面 3 个格子都可以作为 起跳点
    // 我们依次去判断起跳点能跳到的最远位置
    // 对每一次 跳跃 用 for 循环来模拟
    for(let i=start;i<=end;i++){
      // 能跳到最远的距离的位置
      // nums[i]+i===>当前位置+可以跳的步数
      maxPos = Math.max(maxPos,nums[i]+i)
    }
    // 为什么是end+1 因为前面的格子已经筛选出最远的跳远距离
    start=end+1  // 下一次起跳点范围开始的格子
    end=maxPos // 下一次起跳点范围结束的格子
    ans++
  }
  return ans
};

// 2 3 1 1 4 
// maxPos= 2 start=1 end=2
// maxPos=4 start=3 end=4