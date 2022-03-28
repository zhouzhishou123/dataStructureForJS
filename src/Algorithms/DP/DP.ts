/*
 * @Author: zhouzhishou
 * @Date: 2022-03-15 20:32:50
 * @Description: 动态规划
 */


/**
 * 一、动态规划的常规步骤
 * 1. 定义状态（状态是原问题，子问题的解）
 *    比如定义dp(i)的含义  
 * 2.设置初始状态
 *    比如设置dp(0)的值
 * 3.确定状态转移方程
 *    比如确定dp(i)和dp(i-1)的关系
 * 
 * 二、可以用动态规划来解决的问题通常具备两个特点
 * 1. 最优子结构（最优化原理）: 通过求解子问题的最优解可以获得原问题的最优解
 * 2. 无后效性：某阶段的状态一旦确定，则此后过程的演变不再受此前各状态及决策的影响（未来与过去无关）
 * 
 */

/**
 * 
 * 1. 给定一个长度为n的整数序列，求他的最大连续子序列和 -2 1 -3 4 -1 2 1 -5 4
 * - 定义状态
 *   - 假设dp(i)是以nums[i]结尾的最大连续子序列和(nums是整个序列)
 *   - 以nums[0]-2结尾的最大连续子序列和是-2
 */



/**
 * 1. 最长上升子序列 [10 2 2 5 1 7 101 18]最长上升子序列是[2,5,7,101] [2,5,7,18] 长度为4
 * - 定义状态
 *   - 假设dp(i)是以nums[i]结尾的最大上升子序列长度(nums是整个序列)
 *  -  以nums[0] 10结尾的最长上升子序列长度是1
 */