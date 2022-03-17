/*
 * @Author: zhouzhishou
 * @Date: 2022-03-17 15:35:12
 * @LastEditTime: 2022-03-17 16:42:45
 * @Description: 70. 爬楼梯 https://leetcode-cn.com/problems/climbing-stairs/
 */

class ClimbingStairs {
    climbingStairs(n: number) {
        if (n <= 0) return n
        let dp: number[] = []
        dp[1] = 1
        dp[2] = 2
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2]
        }
        return dp[n]
    }
}
console.log(new ClimbingStairs().climbingStairs(3));


/**
 * 定义状态
    dp(n) 爬到n阶的方法种数
    最后一次爬了一个台阶到达n层 dp(n-1) 
    最后一次爬了两个台阶到达n层 dp(n-2)

    dp(n) = dp(n-1)+ dp(n-2)


 */