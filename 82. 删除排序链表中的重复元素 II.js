/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
  if (!head) {
      return head;
  }
  // 其实就是快慢指针
  // cur.next ==>slow指针
  // cur.next.next ==>fast指针 比slow多走一步
  const dummy = new ListNode(0, head); // 哨兵
  let cur = dummy;
  while (cur.next && cur.next.next) {
      if (cur.next.val === cur.next.next.val) {
          const x = cur.next.val;
          while (cur.next && cur.next.val === x) {
              cur.next = cur.next.next;
          } 
      } else {
          cur = cur.next;
      }
  }
  return dummy.next;
};