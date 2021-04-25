// 队列：有序列表,先进先出
// 环形队列
// enqueue 向队列末尾添加一个元素（入队）
// dequeue 删除队列首的元素（出队）
// front 读取队列首的元素
// back 读取队列尾的元素
// showQueue 显示队列元素
// isEmpty 队列是否为空
// isFull 队列是否满
// clear 清空当前队列
// size 当前队列有效数据的个数

// https://zhuanlan.zhihu.com/p/79163010  --这篇讲的不错

// 必须空出一个预留空间 不然很难处理环形队列 目前我实现不了

/* 取余有环形的概念在里面 */
class CircleQueue {
    maxSize // 表示数组的最大容量
    front // 队列投
    rear // 队列尾
    arr // 存放数据的数组
    constructor(maxSize) {
        /*
		这里的maxSize加1的原因是，在循环队列中， 我们会浪费一个空间，这样能存元素的数量会少一个，
		所以这里我们基于传进来的容量+1，这样就可以储存期望的元素数量了
		 */
        this.maxSize = maxSize + 1
        this.arr = new Array(maxSize)
        this.front = 0 // front指向队列的第一个元素，也就是说arr[front]就是队列的第一个元素
        this.rear = 0 // this.rear是代表预留的位置
        // rear指向队列的最后一个元素的后一个位置（按照这样分析，rear=-1就是指向队列的最后一个元素）,因此希望空出一个空间作为约定
        // 也就是rear是当前预留的一个空间，如果有数据进来，直接插在rear这个位置就行
    }
    // 判断是否为（全）空
    isEmpty() {
        return this.front === this.rear
    }
    // 判断队列是否满
    isFull() {
        // 在原来的位置加一 判断是否跟front位置重合 但是实际不能重合 因为要预留一个位置
        // this.rear是代表预留的位置
        return (this.rear + 1) % this.maxSize === this.front
    }
    // 当前队列有效数据的个数
    size() {
        return (this.rear + this.maxSize - this.front) % this.maxSize
    }
    enqueue(n) {
        if (this.isFull()) {
            throw new Error("队列已满,不能加入数据~")
        }
        // 也就是rear是当前预留的一个空间，如果有数据进来，直接插在rear这个位置就行
        this.arr[this.rear] = n
        // 取余
        this.rear = (this.rear + 1) % this.maxSize // 再次预留一个空间  不管怎么样 最后都会预留一个空间
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("队列为空,不能取数据~")
        }
        const value = this.arr[this.front]
        // 指向队列的第一个头元素 假设你这个头元素出去了 应该加一 再次指向
        this.front = (this.front + 1) % this.maxSize
        return value

    }
    showQueue() {
        if (this.isEmpty()) {
            // 非法操作，确实应该报提醒或者报错
            throw new Error("队列为空,没有数据~")
        }
        for (let i = this.front; i < this.front + this.size(); i++) {
            console.log(`队列元素=${this.arr[i % this.maxSize]}`)
        }
    }
    // 显示表头的数据，注意不是取数据
    front() {
        if (this.isEmpty()) {
            throw new Error("队列为空,没有数据~")
        }
        return this.arr[this.front]
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
        this.front = 0
        this.rear = 0
    }
}

const queue = new CircleQueue(3)


// function a() {
//     console.log(this)
//     this.b = function () {
//         console.log(this)
//     }
// }


function MyObject() {

    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }

    //特权方法
    this.publicMethod = function () {
        privateVariable++;
        return privateVariable
    };
    this.change = function () {
        return privateVariable
    }
}

const obj = new MyObject()


obj.publicMethod()

obj.change()

// 不是拷贝了这个变量对象而是通过引用这个变量到作用链去
// 私有属性通过get set方法去操作
// 这就是闭包模拟私有属性的操作 ---> 这样更加明白了

class MyCircularQueue {
    constructor(k) {
        /*
		这里的maxSize加1的原因是，在循环队列中， 我们会浪费一个空间，这样能存元素的数量会少一个，
		所以这里我们基于传进来的容量+1，这样就可以储存期望的元素数量了
		 */
        this.capacity = k + 1
        this.arr = new Array(this.capacity)
        this.front = 0 // front指向队列的第一个元素，也就是说arr[front]就是队列的第一个元素
        this.rear = 0 // this.rear是代表预留的位置
        // rear指向队列的最后一个元素的后一个位置（按照这样分析，rear=-1就是指向队列的最后一个元素）,因此希望空出一个空间作为约定
        // 也就是rear是当前预留的一个空间，如果有数据进来，直接插在rear这个位置就行
    }
    // 判断是否为（全）空
    isEmpty() {
        return this.front === this.rear
    }
    // 判断队列是否满
    isFull() {
        // 在原来的位置加一 判断是否跟front位置重合 但是实际不能重合 因为要预留一个位置
        // this.rear是代表预留的位置
        return (this.rear + 1) % this.capacity === this.front
    }

    enQueue(val) {
        if (this.isFull()) {
            return false
        }
        // 也就是rear是当前预留的一个空间，如果有数据进来，直接插在rear这个位置就行
        this.arr[this.rear] = val
        // 取余
        this.rear = (this.rear + 1) % this.capacity // 再次预留一个空间  不管怎么样 最后都会预留一个空间
        return true
    }
    deQueue() {
        if (this.isEmpty()) {
            return false
        }
        const value = this.arr[this.front]
        // 指向队列的第一个头元素 假设你这个头元素出去了 应该加一 再次指向
        this.front = (this.front + 1) % this.capacity
        return true

    }
    // 显示表头的数据，注意不是取数据
    Front() {
        if (this.isEmpty()) {
            return -1
        }
        return this.arr[this.front]
    }
    Rear() {
        if (this.isEmpty()) {
            return -1
        }
        // this.rear - 1 + this.capacity  this.rear - 1 存在负数情况 0-1
        return this.arr[(this.rear - 1 + this.capacity) % this.capacity]
    }

}