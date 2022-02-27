/*
 * @Author: zhouzhishou
 * @Date: 2022-02-27 01:23:25
 * @Description: 剑指 Offer 40. 最小的k个数 https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
     let result = []
     if(arr.length===0 || k===0) return []
     for(let i = 0; i < arr.length; i++){
         if(i<k){
            add(arr[i])
         }else if(arr[i] < result[0]) {
             result[0] = arr[i]
             siftDown(0)
         }
     }
     function add(val){
        result.push(val)
        siftUp(result.length - 1)
     }
     function siftDown(index){
         let ele = result[index]
         let half = Math.floor(result.length / 2) // 第一个子节点的索引
         while(index < half){
             let childIndex = index*2 + 1
             let childEle = result[childIndex]
             let rightIndex = childEle+1
             if(rightIndex < result.length -1) {
                 if(result[rightIndex] > childEle){
                    childEle = result[rightIndex]
                    childIndex = rightIndex
                 }
             }

             if(ele>=childEle) return
             result[index] = childEle
             index = childIndex

         }
         result[index] = ele
     }
     function siftUp(index){
         let ele = result[result.length-1]
         while(index > 0){
             let pIndex = Math.floor((index-1)/2)
             if(ele <= result[pIndex]) return

             result[index] = result[pIndex]
             index = pIndex

         }
         result[index] = ele
     }
     return result
};


const getLeastNumbers1 = function (arr,k) {
    if(arr.length===0 || k===0) return []
    arr.sort((a,b)=> a-b)
    let result = []
    while(--k >= 0){
        result.push(arr[k])
    }
    return result    
}

getLeastNumbers1([3,2,1],2)