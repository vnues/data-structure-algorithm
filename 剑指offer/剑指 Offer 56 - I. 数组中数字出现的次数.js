/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  const res=[]
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length;i++){
    if(nums[i]===nums[i+1]){
        i++
        continue
    }
    res.push(nums[i])
  }
  return res
};

console.log(singleNumbers([4,1,4,6]))