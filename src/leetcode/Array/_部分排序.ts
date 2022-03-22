/*
 * @Author: zhouzhishou
 * @Date: 2022-03-22 01:28:39
 * @Description: https://leetcode-cn.com/problems/sub-sort-lcci/
 */


/**
 * 记录扫描的最大值
 * 如果当前值小于最大值 记录它的位置
 * 
 * 记录扫描的最小值
 * 如果当前值大于最大值 记录它的位置
 */



/**
 * @param {number[]} array
 * @return {number[]} 寻找逆序对
 */
var subSort = function (array: number[]): number[] {
    if (array.length === 0) return [-1, -1]
    // 从左到右寻找逆序对
    let begin = 1, max = array[0]
    let to = -1
    while (begin < array.length) {
        if (array[begin] < max) {
            to = begin
        } else {
            max = array[begin]
        }
        begin++
    }

    if (to === -1) return [-1, -1]

    // 从左右到左寻找逆序对
    let end = array.length - 2, min = array[array.length - 1]
    let from = -1
    while (end >= 0) {
        if (array[end] > min) {
            from = end
        } else {
            min = array[end]
        }
        end--
    }
    return [from, to]
};
