/*
 * @Author: zhouzhishou
 * @Date: 2022-03-23 02:09:34
 * @Description: 
 */

import {ListNode} from './ListNode'

// let node5 = new ListNode(2, null)
// let node4 = new ListNode(5, node5)
// let node3 = new ListNode(2, node4)
// let node6 = new ListNode(3, node3)
let node2 = new ListNode(1, null)
let node1 = new ListNode(4, null)

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
     if(head === null) return head
     // 左边链表
     let lHead = new ListNode(0)
     let lTail = lHead
     // 右边链表
     let rHead = new ListNode(0)
     let rTail = rHead

     while(head!==null){
        if(head.val < x){
            lTail.next = head
            lTail = head
        }else {
            rTail.next = head
            rTail = head
        }
         head = head.next
     }
     rTail.next = null

     lTail.next = rHead.next
     return lHead.next
};


console.log(partition(node1, 1));
