// 后缀计算器
/*
(3+4)*5-6 对应的后缀表达式就是 3 4+5 * 6 -
操作:
1.从左至右扫描，将3和4压入堆栈
2.遇到+运算符,因此弹出4和3（4为栈顶元素,3为次顶元素）,计算出3+4
3.将5入栈
4.接下来是*运算符，因此弹出5和7，计算出7*5=35 将35入栈
5.将6入栈
6.最后是运算符，计算出35-6即29
*/
// 后缀计算器只需要一个栈就能实现
// 什么时候用栈???经验加概念:先入后出

class Stack {
    constructor(maxSize) {
        this.maxSize = maxSize
        this.arr = new Array(this.maxSize)
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
    // 返回当前栈顶
    peek() {
        return this.arr[this.top]
    }
    clear() {
        this.top = -1
    }
    // 栈里面的有效个数
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


const suffixExpression = '3 4 + 5 * 6 -'

const list = suffixExpression.split(' ')


function calculate() {
    const stack = new Stack(100)
    for (let i = 0; i < list.length; i++) {
        // 突然想到正则匹配
        // 正则实际就是针对于你这一串字符串 里面的数字 可以匹配到
        // 但实际类型是string类型
        // 判断如果是数字字符
        if (list[i].match(/\d+/)) {
            // 入栈
            stack.push(Number(list[i]))
        } else {
            let num2 = stack.pop()
            let num1 = stack.pop()
            let res = 0
            if (list[i] === '+') {
                res = num1 + num2
            } else if (list[i] === '-') {
                res = num1 - num2
            } else if (list[i] === '*') {
                res = num1 * num2
            } else if (list[i] === '/') {
                res = num1 / num2
            } else {
                throw new Error("运算符出错~~")
            }
            // 结果入栈
            stack.push(res)
        }
    }

    console.log("(3+4)*5-6最后的结果为：", stack.pop())
}
calculate()


/*
总结
注意正则是匹配字符串的
/d - 匹配数字字符
匹配一个数字。等价于[0-9]。
例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'。
*/