
// 双向链表
class DoubleLinkedList {
    head = new HeroNode(0, "", "")
    find(no) {
        let cur = this.head
        while (cur.next.no !== no) {
            cur = cur.next
        }
        if (cur.next === no) {
            return cur
        } else {
            return -1
        }
    }
    findLast() {
        let cur = this.head
        while (cur.next) {
            cur = cur.next
        }
        return cur
    }
    add(HeroNode) {
        const cur = this.findLast()
        cur.next = HeroNode
        HeroNode.pre = cur
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
            // 如果cur.next为空就不必处理，指向的是末尾 也就是针对于末尾添加的不用关心null节点
            if (cur.next) {
                cur.next.pre = HeroNode // 注意双链表 改变了一个节点 两条链都要变化
            }
            cur.next = HeroNode
            HeroNode.pre = cur
        }
    }

    update(no, nickname) {
        const cur = this.find(no)
        if (cur) {
            cur.nickname = nickname
        }
    }
    del(no) {
        const cur = this.find(no)
        if (cur) {
            // 没有引用这个对象 就会被gc垃圾回收机制给回收♻️
            cur.pre.next = cur.next
            cur.next.pre = cur.pre
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
    // 双链表的反转
    reverseList() {
        // 创建新的链表 每循环当前的单链表就把结果放到最前-应该是要改变原来的单链表
        let cur = this.head.next; // 当前遍历的节点
        let reverseHead = new HeroNode(0, "", "") // 反转链表的头结点
        let next = null // 当前遍历的下一个节点
        // 没有节点或者存在一个节点
        if (!cur || !cur.next) {
            return
        }
        while (cur) {
            next = cur.next // 保存下一个节点
            cur.next = reverseHead.next // (null)链接到后面的链表节点 |❌ | .... |❌ 
            // a.b.c这种操作就要注意判断是否存在了 不然会抛出错误❌
            if (reverseHead.next) {
                reverseHead.next.pre = cur
            }
            cur.pre = reverseHead
            reverseHead.next = cur // 链接前面的节点
            cur = next // 后移

        }
        this.head.next = reverseHead.next
    }
    reversePrint() {
        let cur = this.findLast()
        while (cur.pre) {
            cur.toString()
            cur = cur.pre
        }
    }
}


class HeroNode {
    no
    name
    nickname
    next = null
    pre = null
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




const doubleLinkedList = new DoubleLinkedList()

doubleLinkedList.addByOrder(hero1)
doubleLinkedList.addByOrder(hero2)
doubleLinkedList.addByOrder(hero4)
doubleLinkedList.addByOrder(hero3)


doubleLinkedList.display()

doubleLinkedList.reverseList()

doubleLinkedList.display()

doubleLinkedList.reversePrint()