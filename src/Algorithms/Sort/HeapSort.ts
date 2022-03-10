/*
 * @Author: zhouzhishou
 * @Date: 2022-03-09 23:29:34
 * @Description: 堆排序
 */

import Sort from './Sort'

class HeapSort extends Sort {
    heapSize: number
    sort(): void {
        this.heapSize = this.array.length
        // 对序列批量建堆
        this.heapify()
        while (this.heapSize > 1) {
            // 交换堆顶元素与尾元素   
            this.swap(0, --this.heapSize)
            this.siftDown(0)
        }
    }
    heapify() {
        for (let i = ((this.array.length >> 1) - 1); i >= 0; i--) {
            this.siftDown(i)
        }
    }
    siftDown(index: number) {
        let element = this.array[index]
        // 第一个叶子节点的索引
        let leafIndex = Math.floor(this.array.length >> 1)
        while (index < leafIndex) {
            let leftNodeIndex = (index << 1) + 1
            let leftNode = this.array[leftNodeIndex]
            let rightNodeIndex = leftNodeIndex + 1
            let rightNode = this.array[rightNodeIndex]

            // 右子节点存在并且大于左子节点
            if (rightNodeIndex < this.array.length && rightNode > leftNode) {
                leftNodeIndex = rightNodeIndex
                leftNode = rightNode
            }
            // 元素大于子节点元素直接退出
            if (element > leftNode) break
            this.array[index] = leftNode
            index = leftNodeIndex
        }
        this.array[index] = element
    }
}

export default HeapSort