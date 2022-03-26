/*
 * @Author: zhouzhishou
 * @Date: 2022-03-26 02:17:17
 * @Description: https://leetcode-cn.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x: number): number {
    let res = 0
    while (x != 0) {
        res = res * 10 + x % 10
        if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) return 0
        x = parseInt(x / 10)
    }
    return res
};
