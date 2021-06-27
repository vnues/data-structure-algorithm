// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let n=s.length
  let i=0
  let res=[]
  while(i<n){
    let start=i
    // 获取子字符串
    while(i<n&&s.charAt(i)!==' '){
        i++
    }
    // 注意这个while出来后i指向空格
    // 子字符串反转
    for(let p=start;p<i;p++){
      // 从字符串后面操作
      // 为什么+start 因为p从start开始
      res.push(s.charAt(start+i-1-p))
    }
    // 处理空格情况
    while(i<n&&s.charAt(i)===' '){
        res.push(' ')
        i++
    }
  }
  return res.join('')
};