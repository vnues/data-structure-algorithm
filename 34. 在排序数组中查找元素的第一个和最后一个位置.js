/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left=0
  let right=nums.length-1
  let flag=null
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(nums[mid]===target){
      flag=mid
      break

    } else if(nums[mid]>target){
      right=mid-1
    } else {
      left =mid+1
    }
  }
 // while结束后，判断是否找到，没找到直接返回[-1, -1]
    if (flag === null) return [-1, -1];
    // 从flag开始，向两边扩散
    left = right = flag;
    while (nums[left - 1] === target) left--;
    while (nums[right + 1] === target) right++;
    // 最后返回扩散后的索引
    return [left, right];
};
