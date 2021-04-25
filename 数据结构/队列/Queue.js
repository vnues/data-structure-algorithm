// 队列：有序列表,先进先出

// enqueue 向队列末尾添加一个元素（入队）
// dequeue 删除队列首的元素（出队）
// front 读取队列首的元素
// back 读取队列尾的元素
// showQueue 显示队列元素
// isEmpty 队列是否为空
// isFull 队列是否满
// clear 清空当前队列

// js的数组比较灵活 就算超出数组长度也不会报错 而是继续扩展长度
class Queue {
    maxSize // 表示数组的最大容量
    front // 队列投
    rear // 队列尾
    arr // 存放数据的数组
    constructor(maxSize) {
        this.maxSize = maxSize
        this.arr = new Array(maxSize)
        this.front = -1 // 指向队头的前一个位置
        this.rear = -1
    }
    // 判断是否为（全）空
    isEmpty() {
        return this.front === this.rear
    }
    // 判断队列是否满
    isFull() {
        return this.rear === this.maxSize - 1
    }
    enqueue(n) {
        if (this.isFull()) {
            throw new Error("队列已满,不能加入数据~")
        }
        this.rear++
        this.arr[this.rear] = n
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("队列为空,不能取数据~")
        }
        this.front++
        return this.arr[this.front]
    }
    showQueue() {
        if (this.isEmpty()) {
            // 非法操作，确实应该报提醒或者报错
            throw new Error("队列为空,没有数据~")
        }
        for (let i = this.front + 1; i <= this.rear; i++) {
            console.log(`arr[${i}]=${this.arr[i]}`)
        }
    }
    // 显示表头的数据，注意不是取数据
    front() {
        if (this.isEmpty()) {
            throw new Error("队列为空,没有数据~")
        }
        return this.arr[this.front + 1]
    }
    back() {
        if (this.isEmpty()) {
            throw new Error("队列为空,没有数据~")
        }
        return this.arr[this.rear]
    }
    // 清空队列
    clear() {
        delete this.arr
        this.arr = new Array(this.maxSize)
        this.front = -1
        this.rear = -1
    }
}

const queue = new Queue(3)