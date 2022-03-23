/*
 * @Author: zhouzhishou
 * @Date: 2022-03-23 20:52:52
 * @Description: https://leetcode-cn.com/problems/add-two-numbers/
 */

import { ListNode } from './ListNode'

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    // 进位
    let carry = 0
    // 虚拟头节点
    let head = new ListNode(0)
    let tail = head
    while (l1!==null || l2!==null) {
        let val1 = 0
        let val2 = 0
        if (l1) {
            val1 = l1.val
            l1 = l1.next
        }
        if (l2) {
            val2 = l2.val
            l2 = l2.next
        }
        let val = (val1 + val2 + carry) % 10
        carry = Math.floor((val1 + val2 + carry) / 10)
        let newNode = new ListNode(val)
        tail.next = newNode
        tail = newNode
    }
    if(carry){
        tail.next = new ListNode(carry)
    }    
    return head.next
};


let l7 = new ListNode(7)
let l3 = new ListNode(3, l7)
let l4 = new ListNode(4, l3)
let l2 = new ListNode(2, l4)


let _l4 = new ListNode(4)
let l6 = new ListNode(6, _l4)
let l5 = new ListNode(5, l6)


addTwoNumbers(l5,l2)