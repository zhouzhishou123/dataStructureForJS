/*
 * @Author: zhouzhishou
 * @Date: 2022-03-23 02:44:55
 * @Description: https://leetcode-cn.com/problems/palindrome-linked-list/
 */

import { ListNode } from './ListNode'

// let node5 = new ListNode(2, null)
// let node4 = new ListNode(5, node5)
// let node3 = new ListNode(1, null)
// let node6 = new ListNode(2, node3)
let node2 = new ListNode(3, null)
let node1 = new ListNode(1, node2)

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null || head.next === null) return true
    if (head.next.next === null) return head.val === head.next.val
    // 找到中间节点（下一个节点是对称另一半的开始节点）
    let middleNode = midNode(head)
    // 反转右边的链表
    let rHead = reverseList(middleNode.next)
    let lHead = head
    let rHeadOld = rHead

    let result = true
    while (rHead !== null) {
        if (rHead.val !== lHead.val) {
            result = false
            break
        }
        rHead = rHead.next
        lHead = lHead.next
    }
    //恢复右半部分
    reverseList(rHeadOld)

    return result
};


function midNode(head){
    let slow = head
    let fast = head
    while (fast.next !== null && fast.next.next !==null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}


// function midNode(head) {
//     let node = head
//     let length = 0
//     while (node !== null) {
//         length++
//         node = node.next
//     }
//     // 查找mid
//     node = head
//     let mid = (length % 2 === 0) ? (length >> 1) - 1 : length >> 1

//     for (let i = 0; i < mid; i++) {
//         node = node.next
//     }
//     return node
// }

function reverseList(head) {
    if (head === null || head.next === null) return head
    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}
