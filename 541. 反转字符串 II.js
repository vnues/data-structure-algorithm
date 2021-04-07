/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 通俗一点说，每隔k个反转k个，末尾不够k个时全部反转；
 var reverseStr = function(s, k) {
    let arr =s.split('')
    let l=0;
    let r=2*k-1
    // 根据l r来决策可以循环的数组范围
    while(l<r){
      let n=l+k-1
      // 根据l n来决策可以反转的数组范围
      while(l<=n){
         let temp=arr[l]
         arr[l]=arr[n]
         arr[n] = temp
         l++
         n--
      }
      l=r+1
      r = l+2*k-1>arr.length-1?s.length-1:l+2*k-1
    }
    return arr.join('')
};

let s="abcdefg",k=2
console.log(reverseStr(s,k)) // "bacdfeg"