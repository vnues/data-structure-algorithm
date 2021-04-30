/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序一下子就看得出答案了
var majorityElement = function(nums) {
  nums.sort((a,b)=>a-b)
  let max=1
  let count=1
  let res=nums[0]
  for(let i=1;i<nums.length;i++){
    if(nums[i-1]===nums[i]){
      count++
    } else {
      count=1
    }
    if(max<count){
      res=nums[i]
      max=count
    }
  }
  return res
};

const nums=[2,2,1,1,1,2,2,8,8,8,8,8,8,8,8,8]

console.log(majorityElement(nums))