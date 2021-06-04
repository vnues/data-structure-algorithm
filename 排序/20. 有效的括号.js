/**
 * @param {string} s
 * @return {boolean}
 */
// 匹配或者消除场景 应该想到栈
var isValid = function(s) {
 const stack=[]
 // ([{ 入栈 反向就是出栈
  for(let i=0;i<s.length;i++){
    if(s[i]==='('||s[i]==='{'||s[i]==='['){
      if(s[i]==='('){
        stack.push(')')
      }else if(s[i]==='{'){
        stack.push('}')
      } else{
        stack.push(']')
      }
    } else{
      if(stack[stack.length-1]===s[i]){
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length===0
};

// "([}}])"