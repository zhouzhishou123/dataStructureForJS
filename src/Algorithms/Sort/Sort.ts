/*
 * @Author: zhouzhishou
 * @Date: 2022-03-09 23:28:49
 * @Description: 排序抽象类
 */

abstract class Sort {
    protected array: number[] = []
    // 比较大小的次数
    private comCount: number = 0
    // 元素交换位置的次数
    private swapCount: number = 0
    constructor(arr: number[]) {
        if (arr.length === 0 || arr.length < 2) return
        this.array = arr
        this.sort()
    }
    protected abstract sort(): void
    /**
     * @param {number} i1
     * @param {number} i2
     * @return {*}
     * @Description: 比较两个元素的大小
     */
    protected comparison(i1: number, i2: number): number {
        this.comCount++
        return this.array[i1] - this.array[i2]
    }
    /**
     * @param {number} i1
     * @param {number} i2
     * @return {*}
     * @Description: 交换两个元素的位置
     */    
    protected swap(i1: number, i2: number):void {
        this.swapCount
        [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]]
    }
}

export default Sort