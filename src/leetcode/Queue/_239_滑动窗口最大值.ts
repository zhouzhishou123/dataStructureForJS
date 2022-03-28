/*
 * @Author: zhouzhishou
 * @Date: 2022-03-27 13:44:56
 * @Description: https://leetcode-cn.com/problems/sliding-window-maximum/
 */

/**
 * 从头到尾单调递减队列
 *  
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums:number[], k:number):number[] {
     if(nums === null || nums.length===0 || k<1) return []
     if(k === 1) return nums
     let maxes = []
     let queue = []
     for(let i=0;i<nums.length;i++){
         // nums[i] >= nums[队尾] 则删除队尾
        while(queue.length && nums[i] >= nums[queue[queue.length-1]]) {
            queue.pop() 
        }
        queue.push(i)
        let w = i-k+1
        if(w<0) continue
        // 队头的索引不在滑动窗口内
        if(queue[0] < w){
            queue.shift()
        }
        // 设置窗口的最大值
        maxes[w] = nums[queue[0]]
     }
     return maxes  
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)