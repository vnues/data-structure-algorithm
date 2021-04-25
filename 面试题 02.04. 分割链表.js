/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
  let smallList  =new ListNode(-1)
  let smallHead=smallList
  let bigList = new ListNode(-1)
  let bigHead=bigList
  while(head){
    if(head.val<x){
      smallHead.next=new ListNode(head.val)
      smallHead=smallHead.next
    } else{
      bigHead.next=new ListNode(head.val)
      bigHead=bigHead.next
    }
    head=head.next
  }
  // 拼接
  smallHead.next=bigList.next
  return smallList.next
};