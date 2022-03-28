/*
 * @Author: zhouzhishou
 * @Date: 2022-03-27 16:46:54
 * @Description: 最长公共子序列的长度(LCS)
 */

type T = {
    length: number
}

/** LCS
 * 最长公共子序列的长度 nums1, nums2
 * - 定义状态
 *  i= [0, nums1.length]
 *  j= [0, nums2.length]
 *  假设 dp(i,j)是nums1前i个元素和nums2前j个元素的最长公共子序列
 * - 初始化状态 （n % 2 === n & 1）
 *  dp(0,j) = 0 dp(i,0)=0
 * - 确定状态转移方程
 * 如果nums1[i-1] === nums2[j-1], dp[i,j] = dp[i-1, j-1] + 1
 * 如果nums1[i-1] !== nums2[j-1], dp[i,j] = Math.max(dp[i-1,j], dp[i,j-1])
 */


/**
 * 空间复杂度O(n*m)
 * 时间复杂度O(n*m)
 */

function lcs1(nums1:T, nums2:T) {
    if (nums1 === null || nums1.length === 0) return 0
    if (nums2 === null || nums2.length === 0) return 0
    // 定义一个二维数组的状态
    let dp: number[][] = []
    // 初始化状态 dp[0,j] = 0 dp[i,0]=0
    for (let i = 0; i <= nums1.length; i++) {
        dp[i] = []
        for (let j = 0; j <= nums2.length; j++) {
            dp[i][j] = 0
        }
    }
    // 状态转移方程
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[nums1.length][nums2.length]
}
/**
 * 滚动数组优化空间复杂度 2*m
 */
function lcs2(nums1:T, nums2:T) {
    if (nums1 === null || nums1.length === 0) return 0
    if (nums2 === null || nums2.length === 0) return 0
    // 定义一个二维数组的状态
    let dp: number[][] = []
    // 初始化状态 dp[0,j] = 0 dp[i,0]=0
    for (let i = 0; i <= 1; i++) {
        dp[i] = []
        for (let j = 0; j <= nums2.length; j++) {
            dp[i][j] = 0
        }
    }
    // 状态转移方程
    for (let i = 1; i <= nums1.length; i++) {
        let row = i & 1
        let preRow = (i - 1) & 1
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[row][j] = dp[preRow][j - 1] + 1
            } else {
                dp[row][j] = Math.max(dp[preRow][j], dp[row][j - 1])
            }
        }
    }
    return dp[nums1.length & 1][nums2.length]
}

/**
 * 优化空间复杂度一维数组
 */
function lcs3(nums1:T, nums2:T) {
    if (nums1 === null || nums1.length === 0) return 0
    if (nums2 === null || nums2.length === 0) return 0
    // 定义一个二维数组的状态
    let dp: number[] = []
    // 初始化状态 dp[0,j] = 0 dp[i,0]=0
    for (let i = 0; i <= nums2.length; i++) {
        dp[i] = 0
    }
    // 状态转移方程
    for (let i = 1; i <= nums1.length; i++) {
        let cur = 0
        for (let j = 1; j <= nums2.length; j++) {
            let leftTop = cur
            cur = dp[j]
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = leftTop + 1
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1])
            }
        }
    }
    return dp[nums2.length]
}

/**
 * 优化空间复杂度一维数组
 */
function lcs4(nums1:T, nums2:T) {
    if (nums1 === null || nums1.length === 0) return 0
    if (nums2 === null || nums2.length === 0) return 0
    let cols = nums1.length, rows = nums2.length, colsNum = nums1, rowsNum = nums2
    if (nums2.length < nums1.length) {
        cols = nums2.length
        rows = nums1.length
        colsNum = nums2
        rowsNum = nums1
    }
    // 定义一个二维数组的状态
    let dp: number[] = []
    // 初始化状态 dp[0,j] = 0 dp[i,0]=0
    for (let i = 0; i <= cols; i++) {
        dp[i] = 0
    }
    // 状态转移方程
    for (let i = 1; i <= rows; i++) {
        let cur = 0
        for (let j = 1; j <= cols; j++) {
            let leftTop = cur
            cur = dp[j]
            if (rowsNum[i - 1] === colsNum[j - 1]) {
                dp[j] = leftTop + 1
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1])
            }
        }
    }
    return dp[cols]
}
