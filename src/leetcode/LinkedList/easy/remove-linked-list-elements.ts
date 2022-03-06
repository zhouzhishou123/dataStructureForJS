/*
 * @Author: zhouzhishou
 * @Date: 2022-02-18 12:38:13
 * @LastEditTime: 2022-02-18 15:15:12
 * @Description: 203. 移除链表元素 https://leetcode-cn.com/problems/remove-linked-list-elements/
 */
/**
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 */

import { ListNode, IListNode } from './ListNode'


// 1-> 2-> 3-> 4-> 5
let node7 = new ListNode<number>(6, null)
let node6 = new ListNode<number>(5, node7)
let node5 = new ListNode<number>(4, node6)
let node4 = new ListNode<number>(3, node5)
let node3 = new ListNode<number>(6, node4)
let node2 = new ListNode<number>(2, node3)
let node1 = new ListNode<number>(1, node2)

/**
 * 1. 找到值为val的节点修改它的val和指针指向 TODO
 */
const removeElements1 = function <T>(head: IListNode<T>, val: T): IListNode<T> {
    if (head === null) return head
    let node: IListNode<T> = head
    while (node !== null) {
        if (node.val === val) {
            let nextNode = node.next
            if (nextNode === null) {
                node = null
                return head
            }
            while (node.val === nextNode.val) {
                nextNode = nextNode.next
            }
            node.val = nextNode.val
            node.next = nextNode.next
        };
        node = node.next
    }
    // 没有找到值为val的节点
    if (node === null) return head
    // 被删除的是头节点
    if (node === head) {
        head = head.next
        return head
    }
};
