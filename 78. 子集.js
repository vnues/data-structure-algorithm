/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 求子集问题 理解成一棵树 节点树
var subsets = function(nums) {
  let res=[]
  backtrack(nums,0,[])
  return res
  function backtrack(nums,start,track){
    res.push([...track])
    if(start>=nums.length){
      return
    }
    for(let i=start;i<nums.length;i++){
      if(track.includes(nums[i])){
        continue
      }
      track.push(nums[i])
      if(start===nums.length-1){
        console.log(nums[i],i)
        console.log(track)
      }
      // 注意这里从i开始 ====> 子集
      // 不能start+1 因为 这里index为2 此时start+1 0+1 ==>1 应该是从下标2开始
      backtrack(nums,i,track)
      track.pop()
    }
  }
};

const nums = [1,2,3] // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

console.log(subsets(nums))