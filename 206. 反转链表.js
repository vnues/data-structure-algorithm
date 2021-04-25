// ??? 反转链表和旋转链表的概念不一样  所以结果的顺序也是不一样的 要理解好这两个概念 通常旋转链表用闭环解决

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 反转和旋转不是同一个概念
 */
// 注意这里的头结点是指第一个元素节点
/**
 * 1->2->3->null
 * null<-1<-2<-3  ===> 3->2->1->null
 */
/**
 * cur.next=prev
 * 重新理解引用类型的赋值 你要明白就是相当于赋值一个指针
 */
var reverseList = function (head) {
    let cur = head // 当前节点
    let prev = null // 当前节点的前一个节点
    while (cur) {
        let nextTemp = cur.next
        cur.next = prev
        prev = cur
        cur = nextTemp
    }
    return prev
};




/**
 * 反转链表
 */
function reverseList(head) {
    let cur = head // 当前节点
    let prev = null // 当前节点的前一个节点
    while (cur) {
        let nextTemp = cur.next
        /**
         * 这两步形成反转
         */
        cur.next = prev
        prev = cur
        cur = nextTemp
    }
    return prev
}