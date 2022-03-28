/*
 * @Author: zhouzhishou
 * @Date: 2022-03-27 22:35:03
 * @Description: 0-1背包问题
 */

/**
 * 0-1背包问题
 * 有n件物品和一个最大承重为W的背包 每件物品的重量为wi价值是vi
 * 在保证总重量不超过W的前提下选择某些物品装入背包背包的最大总价值是多少
 * 每件物品只能选择一件或者0件
 * 假设values是价值数组 weight是重量数组
 * 编号为k的物品价值是alues[k]重量是weights[k] k= [0,n]
 * -定义状态
 * 假设dp(i,j)是最大承重为j 有前i件物品可选时的最大总价值 i=[0,n] j=[0,w]
 *  不选择第i个物品，dp(i,j) = dp(i-1,j)
 *  j<weights[i] 不选择第i个物品，dp(i,j) = dp(i-1,j)
 * j<weights[i] 选择第i个物品，dp(i, j) = values[i-1] + dp(i-1, j-weights[i-1])
 * dp(i,j) = Math.max(dp(i, j) = values[i-1] + dp(i-1, j-weights[i-1]), dp(i-1,j))
 */

let capacity = 10, values = [6, 3, 5, 4, 6], weights = [2, 2, 6, 5, 4]

function maxValue(values, weights, capacity) {
    if (values.length === 0 || capacity <= 0) return 0
    if (weights.length === 0) return 0
    if (values.length !== weights.length) return 0
    //定义状态
    const dp: number[][] = []
    // 初始化状态
    for (let i = 0; i <= values.length; i++) {
        dp[i] = []
        for (let j = 0; j <= capacity; j++) {
            dp[i][j] = 0
        }
    }
    // 状态转移方程
    for (let i = 1; i <= values.length; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (j < weights[i - 1]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    values[i - 1] + dp[i - 1][j - weights[i - 1]]
                )
            }
        }
    }
    return dp[values.length][capacity]
}

/**
 * 滚动数组优化空间复杂度
 */
function maxValue1(values, weights, capacity) {
    if (values.length === 0 || capacity <= 0) return 0
    if (weights.length === 0) return 0
    if (values.length !== weights.length) return 0
    //定义状态
    const dp: number[][] = []
    // 初始化状态
    for (let i = 0; i <= 1; i++) {
        dp[i] = []
        for (let j = 0; j <= capacity; j++) {
            dp[i][j] = 0
        }
    }
    // 状态转移方程
    for (let i = 1; i <= values.length; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (j < weights[i - 1]) {
                dp[i % 2][j] = dp[(i - 1) % 2][j]
            } else {
                dp[i % 2][j] = Math.max(
                    dp[(i - 1) % 2][j],
                    values[i - 1] + dp[(i - 1) % 2][j - weights[i - 1]]
                )
            }
        }
    }

    return dp[values.length % 2][capacity]
}


/**
 * 一维数组优化空间复杂度
 */
function maxValue2(values, weights, capacity) {
    if (values.length === 0 || capacity <= 0) return 0
    if (weights.length === 0) return 0
    if (values.length !== weights.length) return 0
    //定义状态
    const dp: number[] = []
    // 初始化状态
    for (let i = 0; i <= capacity; i++) {
        dp[i] = 0
    }
    // 状态转移方程
    for (let i = 1; i <= values.length; i++) {
        for (let j = capacity; j > 0; j--) {
            if (j < weights[i - 1]) {
                dp[j] = dp[j]
            } else {
                dp[j] = Math.max(
                    dp[j],
                    values[i - 1] + dp[j - weights[i - 1]]
                )
            }
        }
    }
    return dp[capacity]
}


/**
 * 一维数组优化空间复杂度
 */
function maxValue3(values, weights, capacity) {
    if (values.length === 0 || capacity <= 0) return 0
    if (weights.length === 0) return 0
    if (values.length !== weights.length) return 0
    //定义状态
    const dp: number[] = []
    // 初始化状态
    for (let i = 0; i <= capacity; i++) {
        dp[i] = 0
    }
    // 状态转移方程
    for (let i = 1; i <= values.length; i++) {
        for (let j = capacity; j > 0; j--) {
            if (j < weights[i - 1]) continue
            dp[j] = Math.max(
                dp[j],
                values[i - 1] + dp[j - weights[i - 1]]
            )
        }
    }
    return dp[capacity]
}

/**
 * 一维数组优化空间复杂度
 */
function maxValue4(values, weights, capacity) {
    if (values.length === 0 || capacity <= 0) return 0
    if (weights.length === 0) return 0
    if (values.length !== weights.length) return 0
    //定义状态
    const dp: number[] = []
    // 初始化状态
    for (let i = 0; i <= capacity; i++) {
        dp[i] = 0
    }
    // 状态转移方程 
    for (let i = 1; i <= values.length; i++) {
        for (let j = capacity; j >= weights[i - 1]; j--) {
            dp[j] = Math.max(
                dp[j],
                values[i - 1] + dp[j - weights[i - 1]]
            )
        }
    }
    return dp[capacity]
}