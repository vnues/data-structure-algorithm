// 如果想按照其他标准进行排序，就需要提供比较函数 这道题就是想考察这个
var largestNumber = function(nums) {
  nums.sort((x, y) => {
      let sx = 10, sy = 10;
      while (sx <= x) {
          sx *= 10;
      }
      while (sy <= y) {
          sy *= 10;
      }
      // xy拼接 需要在高位的基础上*10 才能相加 2 10 2*10*10 +10 
      console.log(' (sx * y + x)', (sx * y + x))
      console.log("('' + (sy * x + y))",('' + (sy * x + y)))
      return  (sx * y + x) - ( (sy * x + y));
  })
  // 边界处理
  if (nums[0] === 0) {
      return '0';
  }
  console.log(nums)
  return nums.join('');
}

largestNumber([3,30,34,5,9]) // 9, 5, 34, 3, 30