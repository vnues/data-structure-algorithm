class listNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class MyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  addAtHead(val) {
    let originHead = this.head;
    this.head = new listNode(val);
    this.head.next = originHead;
    this.size++;
  }
  addAtTail(val) {
    let last = this.head;
    let node = new listNode(val);
    while (last && last.next) {
      last = last.next;
    }
    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
    this.size++;
  }
  get(index) {
    let currentIndex = 0;
    let cur = this.head;
    if (index < 0 || this.size < index + 1) {
      return -1;
    }
    while (cur) {
      if (currentIndex === index) {
        return cur.value;
      }
      cur = cur.next;
      currentIndex++;
    }
  }
  // 特定位置插入
  addAtIndex(index, val) {
    if (index < 0) {
      return this.addAtHead(val);
    }
    // 若index小于等于链表的长度且大于等于0
    if (index >= 0 && index <= this.size) {
      // 如果在第0位前插
      if (index === 0) {
        return this.addAtHead(val);
      } else {
        let cur = this.head;
        let next;
        let node = new listNode(val);
        let currentIndex = 0;
        while (cur) {
          if (currentIndex === index - 1) {
            // 此时cur是要插入的元素前边的元素
            // next用来保存原来cur的next元素
            next = cur.next;
            // 将新插入元素赋值给cur.next
            cur.next = node;
            // 将原插入之前元素的next赋值给插入元素的next
            node.next = next;
            this.size++;
            break;
          }
          cur = cur.next;
          currentIndex++;
        }
      }
    }
  }
  // 按索引删除
  deleteAtIndex(index) {
    if (index >= 0 && index <= this.size - 1) {
      let cur = this.head;
      // 如果删第0位
      if (index === 0) {
        this.head = cur.next;
        this.size--;
      } else {
        let currentIndex = 0;
        let next;
        while (cur) {
          if (currentIndex === index - 1) {
            // 此时cur是被删除元素的前一位
            next = cur.next.next;
            cur.next = next;
            this.size--;
          }
          cur = cur.next;
          currentIndex++;
        }
      }
    }
  }
}

let successor =null

function reverseN(head,n){
  // 终止条件 是开始的判断 也是临界值 决定栈底部
  if(n===1){
    successor = head.next
    return head
  }
  // 以 head.next 为起点，需要反转前 n - 1 个节点
  last =reverseN(head.next,n-1)
  head.next.next=head // !真正的操作 实现反转的代码 1==>2==>3反转 先反转 2 3再反转 32与1 拆解这些步骤 
  // 让反转之后的 head 节点和后面的节点连起来
  head.next=successor
  return last 
}


const list = new MyLinkedList();

list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);

// let res = reverse(list.head);

console.log('res',res)

// ! 拼接是需要遍历的
// ! 通过指针解决