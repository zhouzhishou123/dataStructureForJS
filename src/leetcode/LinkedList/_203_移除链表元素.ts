/*
 * @Author: zhouzhishou
 * @Date: 2022-03-22 19:54:42
 * @Description: https://leetcode-cn.com/problems/remove-linked-list-elements/
 */

import {ListNode} from './ListNode'

let _node6 = new ListNode(6, null)
let node5 = new ListNode(5, _node6)
let node4 = new ListNode(4, node5)
let node3 = new ListNode(3, node4)
let node6 = new ListNode(6, node3)
let node2 = new ListNode(2, node6)
let node1 = new ListNode(1, node2)

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
     if(head === null) return null
     let newHead = new ListNode(0)
     let newTail = newHead

    while(head !== null){
        if(head.val!==val){
            newTail.next = head
            newTail = head
        }
        head = head.next
    }
    newTail.next = null
    return newHead.next
};

console.log(removeElements(node1, 6));
