function search(nums, target) {
  if (nums == null || nums.length == 0) {
      return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
      mid = Math.floor( (right + left) / 2);
      if (nums[mid] == target) {
          return mid;
      }
      // 前半部分有序,注意此处用小于等于
      if (nums[left] <= nums[mid]) {
          //target在前半部分
          if (target >= nums[left] && target < nums[mid]) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } /* 后段部分有序 */else {
          if (target <= nums[right] && target > nums[mid]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

  }
  return -1;

}


// 明白了
// 我们要找出有序的那部分 根据有序部分去压缩我们的查找范围 因为有序部分查找的效率快 我们可以很快判断是否
// 在有序那块内 没有的话就赶紧去后段部分找

// ! 以mid来划分数组

/**
 * ! 思路：先去有序的数组部分找 这样效率快 直接二分就可以找到 如果找不到 可以帮我们确定了边界
 * ! 二分法的本质就是去限定边界<====(好好理解这句话) 我们可以利用二分法查找有序的部分数组去慢慢把边界限定起来
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left=0
  let right=nums.length-1
  while(left<=right){
    let mid =Math.floor(left+(right-left)/2)
    // 注意target===nums[id]在这里判断了 底下这个条件不能再用了
    if(nums[mid]===target){
      return mid
    }
    // 前半部分有序 用left来判断前后局部数组是否有序
    // !nums[left]<=nums[mid] 判断条件等于是考虑这种情况[3,1] 1 
    if(nums[left]<=nums[mid]){
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
};