/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 var permuteUnique = function(nums) {
   // 存的是下标
  let set =new Set() // set是为了防止当前元素进入下一颗决策树 还要解决重复元素走相同的分支
  let res=[]
  nums.sort((a,b)=>a-b) // 排序
  // ! 这是排列组合 不是求和元素 所以元素相同但是顺序不同的组合还是不相等的
  backtrack(nums,[])
  return res
  function backtrack(nums,track){
    if(track.length===nums.length){
      console.log(track)
        res.push([...track])
    }
    // 列表
    for(let i=0;i<nums.length;i++){
      // 同层相等的 已经走过了就不走了
      // !set.has(i-1) 证明不是从这个分支i-1出发的
      // ! nums[i]===nums[i-1]因为会影响到第二层
      if(set.has(i)||(i>0&&nums[i]===nums[i-1]&&!set.has(i-1))){
        continue
      }
      set.add(i)
      track.push(nums[i])
      // 递归进入决策树
      backtrack(nums,track)
      // 撤销
      track.pop()
      set.delete(i)
    }
  }
};


const nums = [1,1,2,3]

console.log(permuteUnique(nums)) // 排列组合 长度肯定是跟原数组长度一样