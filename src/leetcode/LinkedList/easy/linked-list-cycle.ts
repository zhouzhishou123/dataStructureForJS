/*
 * @Author: zhouzhishou
 * @Date: 2021-05-08 16:41:18
 * @LastEditTime: 2021-05-08 16:56:34
 * @Description: https://leetcode-cn.com/problems/linked-list-cycle/ 141. 环形链表
 */

// interface INode {
//     val: number;
//     next: INode;
//   }

//   function ListNode(val: number, next: INode) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head ===null || head.next === null) return false;
    let slow = head
    let fast = head.next
    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
};
