/*
 * @Author: zhouzhishou
 * @Date: 2022-03-13 17:38:58
 * @Description: 35. 搜索插入位置 https://leetcode-cn.com/problems/search-insert-position/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums: number[], target: number): number {
    let begin = 0
    let end = nums.length
    let mid = 0
    while (end > begin) {
        mid = (end + begin) >> 1
        if (nums[mid] > target) {
            end = mid
        } else if (nums[mid] < target) {
            begin = mid + 1
        } else {
            return mid
        }
    }
    if (nums[mid] > target) return mid
    if (nums[mid] < target) return mid + 1
};
