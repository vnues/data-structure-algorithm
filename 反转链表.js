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

// 递归实际也是将大问题拆分为小问题
// 我们先不看递归调用 而是看实际操作的代码  head.next.next = head;  head.next = null;  return last;
// 实际做操作的就是这个代码 ===>得会写出反转的代码
// 这时候拆解小问题 题目是6个节点 我们就先从个节点开始 2个节点开始 3个节点开始  这个看下去
// ! 因为递归的回溯性 学会自顶向下（深度遍历）看问题 这时候就知道 递归的写法要放在哪个位置
// 比如反转后的链表 (回溯性) 最后一步 把头结点反转到尾部 注意不是拼接 这种概念
// 链表1==>2==>3  可以拆分为 1==>3==>2  3==>2==>1 
// ! 走了两次递归 这样明白多了 原来递归这样掌握的 真的美妙
function reverse(head) {
  if (head.next == null) return head;
  let last = reverse(head.next); // ! 假设这里反转好了
  // ! head.next.next为null 反转链表的后 这个节点就是指向null 再把头节点拼接上去 head.next.next = head
  // ! 当链表递归反转之后，新的头结点是 last，而之前的 head 变成了最后一个节点，别忘了链表的末尾要指向 null
  debugger
  console.log('head.next',head.next) // head.next listNode { value: 2, next: null } 最后
  // 1==>2==>3 1依旧可以指向2
  head.next.next = head;
  // console.log("head.next.next", head.next.next);
  head.next = null;
  console.log(last)
  return last; // 把头节点扔出来
}

const list = new MyLinkedList();

list.addAtTail(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);

let res = reverse(list.head);

console.log('res',res)

// 自顶向上的看法 还得根据递归写法和终止条件  
// ! 简而言之 就是要知道最后底部的回溯起点在哪里