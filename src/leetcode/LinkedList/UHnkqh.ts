import { reverseList } from './reverse-linked-list';
/*
 * @Author: zhouzhishou
 * @Date: 2022-02-16 12:33:48
 * @LastEditTime: 2022-02-17 17:30:28
 * @Description:  剑指 Offer II 024. 反转链表 https://leetcode-cn.com/problems/UHnkqh/
 */
import { ListNode, IListNode} from './ListNode'


// 1-> 2-> 3-> 4-> 5
let node5 = new ListNode<number>(5, null)
let node4 = new ListNode<number>(4, node5)
let node3 = new ListNode<number>(3, node4)
let node2 = new ListNode<number>(2, node3)
let node1 = new ListNode<number>(1, node2)

// 递归

 function reverseList1<T>(head:IListNode<T>) :IListNode<T>{
    if(head === null || head.next === null) return head
    let newHead = reverseList1(head.next)
    head.next.next = head;
    head.next = null;
    return newHead;
};

// 非递归

function reverseList2<T>(head:IListNode<T>) :IListNode<T>{
    if(head === null || head.next === null) return head
    let newHead = null
    while(head!==null){
        let temp = head.next
        head.next = newHead
        newHead = head
        head = temp
    }
    return newHead
}
console.log(reverseList1(node1));

