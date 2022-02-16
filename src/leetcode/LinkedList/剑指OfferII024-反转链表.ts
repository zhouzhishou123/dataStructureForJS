import { reverseList } from './reverse-linked-list';
/*
 * @Author: zhouzhishou
 * @Date: 2022-02-16 12:33:48
 * @LastEditTime: 2022-02-16 16:09:28
 * @Description:  剑指 Offer II 024. 反转链表 https://leetcode-cn.com/problems/UHnkqh/
 */
import { ListNode, IListNode} from './ListNode'

let node5 = new ListNode<number>(5, null)
let node4 = new ListNode<number>(4, node5)
let node3 = new ListNode<number>(3, node4)
let node2 = new ListNode<number>(2, node3)
let node1 = new ListNode<number>(1, node2)

// 递归

 function reverseList1<T>(head:IListNode<T>) :IListNode<T>{
     debugger
    if(head === null || head.next === null) return head
    let newHead = reverseList1(head.next)
    head.next.next = head;
    head.next = null;
    return newHead;
};
