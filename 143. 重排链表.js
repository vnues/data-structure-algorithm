/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 // 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 // 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 var reorderList = function(head) {
   const list = []
   while(head){
     list.push(head)
     head=head.next
    }
    let i=0;
    let j=list.length-1
    while(i<j){
      list[i].next=list[j]
      i++
      if(i===j){
        break
      }
      list[j].next = list[i];
      j--
    }
    list[i].next = null;
};