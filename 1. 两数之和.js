/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//      for(var i=0;i<nums.length;i++){
//          for(var j=i+1;j<nums.length;j++){
//              if(nums[i]+nums[j]===target){
//                  return [i,j]
//              }
//          }
//      }
// };

// 思考\U0001f914如何降低一维 key value 开辟个空间
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//      for(var i=0;i<nums.length;i++){
//          for(var j=i+1;j<nums.length;j++){
//              if(nums[i]+nums[j]===target){
//                  return [i,j]
//              }
//          }
//      }
// };

// 思考\U0001f914如何降低一维 key value 开辟个空间
// var twoSum = function (nums, target) {
//     var hashMap = {} // key-value  key存值，value下标 我们要的目标值是下标值
//     for (var i = 0; i < nums.length; i++) {
//         var another = target - nums[i] // 快速查询这个数有没有在hashMap里
//         if (another in hashMap) {
//             console.log(hashMap[another])
//             return [hashMap[another], i]
//         } else {
//             hashMap[nums[i]] = i
//         }
//     }
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        /**
         * if(0)
         */
        if (hashMap[target - nums[i]] !== undefined) {
            return [hashMap[target - nums[i]], i]
        }
        hashMap[nums[i]] = i
    }
};