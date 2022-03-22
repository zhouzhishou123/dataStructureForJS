/*
 * @Author: zhouzhishou
 * @Date: 2022-02-18 16:25:23
 * @LastEditTime: 2022-02-18 17:04:12
 * @Description: 1290. 二进制链表转整数 https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 */

/**
 * 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。
 * 请你返回该链表所表示数字的 十进制值 。
 */

import { ListNode, IListNode } from '../ListNode'

let node3 = new ListNode<number>(0, null)
let node2 = new ListNode<number>(0, node3)
let node1 = new ListNode<number>(1, node2)



function getDecimalValue<T>(head: IListNode<T>):number{
    if(head === null) return 0
    let arr=[]
    let node = head
    while(node !== null){
        arr.push(node.val)
        node = node.next
    }
    let sum = 0
    for(let i=0; i < arr.length; i++){
          sum += arr[i] * Math.pow(2, arr.length-1-i)
    }
    return sum
}
console.log(getDecimalValue(node1), '313213212');