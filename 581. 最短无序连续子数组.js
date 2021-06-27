/**
 * @param {number[]} nums
 * @return {number}
 */
// [2,6,4,8,10,9,15]
// 2 4 6 8 9 10 15
var findUnsortedSubarray = function(nums) {
  const nums2 = [...nums].sort((a,b)=>a-b)
  let i=0
  let start=0
  let j=nums2.length-1;
  let end=0
  while(i<nums2.length){
    if(nums2[i]!==nums[i]){
      start=i
      break
    }
    i++
  }
  while(j>=0){
    if(nums2[j]!==nums[j]){
      end=j
      break
    }
    j--
  }
  return end-start===0?0:end-start+1
};