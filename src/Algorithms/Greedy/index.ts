/*
 * @Author: zhouzhishou
 * @Date: 2022-03-14 14:44:59
 * @Description: 贪心
 */


/**
 * 假设有25分 10分 5分 1分的硬币，现要找给客户41分的零钱，如何办到硬币个数最少
 */

let coins = [10, 5, 1, 25], amount = 36

function coinChange(coins: number[], amount: number): number[] {
    if (coins.length === 0 || amount === 0) return
    // 对硬币进行降序排序 [25, 10, 5, 1]
    coins.sort((a, b) => b - a)
    let total = 0
    let i =0
    let change = []
    while(total < amount && i < coins.length){
        if(total+ coins[i] > amount){
            i++
            continue   
        }
        total+=coins[i]
        change.push(coins[i])
    }
    return change
}
console.log(coinChange(coins, amount));