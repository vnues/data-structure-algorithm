// 优先队列
/*
在一般情况下，从队列中删除元素，一定是率先入队的元素。
但有些队列确不必遵循先进先出的规则，优先队列就是这么一种情况。
*/
// 一个数据结构会有自己对应的api crud
// 优先队列从插队处理就行
class PriorityQueue {
    arr = []
    // 实现一个最大优先队列
    enqueue(el) {
        if (this.empty()) {
            this.arr.push(el)
        } else {
            let isAdd = false
            for (let i = 0; i < this.arr.length; i++) {
                if (el.code > this.arr[i].code) {
                    this.arr.splice(i, 0, el)
                    isAdd = true
                    break;
                }
            }
            if (!isAdd) {
                this.arr.push(el)
            }
        }

    }
    dequeue() {
        this.arr.shift()
    }
    // 查看队列头,不是出队列
    front() {
        return this.arr[0]
    }
    back() {
        return this.arr[this.arr.length - 1]
    }
    // 打印成字符串 也有命名成display的
    toString() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(`名字:${this.arr[i].name},严重等级:${this.arr[i].code}`)
        }
    }
    empty() {
        return !this.arr.length
    }

}


// 变量code是一个整数，表示患者的优先级或病情严重程度。
class Patient {
    name
    code
    constructor(name, code) {
        this.name = name
        this.code = code
    }
}

const priorityQueue = new PriorityQueue()

const patient1 = new Patient("one", 10)
const patient2 = new Patient("two", 20)
const patient3 = new Patient("three", 8)
const patient4 = new Patient("four", 108)

priorityQueue.enqueue(patient1)
priorityQueue.enqueue(patient2)
priorityQueue.enqueue(patient3)
priorityQueue.enqueue(patient4)

priorityQueue.toString()