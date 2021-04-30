/*
 * @Author: zhouzhishou
 * @Date: 2021-04-30 15:20:38
 * @LastEditTime: 2021-04-30 16:47:30
 * @Description: 链表
 */

import List from '../List'

interface INode<T> {
    element: T
    next: INode<T>
}

class _Node<T> {
    element:T
    next:INode<T>
    constructor(element:T, next:INode<T>){
        this.element = element
        this.next = next
    }
}

class LinkedList<T> implements List<T> {
    length:number
    first: INode<T>
    clear() {

    }
    indexOf(element:T){
        return -1
    }
    size () {
        return this.length
    }
    isEmpty(){
        return this.length === 0
    }
    includes(){
        return true
    }
}