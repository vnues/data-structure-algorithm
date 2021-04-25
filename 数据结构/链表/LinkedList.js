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