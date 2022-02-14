/*
 * @Author: zhouzhishou
 * @Date: 2022-02-12 21:46:48
 * @Description: 
 */

// top K 问题
// 从 n 个整数中找出最大的前K个数 (k远远小于n) 
// 1.先将遍历到的前K个数放入堆中
// 2.从第k+1个数开始，如果大于堆顶元素replace

import BinaryHeap from "../../package/Heap/BinaryHeap";

function compare<T>(a: T, b: T): number {
    if (a === b) return 0;
    if (a > b) return -1;
    if (a < b) return 1;
  }

let data = [96, 51, 69, 20, 79, 90, 95, 65, 84, 66, 6, 13, 17, 4, 85, 8, 68, 15, 12, 33]
let binaryHeap= new BinaryHeap([],compare)
let k=5
for(let i=0;i<data.length;i++){
    if(i<k){
        binaryHeap.add(data[i])  
    }else{
        if(data[i]>binaryHeap.get()){
            binaryHeap.replace(data[i])
        }
    }
}
