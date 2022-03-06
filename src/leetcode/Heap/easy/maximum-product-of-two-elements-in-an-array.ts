/*
 * @Author: zhouzhishou
 * @Date: 2022-02-27 12:41:17
 * @Description: 1464. 数组中两元素的最大乘积 https://leetcode-cn.com/problems/maximum-product-of-two-elements-in-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
     if(nums.leng<2) return 0
     let result =  (maxNum(nums)-1) * (maxNum(nums)-1)
     function maxNum(nums){
         let maxCount = nums[0]
         let start = 0
         for(let i=1; i<nums.length;i++){
             if(nums[i]>maxCount){
                maxCount = nums[i]
                start=i
             }
         }
         nums.splice(start,1)
         return maxCount
     }
     return result
};
