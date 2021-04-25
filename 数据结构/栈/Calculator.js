// 使用栈完成计算一个表达式的结果
// 中缀表达式 数字永远在最后一位
// 7*2*2-5+1-5+3-4?
/*
解题思路:
1.通过一个index值（索引）,来遍历我们的表达式
2.如果发现是一个数字，就直接入栈
3.如果扫描到是一个符号，就分如下情况
3.1如果发现当前符号栈为空，就直接入栈
3.2如果符号栈有操作符，就进行比较，如果当前的操作符的优先级小于或者等于栈中的操作符，就需要从数栈中pop出两个数，再从符号栈中pop出一个符号
然后将得到的结果入数栈，然后将当前的操作符入符号栈，如果当前的操作优先级大于栈顶的操作符，直接入符号栈
4.当表达式扫描完毕，就顺序的从数栈和符号栈pop出相应的数和符号，并运行
5.最后在数栈只有一个数字，就是表达式的结果
*/
// 验证3+2*6-2 

class Stack {
    constructor(maxSize) {
        // 统一写在这里
        this.maxSize = maxSize
        this.arr = new Array(this.maxSize) // 用数组实现一个栈
        this.top = -1
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
    peek() {
        // 返回当前栈顶
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
    // 数字越大 优先级越高
    priority(oper) {
        if (oper === '*' || oper === '/') {
            return 1
        } else if (oper === '+' || oper === '-') {
            return 0
        } else {
            return -1 // 假定目前的表达式只有'* / + -'
        }
    }
    isOper(val) {
        // 假定目前的表达式只有'* / + -'
        return val === '+' || val === "-" || val === '*' || val === '/'
    }
    cal(num1, num2) {
        let res = 0
        switch (oper) {
            case '+':
                res = num1 + num2
                break
            case '-':
                res = num2 - num1
                break
            case '*':
                res = num1 * num2
                break
            case '/':
                res = num2 / num1
                break
            default:
                break
        }
        return res
    }
}
// 这个算法还是有点问题的 复杂计算做不了
// 中缀计算器
const expression = '5-2*3+1' // 0    
const numStack = new Stack(100) // 创建一个数栈
const operStack = new Stack(100) // 创建一个符号栈
let index = 0
let num1 = 0
let num2 = 0
let oper = 0
let res = 0
let ch = '' // 将每次扫描得到的结果保存到ch 
let keepNum = '' // 用于拼接多位数

while (true) {
    ch = expression.substring(index, index + 1).charAt(0)
    // 字符是运算符的情况
    if (operStack.isOper(ch)) {
        // operStack不为空
        if (!operStack.isEmpty()) {
            if (operStack.priority(ch) <= operStack.priority(operStack.peek())) {
                num1 = numStack.pop()
                num2 = numStack.pop()
                oper = operStack.pop()
                res = numStack.cal(num1, num2, oper)
                operStack.push(ch)
                numStack.push(res)
            } else {
                operStack.push(ch)
            }
        } else {
            operStack.push(ch)
        }
    } else {
        // 如果是数字
        // numStack.push(ch - 48) // 字符串'1' 转数字 1
        keepNum += ch
        if (index === expression.length - 1) {
            numStack.push(Number(keepNum))
        } else {
            if (operStack.isOper(expression.substring(index + 1, index + 2).charAt(0))) {
                // 如果后一位是运算符 keepNum直接入栈
                numStack.push(Number(keepNum))
                keepNum = ''
            }
        }
    }
    index++
    if (index >= expression.length) {
        break
    }
}
// 扫描完毕
while (true) {
    if (operStack.isEmpty()) {
        break
    }
    // 可以改变一种写法  顺序做运算 最后 用队列 不用栈
    num1 = numStack.pop()
    num2 = numStack.pop()
    oper = operStack.pop()
    res = numStack.cal(num1, num2, oper)
    numStack.push(res)
}
console.log("最后的结果为", numStack.pop())


numStack.toString()
operStack.toString()

// 通常都是中缀转后缀再来实现会比较轻松
// 算法层面上的错误
// 目前找不到直接中缀计算器实现的代码
// 前期理解栈就行 我的解决方法最后顺序去运算
// 注意到这个问题就行，后面再来完善
// 不纠结 学到栈的思路就行，后面再来完善这个算法