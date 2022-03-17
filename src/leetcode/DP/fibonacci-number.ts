/*
 * @Author: zhouzhishou
 * @Date: 2022-03-17 12:35:39
 * @LastEditTime: 2022-03-17 14:25:51
 * @Description: 509. 斐波那契数 https://leetcode-cn.com/problems/fibonacci-number/
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n:number):number {
    if (n <0) return n
    // 定义状态 dp(n) 表示第n个斐波那契数
    let dp: number[] = []
    // 初始化状态
    dp[0] = 0
    dp[1] = 1
    for(let i=2;i<=n;i++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};