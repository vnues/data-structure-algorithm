// 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
/**
/**
 * @param {Node} head
 * @return {Node}
 */
// 注意 复制 引用类型 要复制的不是指针 是整个内存

var copyRandomList = function(head) {
  if(!head) return null;
  let m = new Map();
  let node = head;
  while(node) {
      m.set(node,new Node(node.val));
      node = node.next;
  }
  node = head;
  while(node) {
      m.get(node).next = node.next ? m.get(node.next) : null;
      m.get(node).random = node.random ? m.get(node.random) : null;
      node = node.next;
  }
  return m.get(head)
};
