/*
 * @Author: zhouzhishou
 * @Date: 2022-03-24 13:10:15
 * @LastEditTime: 2022-03-24 13:47:34
 * @Description: https://leetcode-cn.com/problems/remove-element/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums:number[], val:number):number {
    let size = nums.length
    let end = nums.length - 1
    let cur = nums.length - 1
    while (end >= 0) {
        if (nums[end] === val) {
            if (cur === end) {
                size--
                cur--
                end--
            } else {
                [nums[end], nums[cur]] = [nums[cur], nums[end]]
                size--
                cur--
            }
        } else {
            end--
        }
    }
    return size
};

