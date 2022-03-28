/*
 * @Author: zhouzhishou
 * @Date: 2022-03-27 17:08:24
 * @Description: 最长公共子序列的长度(LCS)
 */


function lcs(nums1: number[], nums2: number[]) {
    if (nums1 === null || nums1.length === 0) return 0
    if (nums2 === null || nums2.length === 0) return 0
}

function _lcs(nums1: number[], i: number, nums2: number[], j: number) {
    if (i === 0 || j === 0) return 0
    if (nums1[i - 1] === nums2[j - 1]) {
        return _lcs(nums1, i - 1, nums2, j - 1) + 1
    }
    return Math.max(_lcs(nums1, i - 1, nums2, j), _lcs(nums1, i, nums2, j - 1))
}