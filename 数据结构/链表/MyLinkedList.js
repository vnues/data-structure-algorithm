
/*
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
*/

/**
 * Initialize your data structure here.
 */
// 存在的问题 理解好需求
// 不要去覆盖cur 不然就没有指向了
// 另外加个prev语义化更明确点


// ✅的写法

class ListNode {
    constructor(val) {
        this.value = val
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }
    addAtHead(val) {
        let originHead = this.head
        this.head = new ListNode(val)
        this.head.next = originHead
        this.size++
    }
    addAtTail(val) {
        let last = this.head
        let node = new ListNode(val)
        while (last && last.next) {
            last = last.next
        }
        if (last) {
            last.next = node
        } else {
            this.head = node
        }
        this.size++
    }
    get(index) {
        let currentIndex = 0
        let cur = this.head
        if (index < 0 || this.size < index + 1) {
            return -1
        }
        while (cur) {
            if (currentIndex === index) {
                return cur.value
            }
            cur = cur.next
            currentIndex++
        }
    }
    // 特定位置插入
    addAtIndex(index, val) {
        if (index < 0) { return this.addAtHead(val) }
        // 若index小于等于链表的长度且大于等于0
        if (index >= 0 && index <= this.size) {
            // 如果在第0位前插
            if (index === 0) {
                return this.addAtHead(val)
            } else {
                let cur = this.head
                let next
                let node = new ListNode(val)
                let currentIndex = 0
                while (cur) {
                    if (currentIndex === index - 1) {
                        // 此时cur是要插入的元素前边的元素
                        // next用来保存原来cur的next元素
                        next = cur.next
                        // 将新插入元素赋值给cur.next
                        cur.next = node
                        // 将原插入之前元素的next赋值给插入元素的next
                        node.next = next
                        this.size++
                        break
                    }
                    cur = cur.next
                    currentIndex++
                }
            }
        }
    }
    // 按索引删除
    deleteAtIndex(index) {
        if (index >= 0 && index <= this.size - 1) {
            let cur = this.head
            // 如果删第0位
            if (index === 0) {
                this.head = cur.next
                this.size--
            } else {
                let currentIndex = 0
                let next
                while (cur) {
                    if (currentIndex === index - 1) {
                        // 此时cur是被删除元素的前一位
                        next = cur.next.next
                        cur.next = next
                        this.size--
                    }
                    cur = cur.next
                    currentIndex++
                }
            }
        }
    }
}
