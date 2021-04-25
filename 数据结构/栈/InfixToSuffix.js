/*
中缀转后缀
后缀表达式的计算是超级方便 但是却不太容易写出来
所以应该中缀->后缀
算法是这样的:
1) 初始化两个栈:运算符栈 s1 和储存中间结果的栈 s2; 2) 从左至右扫描中缀表达式;
3) 遇到操作数时，将其压 s2;
4) 遇到运算符时，比较其与 s1 栈顶运算符的优先级:
1.如果 s1 为空，或栈顶运算符为左括号“(”，则直接将此运算符入栈; 2.否则，若优先级比栈顶运算符的高，也将运算符压入 s1;
3.否则，将 s1 栈顶的运算符弹出并压入到 s2 中，再次转到(4.1)与 s1 中新的栈顶运算符相比较;
5) 遇到括号时:
(1) 如果是左括号“(”，则直接压入 s1
(2) 如果是右括号“)”，则依次弹出 s1 栈顶的运算符，并压入 s2，直到遇到左括号为止，此时将这一对括号丢弃 6) 重复步骤 2 至 5，直到表达式的最右边
7) 将 s1 中剩余的运算符依次弹出并压入 s2
8) 依次弹出 s2 中的元素并输出，结果的逆序即为中缀表达式对应的后缀表达式
*/

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



class InfixToSuffix {

    constructor(expression) {
        this.s = expression //'100+((112+3)×4)-5123231' // 中缀表达式
        this.expressionList = [] // 存放表达式数组
        // 因为 s2 这个栈，在整个转换过程中，没有 pop 操作，而且后面我们还需要逆序输出
        this.sunffixList = [] // 存放后缀表达式的数组
    }
    toInfixExpressionList() {
        let index = 0 // 扫描的下标
        let keepNum = '' // 保存多位数
        while (index < this.s.length) {
            // 运算符
            if (this.s[index].charCodeAt() < 48 || this.s[index].charCodeAt() > 57) {
                this.expressionList.push(this.s[index])
                index++
            } else {
                keepNum = ''
                while (index < this.s.length && (this.s[index].charCodeAt() >= 48 && this.s[index].charCodeAt() <= 57)) {
                    keepNum += this.s[index]
                    index++
                }
                this.expressionList.push(keepNum)
            }
        }
    }
    // 优先级判断
    getPriority(oper) {
        if (oper === '*' || oper === '/') {
            return 1
        } else if (oper === '+' || oper === '-') {
            return 0
        } else {
            return -1 // 假定目前的表达式只有'* / + -'
        }
    }
    // 进行转化处理
    parseSuffixExpreesionList() {
        // 符号栈
        const stack = new Stack(100)
        this.expressionList.forEach((item, index) => {
            // 匹配一个或者多位数字符
            if (item.match(/\d+/)) {
                this.sunffixList.push(item)

            } else if (item === '(') {
                stack.push(item)
            } else if (item === ')') {
                // 如果是右括号“)”，则依次弹出 s1 栈顶的运算符，并压入 s2，直到遇到左括号为止，此时将这一对括号丢弃 6) 重复步骤 2 至 5，直到表达式的最右边
                while (stack.peek() !== '(') {
                    this.sunffixList.push(stack.pop())
                }
                // 最后弹出左括号消除
                stack.pop()
            } else {
                // 匹配运算符
                // 判断优先级
                //当 item 的优先级小于等于 s1 栈顶运算符, 将 s1 栈顶的运算符弹出并加入到 s2 中，再次转到(4.1) 与 s1 中新的栈顶运算符相比较
                console.log(stack.getLength())
                while (stack.getLength() && this.getPriority(item) <= this.getPriority(stack.peek())) {

                    console.log(stack.peek())

                    this.sunffixList.push(stack.pop())
                }
                // 最后压入栈或者优先级很大直接入栈
                stack.push(item)
            }
        })
        // 循环遍历完，依次弹出进入sunffixList中
        while (stack.getLength()) {
            this.sunffixList.push(stack.pop())
        }
    }

}

// 压入栈计算
const sunffix = new InfixToSuffix('100+((112+3)*4)-5')  // 1 2 3 + 4 * + 5 – // ["100", "112", "3", "+", "4", "*", "+", "5", "-"]

sunffix.toInfixExpressionList()

console.log(sunffix.expressionList)

sunffix.parseSuffixExpreesionList()

console.log(sunffix.sunffixList)