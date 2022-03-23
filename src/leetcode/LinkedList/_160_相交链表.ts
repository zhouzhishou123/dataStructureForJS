/*
 * @Author: zhouzhishou
 * @Date: 2022-03-24 00:31:56
 * @Description: https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */

import { ListNode } from './ListNode'

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null) return headA
    if (headB === null) return headB
    let curA = headA, curB = headB
    while (curA !== curB) {
        if (curA === curB) return curA
        curA = curA === null ? headB : curA.next
        curB = curB === null ? headA : curB.next
    }
    return curA
};






let c3 = new ListNode('5', null)
let c2 = new ListNode('4', c3)
let c1 = new ListNode('8', c2)
let b3 = new ListNode('1', c1)
let b2 = new ListNode('6', b3)
let b1 = new ListNode('5', b2)


let a2 = new ListNode('1', c1)
let a1 = new ListNode('4', a2)
console.log(getIntersectionNode(a1, b1));