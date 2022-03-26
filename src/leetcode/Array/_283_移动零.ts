/*
 * @Author: zhouzhishou
 * @Date: 2022-03-25 19:09:29
 * @Description: https://leetcode-cn.com/problems/move-zeroes/
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums: number[]) {
    if (nums.length < 2) return nums
    let cur = 0
    for (let begin = 0; begin < nums.length; begin++) {
        // 遇到0跳过
        if (nums[begin] === 0) continue
        [nums[cur], nums[begin]] = [nums[begin], nums[cur]]
        cur++
    }
};

moveZeroes([0,0, 1, 0, 3, 12])