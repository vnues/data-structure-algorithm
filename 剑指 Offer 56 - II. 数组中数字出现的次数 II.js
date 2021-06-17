/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let res=0
  nums.sort((a,b)=>a-b)
  console.log(nums)
  // [2, 2,  2, 5,5, 5, 10]
  // 
  for(let i=0;i<nums.length;i++){
    if(nums[i]===nums[i+1]){
        i+=2
        continue
    }
    res=nums[i]
  }
  return res
};

console.log(singleNumber([5,2,2,2,5,5,4]))