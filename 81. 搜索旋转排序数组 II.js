// 输入：nums = [2,5,6,0,0,1,2], target = 0
// 输出：true
// 对于有序数组，可以使用二分查找的方法查找元素
// var search = function(nums, target) {
//   const n = nums.length;
//   if (n === 0) {
//       return false;
//   }
//   if (n === 1) {
//       return nums[0] === target;
//   }
//   let l = 0, r = n - 1;
//   while (l <= r) {
//       const mid = Math.floor((l + r) / 2);
//       if (nums[mid] === target) {
//           return true;
//       }
//       if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
//           ++l;
//           --r;
//       } else if (nums[l] <= nums[mid]) {
//           if (nums[l] <= target && target < nums[mid]) {
//               r = mid - 1;
//           } else {
//               l = mid + 1;
//           }
//       } else {
//           if (nums[mid] < target && target <= nums[n - 1]) {
//               l = mid + 1;
//           } else {
//               r = mid - 1;
//           }
//       }
//   }
//   return false;
// }

// [1,0,1,1,1]
// 重复的元素 可能没办法判断那个区间是有序的 所以的排除 缩小区间 排除之前应该判断重复元素是不是该目标元素target
/**
 * @param {number[]} nums
 * @param {number} target
= */
var search = function(nums, target) {
  let left=0
  let right=nums.length-1
  // 将数组一分为二，其中一定有一个是有序的，另一个可能是有序，也能是部分有序。此时有序部分用二分法查找。无序部分再一分为二，其中一个一定有序，另一个可能有序，可能无序。就这样循环
  while(left<=right){
    let mid =Math.floor(left+(right-left)/2)
    if(nums[mid]===target){
      return true
    }
    if(nums[left]===nums[mid]&&nums[right]===nums[mid]){
      left++
      right--
    }
    // 升序从大到小
    // 前半部分有序 如果有序则满足nums[left]<=nums[mid] 不然满足不了 因为我们是从后面某个节点旋转的
    else if(nums[left]<=nums[mid]){
      if(nums[left]<=target&&target<nums[mid]){
        // targte在前半部分有序数组里
        right=mid-1
      } else{
        // 不在有序数组里 没关系 有序数组帮了我们大忙 限定了范围
        left=mid+1
      }
    } else{
      // 有序数组在后半部分
        if(nums[right]>=target&&target>nums[mid]){
          // targte在前半部分有序数组里
          left=mid+1
        } else{
          // 不在有序数组里 没关系 有序数组帮了我们大忙 限定了范围
          right=mid-1
        }
    }
  }
  return false
};