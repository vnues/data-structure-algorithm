/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * 先遍历求得链表总长度count，同时将链表首尾相连
 * 再找到原链表的倒数第k+1个节点，该节点的next就是新链表的头结点
 * 这个链表有头结点的
 */
var rotateRight = function (head, k) {
    if (head === null || head.next === null || k === 0) return head;
    let temp = head
    let count = 1 // 为什么count从1开始算起
    // 因为temp.next少算了一个
    while (temp.next) {
        temp = temp.next
        count++
    }
    // 注意k可能大于count 旋转大于一个周期
    k = k % count
    // 链成环
    temp.next = head
    // 找到倒数第k+1个节点
    for (let i = 0; i < count - k; i++) {
        // 指针指向不同而已
        temp = temp.next
    }
    head = temp.next
    temp.next = null // 断开环
    return head
};