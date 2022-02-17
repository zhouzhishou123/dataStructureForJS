/*
 * @Author: zhouzhishou
 * @Date: 2022-02-17 22:54:42
 * @Description: 876. 链表的中间结点 https://leetcode-cn.com/problems/middle-of-the-linked-list/
 */

import { ListNode, IListNode} from './ListNode'

// 1-> 2-> 3-> 4-> 5
let node4 = new ListNode<number>(-4, null)
let node3 = new ListNode<number>(0, node4)
let node2 = new ListNode<number>(2, node3)
let node1 = new ListNode<number>(3, node2)
node4.next = node2

 function middleNode<T>(head:IListNode<T>):IListNode<T> {
     // 遍历链表的长度
     let length:number = 0
     let node:IListNode<T> = head
     let index:number = 0
     while(node !== null){
         node = node.next
         length++
     }
     index = Math.floor(length / 2)
     function getNode<T>(head:IListNode<T>,index:number):IListNode<T>{
         let node:IListNode<T> = head
         for(let i=0; i<index;i++){
            node = node.next
         }
         return node
     }
     return getNode(head, index)
};

