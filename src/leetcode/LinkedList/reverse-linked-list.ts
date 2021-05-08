/*
 * @Author: zhouzhishou
 * @Date: 2021-05-08 15:33:52
 * @LastEditTime: 2021-05-08 16:58:36
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
export const reverseList = function(head: INode): INode {
  if (head === null || head.next === null) return head;
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

