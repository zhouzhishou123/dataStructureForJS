/*
 * @Author: zhouzhishou
 * @Date: 2022-02-17 18:05:47
 * @LastEditTime: 2022-02-17 23:41:58
 * @Description: 剑指 Offer 18. 删除链表的节点 https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 */


// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

// // 4-> 5-> 1-> 9-> null
// let node4 = new ListNode<number>(9, null)
let node3 = new ListNode<number>(-99, null)
let node2 = new ListNode<number>(5, node3)
let node1 = new ListNode<number>(-3, node2)


import { ListNode, IListNode} from './ListNode'

function deleteNode<T>(head:IListNode<T>, val:T) {
    if(head === null) return null
    let node = head
    let index = 0
    // 找到值为val的节点的索引
     while(node !== null){
         if(node.val === val) break;
         node = node.next
         index++
     }
     // 如果链表不存在这个值
     if(node === null ) return null
     function getNode(head:IListNode<T>, index: number){
        let node = head
        for(let i=0; i<index; i++){
            node = node.next
        }
        return node
    }
    // 删除头节点
    if(index === 0){
        head = head.next
        return head
    }
     let prevNode = getNode(head,index-1)
     prevNode.next = prevNode.next.next
    return head
};