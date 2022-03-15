/*
 * @Author: zhouzhishou
 * @Date: 2022-03-15 17:21:48
 * @LastEditTime: 2022-03-15 17:43:03
 * @Description: 231. 2 的幂 https://leetcode-cn.com/problems/power-of-two/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n:number):boolean {
    let product =power(0)
    let i=1
    while(product<=n){
        if(product===n) return true
        product = power(i)
        i++
    }
    return false
};

function power(n:number) {
    if(n===0) return 1
    return 2* Math.pow(2,n-1)
}

