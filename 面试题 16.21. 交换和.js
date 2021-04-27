/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
/**
 * 思路 算出左右两边的和 然后相加/2 再双指针找到  
 */
var findSwapValues = function(array1, array2) {
  // array1.sort((a,b)=>a-b)
  // array2.sort((a,b)=>a-b)
  // [ 1, 1, 1, 2, 2, 4 ] [ 3, 3, 3, 6 ]
  let sum1 =array1.reduce((acc,num)=>acc+num) 
  console.log(sum1) // 11
  let sum2 =array2.reduce((acc,num)=>acc+num) 
  let divot = (sum1+sum2)/2 // 必定可以整除
  console.log(divot)// 13
  if(!Number.isInteger(divot)){
    return []
  }
  let n=divot-sum1
  for(let i=0;i<array1.length;i++){
    // ! 这块可以用双指针优化一层复杂度  前提是要排好序
    if(array2.indexOf(array1[i]+n)>-1){
      return [array1[i],array1[i]+n]
    }
  }
  return []

};

let array1 = [4, 1, 2, 1, 1, 2]
let array2 = [3, 6, 3, 3]

console.log(findSwapValues(array1, array2))
