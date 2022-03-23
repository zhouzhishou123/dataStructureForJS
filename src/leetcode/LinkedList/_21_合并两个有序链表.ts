/*
 * @Author: zhouzhishou
 * @Date: 2022-03-23 23:19:38
 * @Description: https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

import { ListNode } from './ListNode'


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2
    if (list2 === null) return list1

    //创建一个虚拟头节点
    let virtualHead = new ListNode(0)
    let tail = virtualHead

    while (list1 !== null || list2 !== null) {
        let v1 = (list1 === null) ? Number.MAX_VALUE : list1.val
        let v2 = (list2 === null) ? Number.MAX_VALUE : list2.val
        if (v1 < v2) {
            tail.next = list1
            tail = list1
            list1 = list1.next
        } else {
            tail.next = list2
            tail = list2
            list2 = list2.next
        }
    }
    
    return virtualHead.next
};



let node4 = new ListNode(4, null)
let node2 = new ListNode(2, node4)
let node1 = new ListNode(1, node2)



let _node4 = new ListNode(4, null)
let node3 = new ListNode(3, _node4)
let _node1 = new ListNode(1, node3)

mergeTwoLists(node1, _node1)