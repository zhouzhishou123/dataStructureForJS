/*
 * @Author: zhouzhishou
 * @Date: 2021-05-08 16:42:35
 * @LastEditTime: 2022-02-24 15:25:41
 * @Description: 
 */

export interface ILinkedNode {
    val: number;
    next: ILinkedNode;
  }
  
  export function ListNode(val: number, next: ILinkedNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }