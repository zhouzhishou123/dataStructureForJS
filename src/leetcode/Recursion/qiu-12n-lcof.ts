/*
 * @Author: zhouzhishou
 * @Date: 2022-03-15 17:15:49
 * @LastEditTime: 2022-03-15 17:20:14
 * @Description: 剑指 Offer 64. 求1+2+…+n https://leetcode-cn.com/problems/qiu-12n-lcof/
 */
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n:number):number {
    if(n<=1) return n
    return n+ sumNums(n-1)
};
