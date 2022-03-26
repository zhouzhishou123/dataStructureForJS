/*
 * @Author: zhouzhishou
 * @Date: 2022-03-25 20:09:15
 * @Description: https://leetcode-cn.com/problems/3sum/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums: number[]) {
    if (nums.length < 3) return []
    let result = []
    nums.sort((a, b) => a - b)
    let end = nums.length-2
    let endIdx = nums.length - 1
    for (let i = 0; i < end; i++) {
        // 等于上一个数直接跳过
        if (i>0 && (nums[i - 1] === nums[i])) continue
        let l = i + 1
        let v = -nums[i]
        let r = endIdx
        while (r > l) {
            if (nums[l] + nums[r] < v) {
                l++
            } else if (nums[l] + nums[r] > v) {
                r--
            } else {
                result.push([nums[i], nums[l], nums[r]])
                // 跳过相同的值
                while(l<r && nums[l] === nums[l+1]) l++
                while(l<r && nums[r] === nums[l-1]) r--
                r--
                l++
            }
        }
    }
    return result
};

console.log(threeSum([-2, 0, 0, 2, 2]));