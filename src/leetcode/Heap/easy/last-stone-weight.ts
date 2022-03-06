/*
 * @Author: zhouzhishou
 * @Date: 2022-02-27 15:13:07
 * @Description: 1046. 最后一块石头的重量 https://leetcode-cn.com/problems/last-stone-weight/
 */



/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
     if(stones.length<2) return stones.length ? stones[0]: 0
    //批量建堆
    for(let i = Math.floor(stones.length/2)-1; i >= 0; i--){
        siftDown(i)
    }

    while(stones.length > 1){
        if(stones[0] === stones[1]){
            remove(stones,0)
            remove(stones,0)
        }else {
            let val = stones[0]- stones[1]
            //左节点存在
            if(stones[2] && stones[2]> stones[1]){
                val = stones[0]- stones[2]
            }
            remove(stones,0)
            remove(stones,0)
            add(val)
        }
    }
    
    function remove(stones,index){
        stones[0] = stones.pop()
        siftDown(index)
    }
    function add(val){
        stones.push(val)
        siftUp(stones.length-1)
    }
   function siftUp(index){
        let ele = stones[index] // 添加的元素
        while(index > 0){
            let pIndex = Math.floor((index-1)/2) // 父元素的索引
            let pEle = stones[pIndex] //父元素
            if(ele-pEle <= 0) break;
            stones[index] = pEle  
            index = pIndex
        }
        stones[index] = ele
   }
   function siftDown(index){
    let ele = stones[index]
    let half = Math.floor(stones.length / 2)
    while(index<half){
        let leftIndex = 2*index + 1 // 左子节点
        let leftElement = stones[leftIndex]
        let rightIndex = leftIndex + 1
        let rightElement = stones[rightIndex]
        if(rightIndex < stones.length){
            if(rightElement > leftElement){ // 右子节点>左子节点
                leftElement = rightElement
                leftIndex = rightIndex
            }
        }
        if(leftElement <= ele) break;
        stones[index] = leftElement
        index = leftIndex
    }
    stones[index] = ele
}
return stones.length ? stones[0]: 0
};

console.log(lastStoneWeight([1,3]));