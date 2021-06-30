/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 const myReverse=(head,tail)=>{
  // 1->2->3->null
  // null<-1<-2<-3
  // null<-1 也就是1的next为null
  // null<-1<-2为3的next节点 这样来看 就比较好理解了
  let prev = tail.next 
  // 表示当前节点的前一个节点 因为我们要反转链表 所以应该是cur.next=prev 的操作
  let cur = head
  // prev如果是tail 说明反转完了
  // prev!==tail ==> null<-1<-2<-3作为prev
  while(prev!==tail){
      // 暂存剩余待反转的链表
     const nextTemp = cur.next
     cur.next = prev
     prev=cur // 下一次迭代的prev
     cur=nextTemp // 剩余待反转的链表
  }
  return [tail,head]
}
var reverseKGroup = function(head, k) {
 if(!head){
     return head
 }
 if(k<=0){
     return head
 }
const hair = new ListNode(-1) // 哨兵节点
hair.next=head 
let pre=hair
while(head){
    // k为3 i===> 0 1 2 cur cur.next cur.next.next
    let tail=pre
    for(let i=0;i<k;i++){
        tail=tail.next
        if(!tail){
            return hair.next
        }
    }
    const nex = tail.next; // 暂存待反转的链表
    [head, tail] = myReverse(head, tail);
    pre.next = head;
    tail.next = nex
    pre = tail 
    head = tail.next // 指针指向待反转的链表
}
return hair.next
};