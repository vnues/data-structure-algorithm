class Stack {
    constructor() {
        this.arr = new Array()
        this.top = -1 // 定义栈顶
    }
    pop() {
        const value = this.arr[this.top]
        this.top--
        return value
    }
    push(val) {
        this.top++
        this.arr[this.top] = val
    }
    // 获取栈顶的值
    peek() {
        return this.arr[this.top]
    }
    isEmpty() {
        return this.top === -1
    }

}
