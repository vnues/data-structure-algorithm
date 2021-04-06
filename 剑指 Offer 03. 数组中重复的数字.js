/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  let map={}
  let repeat=-1
  for(let i=0;i<nums.length;i++){
    console.log(map)
      if(map[nums[i]]===void 0){
          map[nums[i]]=nums[i]
      }else {
        repeat = nums[i]
        break;
      }
  }
  return repeat
};

console.log(findRepeatNumber([0,1,0]))