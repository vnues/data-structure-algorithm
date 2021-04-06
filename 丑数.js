/**
 * @param {number} n
 * @return {boolean}
 */
let res = []
var isUgly = function(n) {
  // base case 
  if(n===0){
      return false
  }
  if(n===1){
        return true
  }
  // 取模
  if(n%2===0){
      n=n/2
      res.push(2)
      return isUgly(n)
  }
  if(n%3===0){
      n=n/3
      return isUgly(n)
  }
  if(n%5===0){
      n=n/5
      return isUgly(n)
  }
  return false
};
console.log(isUgly(6))