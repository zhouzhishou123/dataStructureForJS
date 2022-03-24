/*
 * @Author: zhouzhishou
 * @Date: 2022-03-24 12:30:55
 * @LastEditTime: 2022-03-24 13:03:28
 * @Description: https://leetcode-cn.com/problems/majority-element/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length === 0) return -1
    let half = nums.length >> 1
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }else {
            map.set(nums[i], 1)
        }
        if(map.get(nums[i]) > half) return nums[i]
    }
};
