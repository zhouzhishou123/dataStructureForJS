/*
 * @Author: zhouzhishou
 * @Date: 2022-03-20 14:56:09
 * @Description: https://leetcode-cn.com/problems/sort-colors/
 */


/**
 * cur指针 遇到1跳过 cur++
 * 遇到0和begin指针交换值 begin++ cur++
 * 遇到2和end指针交换值 end-- 对cur的值判断
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums:number[]) {
     let cur = 0
     let begin = 0
     let end = nums.length-1
     while(cur<=end){
         let e = nums[cur]
         if(e===0){
             [nums[begin], nums[cur]] = [nums[cur], nums[begin]]
             begin++
             cur++
         }else if(e===1){
             cur++
         }else {
             [nums[end], nums[cur]]= [nums[cur], nums[end]]
             end--
         }
     }     
};
