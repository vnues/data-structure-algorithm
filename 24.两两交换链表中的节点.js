class listNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    get(index) {
        if (index >= 0 && index < this.length) {
            var cur = this.head
            var i = 0
            while (cur.next && i < index) {
                cur = cur.next
                i++
            }
            return cur.val
        } else {
            return -1
        }
    }
    addAtHead(val) {
        var cur = this.head
        this.head = new listNode(val)
        this.head.next = cur
        this.length++
    }
    addAtTail(val) {
        var cur = this.head
        while (cur.next) {
            cur = cur.next
        }
        cur.next = new listNode(val)
        this.length++
    }
    addAtIndex() {
        // 找到前一个
        var cur = this.head
        var prev = null
        if (index > 0 && index < this.length) {
            var i = 0
            while (cur.next && i < index) {
                prev = cur
                cur = cur.next
                i++
            }
            prev.next = new listNode(val)
            prev.next.next = cur
            this.length++
        } else if (index <= 0) {
            this.head = new listNode(val)
            this.head.next = cur
            this.length++
        } else if (index === this.length) {
            // 添加到尾部
            this.addAtTail(val)
        }
    }
    deleteAtIndex() {
        // 找到目标节点的前一个节点
        if (index > 0 && index < this.length) {
            var prev = null
            var cur = this.head
            var i = 0
            while (cur.next && i < index) {
                prev = cur
                cur = cur.next
                i++
            }
            prev.next = cur.next
            this.length--
        } else if (index === 0) {
            this.head = this.head.next
            this.length--
        }
    }
}

// Given 1->2->3->4, you should return the list as 2->1->4->3.
// 链表和节点不一样的 链表是数据结构有api 另外还有头结点指向
// 节点也是可以用来指向链表的
const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}


var swapPairs = (head) => {
    if (head == null || head.next == null) {
        return head;
    }
    var next = head.next; // 走了一步
    
    head.next = swapPairs(next.next); 
    next.next = head;
    return next;
}

console.log(swapPairs(list)) // 2 1 4 3