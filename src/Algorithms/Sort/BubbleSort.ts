/*
 * @Author: zhouzhishou
 * @Date: 2022-03-09 23:29:02
 * @Description: 冒泡排序
 */

import Sort from './Sort'

class BubbleSort extends Sort {
    sort(): void {
        /**
         * 循环比较到最后一个元素之后每次缩小一个直到索引为1的元素
         */
        for (let end = this.array.length - 1; end > 0; end--) {
            // 已经排好序的第一个元素的索引
            let sortedIndex = 0;
            /**
             * 起点从1开始比较直到最后一个
             */
            for (let begin = 1; begin <= end; begin++) {
                if (this.comparison(begin - 1, begin) > 0) {
                    this.swap(begin - 1, begin)
                    sortedIndex = end
                }
            }
            end = sortedIndex
        }
    }
}

export default BubbleSort
