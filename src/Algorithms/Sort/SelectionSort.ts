/*
 * @Author: zhouzhishou
 * @Date: 2022-03-09 23:29:21
 * @Description: 选择排序
 */
import Sort from './Sort'

class SelectionSort extends Sort {
    sort(): void {
        for (let end = this.array.length - 1; end > 0; end--) {
            // 假设最大值是第一个元素
            let maxIndex = 0
            // 遍历一次选择一个最大值
            for (let begin = 1; begin <= end; begin++) {
                if (this.comparison(maxIndex, begin) < 0) {
                    maxIndex = begin
                }
            }
            // 最大值和最后一个元素交换
            this.swap(maxIndex, end)
        }
    }

}

export default SelectionSort