/**
 * @param {string} s
 * @return {boolean}
 */
// 给定一个只(注意只包括这些)包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 用到hashMap
// 考虑这种情况 "{[]}"
// const hashMap={
//     "(":1,
//     ")":1,
//     "{":2,
//     "}":2,
//     "[":3,
//     "]":3
// }
// var isValid = function(s) {
//     // step是2
//     let step=2
//     for(let i=0;i<Math.ceil(s.length/2);i=i+step){
//         if(hashMap[s[i]]!==hashMap[s[i+1]]){
//              return false
//         }
//     }

//     return true
// };
// s必定是偶数
// const hashMap={
//     "(":1,
//     ")":2,
//     "{":3,
//     "}":4,
//     "[":5,
//     "]":6
// }
// var isValid = function(s){
//     let left=''
//     let right=''
//     // 奇数
//     if(!s.length%2){
//         return false
//     }
//    for(let i=0;i<s.length/2;i++){
//          left+=s[i]
//    }
//    for(let i=s.length/2;i<s.length;i++){
//          if (hashMap[[s[i]]]===1){
//              right+=")"
//          }else if(hashMap[[s[i]]]===2){
//               right+="("
//          }else if(hashMap[s[i]]===3){
//              right+="}"
//          }else if(hashMap[s[i]]===4){
//              right+="{"
//          }else if(hashMap[s[i]]===5){
//              right+="]"
//          }else if(hashMap[s[i]]===6){
//              right+="["
//          }
//    }
//    if(left===right){
//        return true
//    }
//    return false
// }

// 刷leetcode之前最重要的就是审题 
// 有效字符 我们必定是左开头括号 右括号结尾
// }}{{ 这种是无效的
// 可以利用栈 遇到左括号就push右括号 最好跟我们上面的错误的解法二类似 左边转化为右边 再进行比较
// 与上面解法二不同的是 只有左括号才会转换 这才是解题的关键

class Stack {
    constructor() {
        this.arr = new Array() // 用数组实现一个栈
        this.top = -1 // 所以坚持认为初始化为-1 不应该为0 0代表栈底而不是出界
    }
    push(el) {
        if (this.isFull()) {
            console.log("栈满~~")
            return
        }
        this.top++
        this.arr[this.top] = el
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("栈空~~")
        }
        const value = this.arr[this.top]
        this.top--
        return value
    }
    // 返回当前栈顶
    peek() {
        return this.arr[this.top]
    }
    clear() {
        this.top = -1
    }
    getLength() {
        if (this.top < 0) {
            return 0
        }
        return this.top + 1
    }
    isFull() {
        return this.top === this.maxSize - 1
    }
    isEmpty() {
        return this.top === -1
    }
    toString() {
        if (this.isEmpty()) {
            throw new Error("栈为空");
        }
        for (let i = top; i >= 0; i--) {
            console.log(`stack[${i}]`, i, this.arr[i])
        }
    }
}
var isValid = function (s) {
    if (!s.length) {
        return true
    }
    const stack = new Stack()
    // 我们的做法 遇到左括号push 右括号pop出来
    // ❗️凡是遇到这种运算符问题的 考虑栈就对了
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(")")
        } else if (s[i] === "{") {
            stack.push("}")
        } else if (s[i] === '[') {
            stack.push(']')
            // 压根就没有左括号情况 栈就为空 直接return false
        } else if (stack.isEmpty() || s[i] !== stack.pop()) {
            return false
        }
    }
    // 优化写法
    return stack.isEmpty()
}