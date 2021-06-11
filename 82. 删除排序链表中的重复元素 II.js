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
// [1,2,3,3,4,4,5]
// 这个双指针太恶心了 
// var deleteDuplicates = function(head) {
//   // 做题之前 先处理边界条件
//   if(!head){
//     return head
//   }
//   const list=new ListNode(-1)
//   let listHead=list
//   // 有序链表 双指针
//   let slow=head
//   let fast=head.next
//   while(fast&&slow){
//     if(slow.val===fast.val){
//       while(fast&&fast.next&&slow.val===fast.val){
//         fast=fast.next
//       }
//       slow=fast
//     } 
//     listHead.next= new ListNode(slow.val)
//     listHead=listHead.next
//     slow=slow.next
//     fast=fast.next
//   }
//   return list.next
// };


var deleteDuplicates = function(head) {
  if (!head) {
      return head;
  }

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