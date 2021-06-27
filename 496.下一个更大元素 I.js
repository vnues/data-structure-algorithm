const nums = [2,1,2,4,3]

// 单调栈的应用框架
// ! for 循环要从后往前扫描元素，因为我们借助的是栈的结构，倒着入栈，其实是正着出栈
// 因为栈这个数据是先进后出 而我们的res数组是从0123下标这样记录 所以我们倒着入栈 出来的顺序就是0123下标对应的结果了
// 另外倒着入栈好做对比 y因为是当前元素跟后面的元素做对比
function nextGreaterElement(nums) {
 let res=[]; // 存放答案的数组
 let stack=[];
  // 倒着往栈里放
  for (let i = nums.length - 1; i >= 0; i--) {
      // 判定个子高矮
      while (!stack.length && stack[stack.length-1] <= nums[i]) {
          // 矮个起开，反正也被挡着了。。。
          // ! 目的是为了看到更高的那个
          stack.pop();
      }
      // nums[i] 身后的 next great number
      res[i] = stack.length ? -1 : stack[stack.length-1];
      stack.push(nums[i]);
  }
  return res;
}

// !给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
// 单个目标问题 变成单个 解答起来就舒服多了
// * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。 <===理解这个题意
const nums1 = [4,1,2]
const nums2 = [1,3,4,2]
function nextGreaterElement(nums1,nums2){
  let stack=[] // 栈的top获取方式 stack[stack.length-1]
  let map={}
  let res=[]
  for(let i=nums2.length-1;i>=0;i--){
      while(stack.length&&stack[stack.length-1]<=nums2[i]){
        stack.pop()
      }
      let value =!stack.length?-1:stack[stack.length-1]
      map[nums2[i]]=value
      stack.push(nums2[i]) // 入栈
  }
  for(let i=0;i<nums1.length;i++){
    res[i]=map[nums1[i]]
  }
  return res
}

console.log(nextGreaterElement(nums1,nums2)) // [ -1, 3, -1 ]

// ! 为什么需要倒着循环 因为是前面的哟啊跟后面的元素对比  栈的顶部top===>stack[stack.length-1]   单调栈 这里规定栈的顶部永远是最大的

// ! 这个单调栈的作用是承担当前元素跟后面元素对比的作用

// 单调递减栈