/*
 * @Author: zhouzhishou
 * @Date: 2022-03-16 12:42:17
 * @LastEditTime: 2022-03-16 15:57:05
 * @Description: 53. 最大子数组和 https://leetcode-cn.com/problems/maximum-subarray/
 */


let _nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]



/** nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 一、定义状态
    dp[i]: 以nums[i]结尾的最大数组和
        1. 以nums[0] -2结尾的最大数组和是 -2
        2. 以nums[1] 1结尾的最大数组和是 nums[1] = 1
        3. 以nums[2] -3结尾的最大数组和是 dp[1] +nums[2] = -2
        4. 以nums[3] 4结尾的最大数组和是 nums[3] = 4
        5. 以nums[4] -1结尾的最大数组和是 dp[3]+nums[4] = 3
        6. 以nums[5] 2结尾的最大数组和是 dp[4] + nums[5] = 5
        7. 以nums[6] 1结尾的最大数组和是 dp[5]+ nums[5] = 6
        8. 以nums[7] -5结尾的最大数组和是 dp[6]+nums[6] = 1
        9. 以nums[8] 4结尾的最大数组和是 dp[7]+nums[7] = 5
    二、初始化状态
        dp[0] = -2
    三、状态转移方程
        dp[i-1]>0 dp[i] = dp[i-1] + nums[i]
        dp[i-1]<=0 dp[i] = nums[i]
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums: number[]): number {
    if (nums.length === 0) return 0
    let dp: number = nums[0]
    let maxDp = dp
    for (let i = 1; i < nums.length; i++) {
        if (dp > 0) {
            dp= dp + nums[i]
        } else {
            dp= nums[i]
        }
        // 求所有dp中的最大值
        maxDp = Math.max(maxDp, dp)
    }
    return maxDp
};

/**
 * 求 nums的最大值 [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    一、定义状态
    以nums[i]结尾的最大值
    1. 以nums[0] -2结尾的最大值是 -2
    2. 以nums[1] 1结尾的最大值是 nums[1] = 1
    3. 以nums[2] -3结尾的最大值是 dp[1] = 1
    4. 以nums[3] 4结尾的最大值是 nums[3] = 4
    5. 以nums[4] -1结尾的最大值是 dp[3] = 4
    6. 以nums[5] 2结尾的最大值是 dp[3] = 4
    7. 以nums[6] 1结尾的最大值是 dp[3] = 4
    8. 以nums[7] -5结尾的最大值是 dp[3] = 4
    9. 以nums[8] 4结尾的最大值是 dp[3] = 4
 */

function max(nums: number[]) {
    if (nums.length === 0) return 0
    // 初始化状态
    let dp: number[] = []
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < dp[i - 1]) {
            dp[i] = dp[i - 1]
        } else {
            dp[i] = nums[i]
        }
    }    
    return dp[nums.length - 1]
}

