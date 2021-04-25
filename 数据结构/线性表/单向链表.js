/*
单向链表的特点：
用一组任意的内存空间去存储数据元素（这里的内存空间可以是连续的，也可以是不连续的）
每个节点(node)都由数据本身和一个指向后续节点的指针组成
整个链表的存取必须从头指针开始，头指针指向第一个节点
最后一个节点的指针指向空（NULL

链表中的几个主要操作
创建节点
插入节点
搜索/遍历节点
删除节点
合并

*/




class ListNode {
  constructor(key) {
    this.next = null;
    this.key = key;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  static createNode(key) {
    return new ListNode(key);
  }

  // 往头部插入数据
  insert(node) {
    // 如果head后面有指向的节点
    if (this.head) {
      node.next = this.head;
    } else {
      node.next = null;
    }
    this.head = node;
    this.length++;
  }

  find(key) {
    let node = this.head;
    while (node !== null && node.key !== key) {
      node = node.next;
    }
    return node;
  }

  delete(node) {
    if (this.length === 0) {
      throw 'node is undefined';
    }

    if (node === this.head) {
      this.head = node.next;
      this.length--;
      return;
    }

    let prevNode = this.head;

    while (prevNode.next !== node) {
      prevNode = prevNode.next;
    }

    if (node.next === null) {
      prevNode.next = null;
    }
    if (node.next) {
      prevNode.next = node.next;
    }
    this.length--;
  }
}