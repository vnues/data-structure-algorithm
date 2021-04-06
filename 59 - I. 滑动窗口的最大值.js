// 标签：单调队列
// 整体思路：

// 从题目上来看是通过维护滑动窗口，然后每次求滑动窗口中的最大值即可，设数组长度为 n，窗口长度为 k，则时间复杂度为 O(k∗(n−k+1))=O(kn)O(k*(n-k+1)) = O(kn)O(k∗(n−k+1))=O(kn)
// 很显然使用暴力解法的话，时间复杂度会随着 k 变大不断变大，而其中有很多元素在不同的滑动窗口中都存在着，所以必然存在重复计算的逻辑
// 考虑使用单调队列，队列内只存在窗口内的元素，队列内元素递减。可以保证所有的数据只会入队和出队一次，减少时间复杂度


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//  算法流程：
//  初始化： 双端队列 dequedeque ，结果列表 resres ，数组长度 nn ；
//  滑动窗口： 左边界范围 i \in [1 - k, n - k]i∈[1−k,n−k] ，右边界范围 j \in [0, n - 1]j∈[0,n−1] ；
//  若 i > 0i>0 且 队首元素 deque[0]deque[0] == 被删除元素 nums[i - 1]nums[i−1] ：则队首元素出队；
//  删除 dequedeque 内所有 < nums[j]<nums[j] 的元素，以保持 dequedeque 递减；
//  将 nums[j]nums[j] 添加至 dequedeque 尾部；
//  若已形成窗口（即 i \geq 0i≥0 ）：将窗口最大值（即队首元素 deque[0]deque[0] ）添加至列表 resres ；
 
// ! 使用单调队列的原因就是为了获取最大值
 var maxSlidingWindow = function(nums, k) {
  if(nums.length == 0 || k == 0) {
      return [];
  }
  let queue = []; // 单调队列
  let res = [];
  // step 为 2 left++ right++ 窗口以step为1的步长向右移动
  // 为啥是1-k ===> 先把窗口的前 k - 1 填满
  for(let right = 0, left = 1 - k; right < nums.length; left++, right++) {
      if(left > 0 && queue[0] == nums[left - 1]) {
          queue.shift(); // 删除queue头部  先进先出
      }
      while(queue.length != 0 && queue[queue.length - 1] < nums[right]) {
          queue.pop(); // 比nums[right]小 所有的元素出列  保持单调递减性 当然 比queue[queue.length - 1]小的可以进来
      }
      queue.push(nums[right]);
      if(left >= 0) {
          res[left] = queue[0]; // 每走一步都会形成一个窗口 不是三步 k=3的情况
      }
  }
  return res;
};

// 我们这里用的是双端队列 用单调栈是替代不了的   因为我们要在两端操作 shift pop  而栈是一端   
// 比如队首小的数是push进去  如果是栈？ 显然操作不了
// 注意我们是用数组模拟队列或者栈 所以还是遵守数据结构的特点的
