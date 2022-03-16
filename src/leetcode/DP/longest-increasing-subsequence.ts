/*
 * @Author: zhouzhishou
 * @Date: 2022-03-16 17:15:30
 * @LastEditTime: 2022-03-16 17:57:44
 * @Description: 300. 最长递增子序列  https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */














/**
 *  最长递增子序列的长度 nums = [10,9,2,5,3,7,101,18]
    1.定义状态
    dp[n] 以nums[i]结尾的最长递增子序列的长度
        以nums[0] 10结尾的最长递增子序列的长度 10 dp[0] = 1
        以nums[1] 9结尾的最长递增子序列的长度 9 dp[1] = 1
        以nums[2] 2结尾的最长递增子序列的长度 2 dp[2] = 1
        以nums[3] 5结尾的最长递增子序列的长度 2 5 dp[3] = 2
        以nums[4] 3结尾的最长递增子序列的长度 2 3 dp[4] = 2
        以nums[5] 7结尾的最长递增子序列的长度 2 3 7 dp[5] = 3
        以nums[6] 101结尾的最长递增子序列的长度 2 3 7 101 dp[6] = 4
        以nums[7] 18结尾的最长递增子序列的长度 2 3 7 18 dp[7] = 4
        
    2.初始化状态
        dp[0] = 1
    3. 状态转移方程
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums: number[]):number {
    if (nums.length === 0) return 0
    // 初始化状态
    const dp: number[] = []
    dp[0] = 1
    let maxLen = dp[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1
        for (let begin = 0; begin < i; begin++) {
            // 如果前面的元素都大于nums[i]则跳过
            if (nums[begin] >= nums[i]) continue
            dp[i] = Math.max((dp[begin] + 1), dp[i])
        }
        maxLen = Math.max(maxLen, dp[i])
    }
    console.log(dp);

    return maxLen
};

