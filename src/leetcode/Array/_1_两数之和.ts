/*
 * @Author: zhouzhishou
 * @Date: 2022-03-25 19:21:11
 * @Description: https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums:number[], target:number) {
     if(nums.length<1) return [-1,-1]
     let map = new Map() // 可以换成对象
     map.set(nums[0],0)
     for(let i=1;i<nums.length;i++){
         let difference = target - nums[i]
         if(map.has(difference)){
             return [map.get(difference), i]
         }
         map.set(nums[i], i)
     }
     return [-1,-1]
};

console.log(twoSum([3,3], 6));