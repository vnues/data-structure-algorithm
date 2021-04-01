function twoSum(nums,target){
  // 先进行排序
  nums.sort(function(a,b){return a-b})
  let lo=0
  let hi=nums.length-1
  while(lo<hi){
    let sum = nums[lo]+nums[hi]
    if(sum<target){
      lo++
    } else if (sum>target) {
      hi--;
    } else if(sum===target){
      return {[lo]:nums[lo],[hi]:nums[hi]}
    }
  }
  return {}
}

const nums = [1,3,5,6]

const target = 9

console.log(twoSum(nums,9))