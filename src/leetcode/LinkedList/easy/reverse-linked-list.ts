/*
 * @Author: zhouzhishou
 * @Date: 2021-05-08 15:33:52
 * @LastEditTime: 2022-02-17 22:52:25
 * @Description: https://leetcode-cn.com/problems/reverse-linked-list/ 206. 反转链表
 */

interface INode {
  val: number;
  next: INode;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const reverseList = function(head: INode): INode {
  if (head === null || head.next === null) return head;
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

import { ListNode, IListNode} from './ListNode'

let node5 = new ListNode<number>(5, null)
let node4 = new ListNode<number>(4, node5)
let node3 = new ListNode<number>(3, node4)
let node2 = new ListNode<number>(2, node3)
let node1 = new ListNode<number>(1, node2)

function reverseList1<T>(head: IListNode<T>):IListNode<T>{
  if(head === null || head.next === null) return head
  let newHead = null
  while(head !== null){
    let temp = head.next
    head.next = newHead
    newHead = head
    head = temp
  }
  return newHead
}

console.log(reverseList1(node1), '111sss');
