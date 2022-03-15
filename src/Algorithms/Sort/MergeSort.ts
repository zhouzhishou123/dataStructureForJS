/*
 * @Author: zhouzhishou
 * @Date: 2022-03-13 15:51:08
 * @Description: 归并排序
 */

import Sort from './Sort'

class MergeSort extends Sort {
    protected sort(): void {
        this.mergeSort(0, this.array.length)
    }
    /**
     * @param {number} begin
     * @param {number} end
     * @return {*}
     * @Description: 对[begin, end]
     */
    mergeSort(begin: number, end: number): void {
        // 分割成一个元素
        if (end - begin < 2) return
        let mid = (begin + end) >> 1
        // 对左一半进行分割直到分割成一个元素
        this.mergeSort(begin, mid)
        // 对右一半进行分割直到分割成一个元素
        this.mergeSort(mid, end)

        // 对分割的元素排序合并
        this.merge(begin, mid, end)
    }
    merge(begin: number, mid: number, end: number) {
        let li = 0, le = mid - begin
        let ri = mid, re = end
        let ai = begin
        // 备份左半部分的数据
        let leftArray = []
        for (let i = li; i < le; i++) {
            leftArray[i] = this.array[begin + i]
        }
        while (li < le) {
            if (ri < re && this.array[ri] - leftArray[li] < 0) {
                this.array[ai++] = this.array[ri++]
            } else {
                this.array[ai++] = leftArray[li++]
            }
        }
    }
}

export default MergeSort
