/*
 * @Author: zhouzhishou
 * @Date: 2022-02-18 15:16:32
 * @LastEditTime: 2022-02-18 16:25:02
 * @Description: 剑指 Offer 06. 从尾到头打印链表 https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */

/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */

import { ListNode, IListNode } from '../ListNode'


// 1-> 2-> 3-> 4-> 5
// let node7 = new ListNode<number>(6, null)
// let node6 = new ListNode<number>(5, node7)
// let node5 = new ListNode<number>(4, node6)
// let node4 = new ListNode<number>(3, node5)
let node3 = new ListNode<number>(2, null)
let node2 = new ListNode<number>(3, node3)
let node1 = new ListNode<number>(1, node2)


function reverseLinkedList<T>(head: IListNode<T>): IListNode<T>{
    if(head === null || head.next === null) return head
    let newHead = reverseLinkedList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}


/**
 * 先反转链表再打印
 */
const reversePrint1 = function<T>(head: IListNode<T>): T[] {
    const newHead = reverseLinkedList(head)
    if(newHead === null) return []
    let node = newHead
    let arr = []
    while(node !== null){
        arr.push(node.val)
        node=node.next
    }
    return arr
};

function reversePrint2<T>(head: IListNode<T>): T[] {
    if(head === null) return []
    let stack = []
    let node = head
    while(node !== null) {
        stack.unshift(node.val)
        node=node.next
    }
    return stack
}
