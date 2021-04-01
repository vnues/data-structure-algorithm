class listNode {
  constructor(val) {
    this.val = val;
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
        return cur.val;
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


const list1 = new MyLinkedList();

list.addAtTail(7);
list.addAtTail(1);
list.addAtTail(6);

const list2 = new MyLinkedList();

list.addAtTail(5);
list.addAtTail(9);
list.addAtTail(2);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let count =0
  // 判断是||
  let l3 = head = new ListNode()
  while(l1||l2){
    l1Val=l1?l1.val:0
    l2Val=l2?l2.val:0
    // 优雅的写法
    let value=l1Val+l2Val+count
    count=0
    if(value>=10){
        count=Math.floor(value/10)
    }
    l3.next=new ListNode(value%10)
    l1=l1&&l1.next
    l2=l2&&l2.next
    l3=l3.next
  }
  if(count!==0){
    l3.next=new ListNode(count)
  }
  return head.next
};

const str="["& [业务员租赁提成.员工工号] &","& [业务员租赁提成.员工姓名] &"]"

const regex=/^[]\$/