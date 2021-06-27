/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let len1=num1.length
  let len2=num2.length
  const pos = new Array(len1+len2).fill(0)
  // 为什么是两层for循环 因为 456*3 每个数都要跟3乘一遍
  for(let i=len1-1;i>=0;i--){
    let n1=+num1[i]
    for(let j=len2-1;j>=0;j--){
      let n2=+num2[j]
      // len1+len2 =len1-1+len2-1+1
      let sum = pos[i+j+1]+n1*n2
      pos[i+j+1]=sum%10 // 取模的值
      // pos[i+j]相当于进一 就是carry
      pos[i+j]+=sum/10|0
    }
  }
  while(pos[0]====0){
    pos.shift()
  }
  return pos.length ? pos.join('') : '0';
};