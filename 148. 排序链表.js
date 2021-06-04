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

// 从小到大
class ListNode {
  constructor(val) {
      this.val = val
      this.next = null
  }
}

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

// 从小到大

var sortList = function(head) {
  // 合并两个有序链表
  function merge(list1,list2){
    let l3 = new ListNode()
    let temp=l3
    while(list1&&list2){
      if(list2.val<list1.val){
        temp.next=list2
        list2=list2.next
      } else {
        temp.next=list1
        list1=list1.next
      }
      temp=temp.next
    }
    if(list1){
      temp.next=list1
    }
    if(list2){
      temp.next=list2
    }
    return l3.next
  }

  function toSortList(head,tail){
    if(!head){
      return head
    }
    if(head.next===tail){
      console.log('tail',tail)
      // 这里为什么需要head.next=null
      // 因为toSortList(head,mid),toSortList(mid,tail)
      // 最后一个节点也是另外一个分割链表的起点
      head.next=null
      return head
    }
    let slow=head
    let fast=head
    // 利用快慢指针找到中心位置做分割
    while(fast!==tail){
      slow=slow.next
      fast=fast.next
      if(fast!==tail){
        fast=fast.next
      }
    }
    let mid=slow
    // toSortList(head,mid)不包含这个mid
    return merge(toSortList(head,mid),toSortList(mid,tail))
  }
  return toSortList(head,null)
};


// [4,2,1,3]
let list = new ListNode(4)
let temp = list
temp.next=new ListNode(2)
temp=temp.next
temp.next=new ListNode(1)
temp=temp.next
temp.next=new ListNode(3)
temp=temp.next
temp.next=null

console.log(sortList(list))