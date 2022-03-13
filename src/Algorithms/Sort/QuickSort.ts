/*
 * @Author: zhouzhishou
 * @Date: 2022-03-13 14:48:48
 * @Description: 快速排序
 */
import Sort from './Sort'

class QuickSort extends Sort {
    protected sort(): void {
        this.quickSort(0, this.array.length)
    }
    /**
     * @param {number} begin
     * @param {number} end
     * @return {*}
     * @Description: 对 [begin,end)快速排序
     */
    quickSort(begin: number, end: number): void {
        if (end - begin < 2) return
        // 先确定轴点元素的位置 [0, this.array.length]
        let pivotIndex = this.pivot(begin, end)
        // 对左序列快速排序
        this.quickSort(begin, pivotIndex)
        // 对右序列快速排序
        this.quickSort(pivotIndex + 1, end)
    }
    /**
     * @param {number} begin
     * @param {number} end
     * @return {*}
     * @Description: 将轴点元素左右的元素排序 [begin, end)
     */
    pivot(begin: number, end: number): number {
        // begin位置的元素为轴点元素保存下来
        let pivot = this.array[begin]
        end--
        // 从end位置开始搜索和轴点元素比较
        while (begin < end) {
            while (begin < end) {
                if (this.array[end] > pivot) {
                    end--
                } else { // end位置的元素大于轴点元素则覆盖begin位置的元素
                    this.array[begin] = this.array[end]
                    begin++
                    break
                }
            }

            while (begin < end) {
                // 从begin位置开始搜索和轴点元素比较
                if (this.array[begin] < pivot) {
                    begin++
                } else { // begin位置的元素大于轴点元素则覆盖end位置的元素
                    this.array[begin] = this.array[end]
                    end--
                    break
                }
            }
        }
        this.array[begin] = pivot
        return begin
    }
}
export default QuickSort