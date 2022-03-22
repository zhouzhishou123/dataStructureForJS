/*
 * @Author: zhouzhishou
 * @Date: 2022-03-22 17:41:36
 * @Description: https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 */


/**
 * @param {number[]} nums
 * @return {number[]} 非原地排序
 */
var sortedSquares = function (nums: number[]):number[] {
    if (nums.length ===0) return nums
    let arr = []
    let begin = 0
    let end = nums.length-1
    let cur = nums.length-1
    while(end>=begin){
        if(Math.abs(nums[begin]) < Math.abs(nums[end])){
            arr[cur--] = Math.pow(nums[end--],2)
        }else {
            arr[cur--] = Math.pow(nums[begin++], 2)
        }
    }
    return arr
};


console.log(sortedSquares([-4,-1,0,3,10]));