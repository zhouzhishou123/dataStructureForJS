/*
 * @Author: zhouzhishou
 * @Date: 2022-03-13 20:21:43
 * @Description: 剑指 Offer 53 - I. 在排序数组中查找数字 I https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let begin = 0, end = nums.length, mid = 0, count = 0
    while (end > begin) {
        mid = (begin + end) >> 1
        if (nums[mid] > target) {
            end = mid
        } else if (nums[mid] < target) {
            begin = mid + 1
        } else {
            // 保存这个值
            let temp = mid
            count++
            // 向右查找
            while(nums[++mid] === target && mid<nums.length){
                count++
            }
            // 向左查找
            while(nums[--temp] === target && temp>=0){
                count++
            }
            return count
        }
    }
    return count
};
let nums = [5, 7, 7, 8, 8, 10], target = 8

console.log(search(nums, target));
