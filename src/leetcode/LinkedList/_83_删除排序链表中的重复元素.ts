/*
 * @Author: zhouzhishou
 * @Date: 2022-03-24 16:08:17
 * @LastEditTime: 2022-03-24 16:48:07
 * @Description: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

import { ListNode } from './ListNode'

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return head
    let cur = null
    let newHead = new ListNode(0), newTail = newHead
    while (head !== null) {
        if (head.val !== cur) {
            cur = head.val
            newTail.next = head
            newTail = head
        }
        head = head.next
    }
    newTail.next = null
    return newHead.next
};


let node5 = new ListNode(3, null)
let node4 = new ListNode(3, node5)
let node3 = new ListNode(3, node4)
let node6 = new ListNode(2, null)
let node2 = new ListNode(1, node6)
let node1 = new ListNode(1, node2)
