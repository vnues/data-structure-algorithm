// 找出数组中右边比我小的元素===>也可以理解为下一个比我小的元素
// 单调栈 递减性 小数消除大数 单调栈的写法肯定会有while一直弹出栈的特点 while的循环是针对于栈中的元素
const arr=[5, 2] // [1,-1]
function findRightSmall(arr){
  // 使用栈这种数据结构 清楚两点 什么时候入栈 什么时候出栈
  let ans=[] // 存的是下标
  let stack=[] // 存的是下标
  for(let i=0;i<arr.length;i++){
    while(stack.length&&arr[stack[stack.length-1]]>arr[i]){
     // 消除的时候，记录一下被谁消除了
    ans[stack[stack.length-1]] = i
      // 消除时候，值更大的需要从栈中消失
      stack.pop()
    }
    // 剩下的入栈
      stack.push(i)
  }
   // 栈中剩下的元素，由于没有人能消除他们，因此，只能将结果设置为-1。
    while (stack.length) {
        ans[stack[stack.length-1]] = -1
        stack.pop()
      }
      return ans
}

console.log(findRightSmall(arr))