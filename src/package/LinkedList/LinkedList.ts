/*
 * @Author: zhouzhishou
 * @Date: 2021-05-08 17:27:24
 * @LastEditTime: 2021-05-11 18:43:09
 * @Description: 循环链表
 */

import List from "../List";

interface INode<T> {
  element: T;
  next: INode<T>;
  prev: INode<T>
}

class Node<T> {
  element: T;
  prev: INode<T>;
  next: INode<T>;
  constructor(element: T, prev: INode<T>, next: INode<T>) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList<T> implements List<T> {
  length: number = 0; // 链表元素数量
  first: INode<T>; // 指向第一个元素
  last: INode<T>;
  /**
   * 清空链表元素
   */
  clear(): void {
    this.length = 0;
    this.first = null;
    this.last = null
  }
  indexOf(element: T): number {
    let node: INode<T> = this.first;
    for (let i = 0; i < this.length; i++) {
      if (node.element === element) {
        return i;
      }
      node = node.next;
    }
    return -1;
  }
  size(): number {
    return this.length;
  }
  isEmpty(): boolean {
    return this.length === 0;
  }
  includes(element: T): boolean {
    return this.indexOf(element) >= 0;
  }
  /**
   * 在index处添加元素
   */
  add(index: number, element: T) {
      if(index === this.length){
          let oldLast = this.last
          let last = new Node(element,oldLast,null)
          if(oldLast === null){
              this.first = last
          }else {
            oldLast.next = last
          }
      }else {
        let next:INode<T> = this.getNode(index)
        let prev = next.prev
        let node = new Node(element,prev,next)
        next.prev = node
        if(prev === null){
            this.first = node
        }else{
            prev.next = node
        }
      }
    this.length++;
  }
  remove(index: number) {
    this.rangeCheck(index);
    let node = this.getNode(index)
    let prev = node.prev
    let next = node.next
    if(prev === null){
        this.first = next
    }else{
        prev.next = next
    }
    if(next === null){
        this.last = prev
    }else {
        next.prev = prev
    }
    this.length--;
    return node.element;
  }
  /**
   * 获取链表中索引index处的元素
   */
  get(index: number): T {
    return this.getNode(index).element;
  }
  set(index: number, element: T) {
    let node: INode<T> = this.getNode(index);
    let oldElement = node.element;
    node.element = element;
    return oldElement;
  }
  rangeCheck(index: number) {
    if (index < 0 || index >= this.length) {
      throw new RangeError(`Parameter must be between 0 and ${this.length}`);
    }
  }
  /**
   * 获取index位置对应的节点
   */
  getNode(index: number): INode<T> {
    this.rangeCheck(index);

    if (index < this.length >> 1) {
      let node: INode<T> = this.first;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    } else {
        let node:INode<T> = this.last
        for(let i=this.length-1; i > index; i--){
            node = node.prev
        }
        return node
    }
  }
  toString(): string {
    let node = this.first;
    let str = "";
    for (let i = 0; i < this.length; i++) {
      str += node.element + "-";
      node = node.next;
    }
    return str;
  }
}

export default LinkedList;
