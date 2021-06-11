/**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
 var addBinary = function(a, b) {
  let res = '';
  let c = 0;
  a = a.split('');
  b = b.split('');
  console.log(a,b) // [ '1', '1' ] [ '1' ]
  while(a.length||b.length||c){
    // 二进制就是逢二进1
     // console.log('c',c)
     // ~~true 1
     // true+1 =2 false+1=1
      c += ~~a.pop() + ~~b.pop();
      // c%2 要么是0要么是1 二进制展示也是hey的
      res = c%2+res; // 要么是1res 要么是0res
      c = c>1
      console.log('c',c)
  }
  return res
};
console.log(addBinary("11","1"))//100
// console.log(addBinary("1010","1011"))//10101 