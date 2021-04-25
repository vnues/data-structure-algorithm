function twoSumTarget(nums,start,target){
  let lo=start
  let hi=nums.length-1
  let res = []
  while(lo<hi){
    let sum = nums[lo]+nums[hi]
    let left = nums[lo]
    let right  = nums[hi]
    if(sum<target){
      lo++;
      // while (lo < hi && nums[lo] == left) lo++;
    } else if (sum>target) {
      hi--;
      // while (lo < hi && nums[hi] == right) hi--;
    } else if(sum===target){
      res.push([nums[lo],nums[hi]])
      // 跳过所有重复的元素
      lo++;
      hi--;
      // while (lo < hi && nums[lo] == left) lo++;
      // while (lo < hi && nums[hi] == right) hi--;
    }
  }
  return res
}


function threeSum(nums,target){
   // 先进行排序
  nums.sort(function(a,b){return a-b}) // 从小到大
  console.log(nums)
  let res = []
    for(let i=0;i<nums.length;i++){
      // console.log(target-nums[i])
      let tuples = twoSumTarget(nums,i+1,target-nums[i])
      // console.log(tuple)
      for(let j=0;j<tuples.length;j++){
        res.push([...tuples[j],nums[i]])
      }
      // 去重
      while(i<nums.length-1&&nums[i]===nums[i+1]){i++}
    }
    return res
}

let nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums,0))