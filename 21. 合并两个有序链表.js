/**
 * Definition for singly-linked list. // 单链表
 */
function ListNode(val) {
    this.val = val;
    this.next = null; // 值为null 边界判断值很重要
}
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 合并有序链表 两个有序链表
// 有两种做法 l1 l2合并成一条转化为单链表的排序 浪费内存
// 用迭代思想去做 就是循环  迭代也可以用递归来实现
// 单链表实际就是一个对象 通过next去找链条⛓
var mergeTwoLists = function (l1, l2) {
    const preHead = new ListNode(-1) // 头指针，哨兵节点
    // 注意指针指向 
    let cur = preHead
    // 如果写cur=preHead.next
    // cur被重新赋址 preHead就指向不到了
    // 怎么表示一个链表 头结点 不存在头结点 就是第一个节点  这两种情况来表示链表
    // 注意l1 l2指针不是同时走的 如果l1.val<l2.val l1指针走一个节点 l2还是不走 进行对比
    // 类似快慢指针的概念吧  不要同时走的概念 这样增加判断❗️
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    // 全部都为空了就退出了 其中一个不为空应该继续
    // !l1&&!l2不一样的啊 这两种判断 l1和l2都为空才是true
    // 所以搞清楚条件 
    // 只要其中一个为空就退出 不需要再进行判断了 直接挂载就行 
    // 因为是有顺序的 而且肯定是比前面的节点都打
    // 只要一个出现空 就终止 因为链表是有序的
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            cur.next = l1
            // 不是替换当前cur注意了 是替换next的指向 因为cur替换掉指向了
            // 那么他之前所指向的地址就变化了
            l1 = l1.next // l1指针往右走一个节点
        } else {
            cur.next = l2 // l2=>{val,next} 我们会对这个next做操作 next又是一个{val,next}
            l2 = l2.next
        }
        // 这里的cur是其它节点 我们要进行l1.val l2.val比较后重新进行赋值的
        cur = cur.next // ==>cur指针走一个节点
    }
    // 存在长短链表情况
    // 这时候直接挂载上去就行 已经排好序了，不需要再进行比较了
    // 要么l1 为null 要么l2 l2为null直接挂载l1上cur.next上
    cur.next = l1 === null ? l2 : l1
    return preHead.next // 通过头结点指向排序好的单链表
}




const l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}

const l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}

mergeTwoLists(l1, l2)