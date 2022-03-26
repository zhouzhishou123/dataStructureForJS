/*
 * @Author: zhouzhishou
 * @Date: 2022-03-25 23:04:47
 * @Description: https://leetcode-cn.com/problems/powx-n/
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
     let neg = n<0, y = neg?-n:n
     let res = 1.0
     while(y >0) {
         if((y&1)===1){
             res*=x
         }
         x*=x
         y>>=1
     }
     return neg ? 1 / res : res
};

let a = 123



