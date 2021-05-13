/*
 * @Author: zhouzhishou
 * @Date: 2021-05-08 16:42:35
 * @LastEditTime: 2021-05-08 16:42:52
 * @Description: 
 */

export interface INode {
    val: number;
    next: INode;
  }
  
  export function ListNode(val: number, next: INode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }