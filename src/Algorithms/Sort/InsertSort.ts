/*
 * @Author: zhouzhishou
 * @Date: 2022-03-11 13:37:55
 * @LastEditTime: 2022-03-11 18:06:04
 * @Description: 插入排序
 */

import Sort from './Sort'

class InsertSort extends Sort {

    protected sort2(): void {
        for (let begin = 1; begin < this.array.length; begin++) {
            // 从1的位置开始循环拿出这个位置的元素和之前所有位置的元素比较
            let beginEle = this.array[begin]
            // 遍历begin位置前的所有的元素如果begin位置的元素小于之前的元素则交换他们的位置
            for (let i = 0; i < begin; i++) {
                if (this.comparison(i, begin) > 0) {
                    this.swap(i, begin)
                }
            }
        }
    }
    protected sort(): void {
        for (let begin = 1; begin < this.array.length; begin++) {
            // 保存begin位置的值
            let beginEle = this.array[begin]
            let cur = begin
            for (let i = begin - 1; i >= 0; i--) {
                //从begin - 1开始搜索
                if (this.cmp(beginEle, this.array[i]) >= 0) break;
                cur--
            }
            // 能找到比beginEle大的元素
            if (cur < begin) {
                for(let i=begin;i>=cur;i--){
                    this.array[i] = this.array[i-1]
                }
                this.array[cur] = beginEle
             }
        }
    }
}

export default InsertSort




