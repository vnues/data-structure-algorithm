/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // 先排序 是为了方便后面的剪枝
  nums.sort((a,b)=>a-b)
  let res = [];
  let set=new Set()
  backtrack(nums, 0, []);
  return res
  function backtrack(nums, start, track) {
    res.push([...track]);
    if (start >= nums.length) {
      return;
    }
    for (let i = start; i < nums.length; i++) {
      // 剪枝 什么情况进行剪枝 就是这种情况==> !set.has(i-1)
      // 看看回溯的路径 再判断进行剪枝 ===> 1 2 2    用ABC代表  A==>B==>C  然后走完 再来走 A==>C C 此时与B一样 相当于走过了 所以要进行剪枝
      // 我们咋知道B走过了没 通过这个!set.has(i-1)判断 因为走完后 set会进行一个撤销操作
      if(i>=1&&nums[i]===nums[i-1]&&!set.has(i-1)){
        continue
      }
      if (set.has(i)) {
        continue;
      }
      set.add(i)
      track.push(nums[i]);
      // 注意这里从i开始 ====> 子集
      backtrack(nums, i, track);
      // 撤销选择
      track.pop(); // 共用一个track 所以需要撤销操作
      set.delete(i)
    }
  }
};

const nums = [1, 2, 2]; //[[],[1],[1,2],[1,2,2],[2],[2,2]]

console.log(subsetsWithDup(nums));
