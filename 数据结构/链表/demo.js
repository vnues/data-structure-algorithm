class SingleLinkedList {
    head = new HeroNode(0, "", "")
    find(no) {
        let cur = this.head
        while (cur.next.no !== no) {
            cur = cur.next
        }
        return cur
    }
    findPrevious(no) {
        let cur = this.head
        let flag = false
        if (!cur.next) {
            console.warn("链表为空~")
            return
        }
        while (true) {
            if (!cur.next) {
                break
            }
            if (cur.next.no === no) {
                flag = true
                break;
            }
            cur = cur.next
        }
        if (!flag) {
            console.warn(`没有找到该英雄编号${no}`)
            return -1
        }
        return cur
    }
    add(HeroNode) {
        let cur = this.head
        while (cur.next) {
            cur = cur.next
        }
        cur.next = HeroNode
    }


    addByOrder(HeroNode) {
        let cur = this.head
        let flag = false //是否存在
        while (cur.next) {
            if (cur.next.no > HeroNode.no) {
                break
            } else if (cur.next.no === HeroNode.no) {
                flg = true
                break
            }
            cur = cur.next
        }
        if (flag) {
            console.warn(`添加英雄${HeroNode.name}失败`)

        } else {
            HeroNode.next = cur.next
            cur.next = HeroNode
        }
    }


    update(no, nickname) {
        const cur = this.find(no)
        if (cur) {
            cur.nickname = nickname
        }
    }
    del(no) {
        const curPrevious = this.findPrevious(no)
        if (curPrevious && curPrevious.next) {
            curPrevious.next = curPrevious.next.next
        } else {
            console.warn(`没有该编号${no},删除失败`)
        }
    }
    display() {
        let cur = this.head;
        while (cur.next) {
            cur = cur.next
            cur.toString()
        }
    }
    // 单链表节点的有效个数
    getLength() {
        let cur = this.head.next;
        let count = 0
        while (cur) {
            cur = cur.next
            count++
        }
        return count
    }
    // 查找单链表的倒数第k个节点 也就是相当于找第（length-k）节点
    findLastIndexNode(index) {
        let cur = this.head.next;
        const length = this.getLength()
        if (!cur || length - index < 0 || index <= 0 || !index) {
            return -1 // 表示没找到
        }
        for (let i = 0; i < length - index; i++) {
            cur = cur.next
        }
        return cur

    }
    // 单链表的反转
    reverseList() {
        // 创建新的链表 每循环当前的单链表就把结果放到最前-应该是要改变原来的单链表
        let cur = this.head.next; // 当前遍历的节点
        let reverseHead = new HeroNode(0, "", "") // 反转链表的头结点
        let next = null // 当前遍历的下一个节点
        // 没有节点或者只有一个节点无需反转
        if (!cur || !cur.next) {
            return
        }
        while (cur) {
            next = cur.next // 保存下一个节点
            cur.next = reverseHead.next // 链接到后面的链表节点
            reverseHead.next = cur // 链接前面的节点
            cur = next // 后移
        }
        // 如果是直接  this.head = reverseHead ？相当于头结点的地址都变了
        this.head.next = reverseHead.next
    }
    // 反转打印 -- 不改变原来的单链表
    // 反向的概念可以想到栈 先入后出
    reversePrint() {
        let cur = this.head.next;
        const stack = new Stack(this.getLength())
        while (cur) {
            stack.push(cur)
            cur = cur.next
        }
        stack.display()
    }


}

// 栈
class Stack {
    maxSize
    stack
    top = -1 // 表示栈顶 初始化为-1
    constructor(maxSize) {
        this.maxSize = maxSize
        this.stack = new Array(maxSize)
    }
    // 入栈
    push(el) {
        if (this.isFull()) {
            throw new Error("栈满了~")
        }
        this.top++
        this.stack[this.top] = el
    }
    // 出栈
    pop() {
        if (this.isEmpty()) {
            throw new Error("栈空了~")
        }
        const value = this.stack[this.top]
        this.top--
        return value
    }
    // 是否为空
    isEmpty() {
        return this.top === -1
    }

    // 是否为满
    isFull() {
        return this.top === this.maxSize - 1
    }
    // 需要从栈顶开始显示数据
    display() {
        for (let i = this.top; i >= 0; i--) {
            console.log(`英雄编号:${this.stack[i].no},英雄名称:${this.stack[i].name},英雄昵称:${this.stack[i].nickname}`)
        }
    }
}

class HeroNode {
    no
    name
    nickname
    next
    constructor(no, name, nickname) {
        this.no = no
        this.name = name
        this.nickname = nickname
    }
    toString() {
        console.log(`英雄编号:${this.no},英雄名称:${this.name},英雄昵称:${this.nickname}`)
    }
}

const hero1 = new HeroNode(1, "宋江", "及时雨")
const hero2 = new HeroNode(2, "卢俊义", "玉麒麟")
const hero3 = new HeroNode(3, "吴用", "智多星")
const hero4 = new HeroNode(4, "林冲", "豹子头")




const singleLinkedList = new SingleLinkedList()

singleLinkedList.addByOrder(hero1)
singleLinkedList.addByOrder(hero2)
singleLinkedList.addByOrder(hero4)
singleLinkedList.addByOrder(hero3)



singleLinkedList.display()

singleLinkedList.reversePrint()
