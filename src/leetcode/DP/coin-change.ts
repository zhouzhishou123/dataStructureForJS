/*
 * @Author: zhouzhishou
 * @Date: 2022-03-17 14:09:17
 * @LastEditTime: 2022-03-17 15:21:57
 * @Description: 322. 零钱兑换 https://leetcode-cn.com/problems/coin-change/
 */



class CoinChange {
    /**
  * @param {number[]} coins
  * @param {number} amount
  * @return {number}
  */
    coinChange(coins: number[], amount: number): number {
        if (coins.length === 0 || amount <= 0) return 0
        let dp: number[] = []
        dp[0]=0
        for (let i = 1; i <= amount; i++) {
            let min = Number.MAX_VALUE
            for (let face = 0; face < coins.length; face++) {
                if (i < coins[face]) continue
                if (dp[i - coins[face]] < 0 || dp[i - coins[face]] >= min) continue
                min = dp[i - coins[face]]
            }
            if (min === Number.MAX_VALUE) {
                dp[i] = -1
            } else {
                dp[i] = min + 1
            }
        }
        return dp[amount]
    };
}


console.log(new CoinChange().coinChange([1, 2, 5], 11));

/** coins = [1, 2, 5] amount = 11
 * 定义状态
    dp(n) 可以凑成n分所需的最少的硬币个数
    //初始化状态
    dp(0) = 0
    // 状态转移方程
    最后一次选1分的硬币 可以凑成n-1分所需的最少的硬币个数 dp(n-1)
    最后一次选2分的硬币 可以凑成n-1分所需的最少的硬币个数 dp(n-2)
    最后一次选5分的硬币 可以凑成n-1分所需的最少的硬币个数 dp(n-5)
    dp(n) = Math.min(dp(n-1),dp(n-2),dp(n-5)) + 1
 */

export default CoinChange