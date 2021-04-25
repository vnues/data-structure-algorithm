/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let c1 = l1 // 表示当前c1的节点(初始化的时候可以理解是链表或者头结点)
    let c2 = l2// 表示当前c2的节点
    let c3 // 表示当前c3的节点
    let l3 // 链表l3
    let carry = 0 // 进位
    // c1 c2的节点存在 （c1 c2都结束了 到终点了 但是还存在进位还是要继续进一）进位还存在的
    while (c1 || c2 || carry) {
        // 考虑长短 短的节点为null 就以0代替
        let v1 = c1 ? c1.val : 0
        let v2 = c2 ? c2.val : 0
        let sum = carry + v1 + v2
        // 取进位 进位要么为1 要么就是0
        carry = Math.floor(sum / 10)
        if (c3) {
            // sum%10 取个位数
            c3.next = new ListNode(sum % 10)
            c3 = c3.next
        } else {
            l3 = new ListNode(sum % 10)
            c3 = l3
        }
        if (c1) {
            c1 = c1.next
        }
        if (c2) {
            c2 = c2.next
        }
    }
    return l3
};
