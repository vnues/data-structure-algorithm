function BinarySearch(nums,target){
  let left = 0, right = nums.length - 1; 
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1; 
        } else if(nums[mid] == target) {
            // 直接返回
            return mid;
        }
    }
    // 直接返回
    return -1;
}