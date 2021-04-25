
class listNode {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
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
    getByKey(key) {
        // 从头遍历到尾去找
        var cur = this.head
        while (cur) {
            if (cur.key === key) {
                return cur
            }
            cur = cur.next
        }
    }
    addAtHead(key, val) {
        let originHead = this.head
        this.head = new listNode(key, val)
        this.head.next = originHead
        this.size++
    }
    addAtTail(key, val) {
        let last = this.head
        let node = new listNode(key, val)
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
    // 特定位置插入
    addAtIndex(index, key, val) {
        if (index < 0) { return this.addAtHead(val) }
        // 若index小于等于链表的长度且大于等于0
        if (index >= 0 && index <= this.size) {
            // 如果在第0位前插
            if (index === 0) {
                return this.addAtHead(key, val)
            } else {
                let cur = this.head
                let next
                let node = new listNode(key, val)
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

class HashTable {
    constructor() {
        this.table = new Array(137)
        this.buildChains();
    }
    buildChains() {
        for (var i = 0; i < this.table.length; ++i) {
            this.table[i] = new LinkedList();
        }
    }
    put(key, data) {
        var pos = this.betterHash(key);
        this.table[pos].addAtTail(key, data)
    }
    get(key) {
        var pos = this.betterHash(key);
        var listNode = this.table[pos].getByKey(key)
        return listNode.val
    }
    // 直接定址法
    betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        return parseInt(total);
    }
}

var hTable = new HashTable();


hTable.put("name", "vnues")
hTable.put("age", "20") // 相当于obj.xxx 后面用代理优化下操作
hTable.put("height", 180)
// 用代理实现一下
hTable = new Proxy(hTable, {
    get: function (target, propKey) {
        return target.get(propKey)
    },
    set: function (target, prop, value) {
        target.put(prop, value)
    }
})
hTable.phone = "18824699373"
console.log(hTable)
console.log(hTable.name)
console.log(hTable.phone)