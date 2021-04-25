/**
 * @param {string} s
 * @return {boolean}
 */
// 规律观察题 看看回文字符串的规律
var canPermutePalindrome = function(s) {
    let hashMap={}
    for(let i=0;i<s.length;i++){
      if(!hashMap[s[i]]){
        hashMap[s[i]]=1
      } else{
        delete hashMap[s[i]]
      }
    }
    // 删除偶数个 留下奇数个
  return Object.keys(hashMap).length<=1
};