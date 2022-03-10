/*
 * @Author: zhouzhishou
 * @Date: 2022-02-11 22:04:01
 * @Description: 
 */
// 二叉堆的逻辑结构就是一棵完全二叉树 ，也叫完全二叉堆
// 鉴于完全二叉树的一些特征，二叉堆的底层（物理结构）一般用数组实现即可
// 索引 i的规律
// 如果i = 0 他是根节点
// 如果i>0 他的父节点索引为floor((i-1)/2)
// 如果2i+1<=n-1 他的左子节点索引为2i+1 (n为元素数量 i为节点索引）
// 如果2i+1>n-1 他没有左子节点 (n为元素数量 i为节点索引）
import { IHeap } from "../../util/TreeNode";

type ICompareFn<T> = (a: T, b: T) => number;

enum CompareResult {
    LESS_THAN = -1,
    EQUAL = 0,
    BIGGER_THAN = 1
}

function defaultCompare<T>(a: T, b: T): number {
    if (a === b) return CompareResult.EQUAL;
    if (a > b) return CompareResult.BIGGER_THAN;
    if (a < b) return CompareResult.LESS_THAN;
}

class BinaryHeap<T> implements IHeap<T> {
    private elements: T[] = []
    length: number = 0
    compareFn: ICompareFn<T>; // 节点值的比较函数
    constructor(elements: T[] = [], compareFn = defaultCompare) {
        this.compareFn = compareFn;
        if (elements.length > 0) {
            this.length = elements.length
            for (let i = 0; i < elements.length; i++) {
                this.elements[i] = elements[i]
            }
            this.heapify()
        }
    }
    clear() {
        for (let i = 0; i < this.length; i++) {
            this.elements[i] = null
        }
        this.length = 0
    }
    add(element: T) {
        this.elementNotNullCheck(element)
        // 如果node>父节点 -> 与父节点交换位置
        // 如果node <=父节点 或者node没有父节点 -> 退出循环
        this.elements[this.length++] = element
        this.siftUp(this.length - 1)
    }
    get(): T {
        return this.elements[0]
    }
    // 删除堆顶元素
    remove() {
        if (this.length === 0) return null;
        //  1. 删除最后一个元素，堆顶元素替换成最后一个元素
        let root = this.elements[0]
        this.elements[0] = this.elements.pop()
        this.length--
        this.siftDown(0)
        return root
    }
    // 删除堆顶元素的同时插入一个新元素
    replace(element: T) {
        this.elementNotNullCheck(element)
        let root = null
        if (this.length === 0) {
            this.elements[0] = element
            this.length++
        } else {
            root = this.elements[0]
            this.elements[0] = element
            this.siftDown(0)
        }
        return root
    }
    size() {
        return this.length
    }
    isEmpty() {
        return this.length === 0
    }
    protected elementNotNullCheck(element: T) {
        if (element === null) {
            throw new Error('element must not be null')
        }
    }
    // 向上筛选 
    protected siftUp(index: number) {
        let ele: T = this.elements[index] // 添加的元素
        while (index > 0) {
            let pIndex: number = Math.floor((index - 1) / 2) // 父元素的索引
            let pEle: T = this.elements[pIndex] //父元素
            if (this.compareFn(ele, pEle) <= 0) break;
            this.elements[index] = pEle
            index = pIndex
        }
        this.elements[index] = ele
    }
    // 向下筛选
    protected siftDown(index: number) {
        let ele = this.elements[index]
        let half: number = Math.floor(this.length / 2)
        // 第一个叶子节点的索引 = 非叶子节点的数量 = Math.floor(n/2)
        // 完全二叉树的第一个叶子节点后面全部是叶子节点
        // 存在子节点就进入循环
        while (index < half) {
            // 1. 有左子节点 2. 有左右子节点
            let leftIndex = 2 * index + 1 // 左子节点
            let leftElement = this.elements[leftIndex]
            let rightIndex = leftIndex + 1
            let rightElement = this.elements[rightIndex]
            if (rightIndex < this.length && this.compareFn(rightElement, leftElement) > 0) {
                // 右子节点>左子节点
                leftElement = rightElement
                leftIndex = rightIndex

            }
            if (this.compareFn(leftElement, ele) <= 0) break;
            this.elements[index] = leftElement
            index = leftIndex
        }
        this.elements[index] = ele
    }
    private heapify() {
        // 自上而下上滤
        // for(let i=1; i<this.length;i++){
        //     this.siftUp(i)
        // }
        // 自下而上下滤
        for (let i = Math.floor(this.length / 2) - 1; i >= 0; i--) {
            this.siftDown(i)
        }
    }
}

// 批量建堆

let data = [1, 3, 657, 878, 78, 4353, 237, 78, 6, 8, 3646,]
// 自上而下上滤
// for(let i=1; i<length;i++){
//     siftUp(i)
// }
// 自下而上下滤
// for(let i=Math.floor(length / 2)-1;i>=0;i--){
//     siftDown(i)
// }

export default BinaryHeap