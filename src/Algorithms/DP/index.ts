/*
 * @Author: zhouzhishou
 * @Date: 2022-03-14 22:36:23
 * @Description: 动态规划
 * 1. 暴力递归（自顶向下，出现了重叠子问题）
 * 2. 记忆化搜索（自顶向下）
 * 3.递推（自底向上）
 */

/**
 * 322. 零钱兑换 https://leetcode-cn.com/problems/coin-change/
 * 计算并返回可以凑成总金额所需的最少的硬币个数
 * [25, 20, 10, 5, 1] 现要找给客户41分的零钱
 * - 假设dp(n)是凑到n分所需的最少的硬币个数
 * 1. 如果第一次选择了25分的硬币，那么dp(n) = dp(n-25) + 1
 * 2. 如果第一次选择了20分的硬币，那么dp(n) = dp(n-20) + 1
 * 3. 如果第一次选择了10分的硬币，那么dp(n) = dp(n-10) + 1
 * 4. 如果第一次选择了5分的硬币，那么dp(n) = dp(n-5) + 1
 * 5. 如果第一次选择了1分的硬币，那么dp(n) = dp(n-1) + 1
 * 所以dp(n) = Math.min(dp(n-25), dp(n-20), dp(n-10), dp(n-5), dp(n-1) )+1
 */



class CoinsChange {
    /**
     * @param {number} n
     * @return {*}
     * @Description: 暴力递归（自顶向下，出现了重叠子问题）
     */
    minCoins1(n: number): number {
        if (n < 1) return Number.MAX_VALUE
        if (n === 1 || n === 5 || n === 10 || n === 20 || n === 25) return 1
        return Math.min(
            this.minCoins1(n - 25),
            this.minCoins1(n - 20),
            this.minCoins1(n - 10),
            this.minCoins1(n - 5),
            this.minCoins1(n - 1)) + 1
    }
    /**
     * @param {number} n
     * @return {*}
     * @Description: 记忆化搜索（自顶向下）
     */
    minCoins2(n: number): number {
        if (n < 1) return -1
        // dp[n]是凑到n分所需的最少的硬币个数
        const dp: number[] = []
        let coins = [1, 5, 20, 25]
        for (let i = 0; i < coins.length; i++) {
            if (n < coins[i]) break;
            dp[coins[i]] = 1
        }
        return this.coins2(n, dp)
    }
    coins2(n: number, dp: number[]): number {
        if (n < 1) return Number.MAX_VALUE
        if (dp[n] === undefined) {
            dp[n] = Math.min(
                this.coins2(n - 1, dp),
                this.coins2(n - 5, dp),
                this.coins2(n - 20, dp),
                this.coins2(n - 25, dp)
            ) + 1
        }
        return dp[n]
    }
    /**
     * @param {number} n
     * @return {*}
     * @Description: 递推（自底向上）
     */
    minCoins3(n: number): number {
        if (n < 1) return 0
        // dp[n]是凑到n分所需的最少的硬币个数
        const dp: number[] = []
        // faces[i凑够i分时最后选择的那枚硬币的面值
        const faces = []
        dp[0] = 0
        for (let i = 1; i <= n; i++) {
            let min = dp[i - 1]
            if (i >= 1 && dp[i - 1] < min) {
                // min = Math.min(dp[i - 1], min)
                min = dp[i - 1]
                faces[i] = 1
            }
            if (i >= 5 && dp[i - 5] < min) {
                // min = Math.min(dp[i - 5], min)
                min = dp[i - 5]
                faces[i] = 5
            }
            if (i >= 20 && dp[i - 20] < min) {
                //min = Math.min(dp[i - 20], min)
                min = dp[i - 20]
                faces[i] = 20
            }
            if (i >= 25 && dp[i - 25] < min) {
                //min = Math.min(dp[i - 25], min)
                min = dp[i - 25]
                faces[i] = 25
            }
            dp[i] = min + 1
        }
        this.log(faces, n)
        return dp[n]
    }
    log(faces: number[], n: number) {
        while (n > 0) {
            console.log(faces[n]);
            n -= faces[n]
        }
    }
}