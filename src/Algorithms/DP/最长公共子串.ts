/*
 * @Author: zhouzhishou
 * @Date: 2022-03-27 20:30:57
 * @Description: 最长公共子串长度
 */

type LCST = {
    length: number
}

/**
 * 最长公共子串长度 str1 str2
 * i= [1, str1.length]
 * j= [1, str2.length]
 * -定义状态
 *  假设dp(i,j)是以str1[i-1]、str2[j-1]结尾的最长公共子串长度 
 * -初始化状态
 *  dp(i,0) dp(0,j)的初始值为0
 * 状态转移方程
 * str1[i-1] === str2[j-1] dp(i,j) = dp(i-1,j-1)+1
 * str1[i-1] !== str2[j-1] dp(i,j) = 0
 */

function lcsubstring1(str1: LCST, str2: LCST) {
    if (str1 === null || str2 === null) return 0
    // 定义状态
    const dp: number[][] = []
    // 初始化状态
    for (let i = 0; i <= str1.length; i++) {
        dp[i] = []
        for (let j = 0; j < str2.length; j++) {
            dp[i][j] = 0
        }
    }
    let max = 0;
    // 状态转移方程
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] !== str2[j - 1]) continue
            dp[i][j] = dp[i - 1][j - 1] + 1
            max = Math.max(dp[i][j], max)
        }
    }
    return max
}


// function lcsubstring2(str1: LCST, str2: LCST) {
//     if (str1 === null || str2 === null) return 0
//     let cols = str2.length,
//         rows = str1.length,
//         colStr = str2,
//         rowStr = str1
        
//     if (str1.length < str2.length) {
//         cols = str1.length
//         rows = str2.length
//         colStr = str1
//         rowStr = str2
//     }
//     // 定义状态
//     const dp: number[] = []
//     // 初始化状态
//     for (let i = 0; i <= cols; i++) {
//         dp[i] = 0
//     }
//     let max = 0;
//     // 状态转移方程
//     for (let i = 1; i <= rows; i++) {
//         let cur = 0
//         for (let j = 1; j <= cols; j++) {
//             let leftTop = cur
//             cur = dp[j]
//             if (rowStr[i - 1] !== colStr[j - 1]) continue
//             dp[j] = leftTop + 1
//             max = Math.max(dp[j], max)
//         }
//     }
//     return max
// }