/*
 * @Author: zhouzhishou
 * @Date: 2022-02-27 13:06:10
 * @Description: LCP 33. 蓄水 https://leetcode-cn.com/problems/o8SXZn/
 */

/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
 var storeWater = function(bucket, vat) {
     if(vat.every(item=> item === 0)) return 0
     let optionNum = 0
     //需要加满的最大次数
     let fullNum = 0
     // 需要升级的水桶
     let index = 0
     //每个水缸是否装满了
     let isFullarr=[]
     // 升级水桶 [9,1,1] [0,2,2]
     for(let i=0; i<bucket.length; i++){
        isFullarr[i] = false
         // 如果水桶的容量为0并且最低蓄水量不为0 选择升级水桶
         if(bucket[i] === 0 && vat[i] !== 0){
            bucket[i] = bucket[i] + 1
            optionNum++
            break
         } else if(bucket[i] !== 0 && vat[i] !== 0){ // 容量不为0 并且最低蓄水量不为0
             if( Math.ceil(vat[i] / bucket[i]) > fullNum ){
                 fullNum = Math.ceil(vat[i] / bucket[i])
                 index = i
             }
         }

     }
     
    if(fullNum>0){
        bucket[index] = bucket[index] + 1
        optionNum++
    }   
    console.log(index,fullNum);
    
    console.log(bucket, vat);    
     //全部蓄满退出循环
     while(!isFullarr.every(item=> item === true)){
        for(let i=0;i< bucket.length;i++){
            vat[i]=vat[i] - bucket[i]
            if(vat[i] <= 0 && !isFullarr[i]){
                isFullarr[i] = true
            }
         }
         optionNum++
     }
     return optionNum
};

console.log(storeWater([2,27,24,75],[53,52,28,82]));
