/*
 * @Author: zhouzhishou
 * @Date: 2022-02-17 17:35:41
 * @LastEditTime: 2022-02-17 17:58:48
 * @Description: 面试题 02.03. 删除中间节点 https://leetcode-cn.com/problems/delete-middle-node-lcci/
 */

import { ListNode, IListNode} from './ListNode'

// 4-> 5-> 1-> 9-> null
let node4 = new ListNode<number>(9, null)
let node3 = new ListNode<number>(1, node4)
let node2 = new ListNode<number>(5, node3)
let node1 = new ListNode<number>(4, node2)

 function deleteNode<T>(node:IListNode<T>):void {
     if(node === null) return
     if(node.next === null) node = null
     let nextNode = node.next
     node.val = nextNode.val
     node.next = nextNode.next
};