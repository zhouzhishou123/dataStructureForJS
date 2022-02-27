/*
 * @Author: zhouzhishou
 * @Date: 2022-02-12 22:53:04
 * @Description: 优先级队列 底层实现堆
 */
import {IHeap} from "../../util/TreeNode";
import BinaryHeap from "../Heap/BinaryHeap";

class PriorityQueue<T> {
   private heap: IHeap<T>;
   constructor(comparator = null){
    this.heap =  new BinaryHeap([], comparator)
   }
    size(): number{
        return this.heap.size()
    }
    
    isEmpty() : boolean{
        return this.heap.isEmpty()
    }
    clear(){
        this.heap.clear()
    }
    // 入队
    enQueue(element: T){
        this.heap.add(element)
    }
    // 优先级最高的出队
    deQueue(){
       return this.heap.remove()
    }
    front(){
        this.heap.get()
    }
}

export default PriorityQueue