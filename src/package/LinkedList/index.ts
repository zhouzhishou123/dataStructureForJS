/*
 * @Author: zhouzhishou
 * @Date: 2021-04-30 15:20:38
 * @LastEditTime: 2021-05-07 18:01:29
 * @Description: 链表
 */

import List from '../List'

interface INode<T> {
    element: T
    next: INode<T>
}

class Node<T> {
    element:T
    next:INode<T>
    constructor(element:T, next:INode<T>){
        this.element = element
        this.next = next
    }
}

class LinkedList<T> implements List<T> {
    length:number // 链表元素数量
    first: INode<T> // 指向第一个元素
    /**
     * 清空链表元素
     */
    clear():void {
        this.length = 0;
        this.first = null
    }
    indexOf(element:T):number{
        return -1
    }
    size ():number {
        return this.length
    }
    isEmpty():boolean{
        return this.length === 0
    }
    includes(element:T):boolean{
        return this.indexOf(element) >= 0
    }
    push(element:T){
        
    }
    /**
     * 在index处添加元素
     */
    add(index:number, element:T){
        if(index===0){
            this.first = new Node(element, this.first)
        }else{
            const prevNode:INode<T> = this.getNode(index-1)
            prevNode.next = new Node(element, prevNode.next)
        }
        this.length++
    }
    /**
     * 获取链表中索引index处的元素
     */
    get(index:number):T{
        return this.getNode(index).element
    }
    set(index:number, element:T){
        let node:INode<T> = this.getNode(index)
        let oldElement = node.element
        node.element = element
        return oldElement
    }
    /**
     * 获取index位置对应的节点
     */
    getNode(index:number):INode<T>{
        if(index < 0 || index >= this.length){
            throw new RangeError(`Parameter must be between 0 and ${this.length}`)
        }
        let node:INode<T> = this.first
        for(let i=0;i<index;i++){
            node = node.next
        }
        return node
    }
}

export default LinkedList
