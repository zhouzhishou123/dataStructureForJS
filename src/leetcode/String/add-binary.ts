/*
 * @Author: zhouzhishou
 * @Date: 2022-03-02 01:08:22
 * @Description: 67. 二进制求和 https://leetcode-cn.com/problems/add-binary/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a:string, b:string): string {
     let aLen = a.length
     let bLen = b.length
     let str = ''
     let sum = 0
     let p = Math.max(aLen, bLen)-1;
     if(aLen>bLen){
         for(let i=0;i<aLen-bLen;i++){
             b = '0'+b
         }
     }

     if(aLen < bLen){
        for(let i=0;i<bLen-aLen;i++){
            a = '0'+a
        }
    }
     while(p>=0){
         sum += a[p] * 1 + b[p] * 1 
         if(sum >= 2){
            str += sum-2
            sum = 1
         }else{
             str += sum
             sum = 0
         }
         p--
     }
     if(sum){
         str += '1'
     }
     return str.split("").reverse().join("")
};