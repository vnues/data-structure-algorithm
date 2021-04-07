// result = []
// function backtrack(路径, 选择列表):
//     if 满足结束条件:
//         result.add(路径)
//         return

//     for 选择 in 选择列表:
//         做选择
//         backtrack(路径, 选择列表)
//         撤销选择

// 1、路径：也就是已经做出的选择。
// 2、选择列表：也就是你当前可以做的选择。
// 3、结束条件：也就是到达决策树底层，无法再做选择的条件。
// 递归 自顶向上的看问题


// 现在可以解答开头的几个名词：
// [2] 就是「路径」，记录你已经做过的选择；
// [1,3] 就是「选择列表」，表示你当前可以做出的选择；
// 「结束条件」就是遍历到树的底层，在这里就是选择列表为空的时候。


let res = []

function permute(nums) {
  let track = [] //  记录「路径」
  backtrack(nums, track)
  return res
}
// 路径：记录在 track 中
// 选择列表：nums 中不存在于 track 的那些元素
// 结束条件：nums 中的元素全都在 track 中出现
function backtrack(nums, track) {
  // 触发结束条件 结束条件：也就是到达决策树底层，无法再做选择的条件。
  if (track.length === nums.length) {
    res.push([...track]) // 注意地址引用
    return
  }
  // for 选择 in 选择列表:
  for (let i = 0; i < nums.length; i++) {
    if (track.includes(nums[i])) {
      continue // 跳过这次循环
    }
    // 做选择
    track.push(nums[i]);
    // 进入下一层决策树
    backtrack(nums, track);
    // 取消选择 进行下一轮循环
    track.pop()
  }
}

permute([1,2,3])
console.log(res)

// 解决一个回溯问题，实际上就是一个决策树的遍历过程