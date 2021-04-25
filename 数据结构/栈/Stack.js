// 先入后出
// 可以反复用 用一个指针去定位位置时候 注意复用
class Stack {
    constructor(maxSize) {
        // 统一写在这里
        this.maxSize = maxSize
        this.arr = new Array(this.maxSize) // 用数组实现一个栈
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

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.getLength());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.getLength());
console.log(s.peek());


