/*
 * @Author: zhouzhishou
 * @Date: 2022-03-24 13:55:00
 * @LastEditTime: 2022-03-24 15:57:00
 * @Description: https://leetcode-cn.com/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits: number[]): number[] {
    if (digits.length === 0) return []
    let carry = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        let v = digits[i]
        if (i === digits.length - 1) {
            digits[i] = (v + 1 + carry) % 10
            carry = Math.floor((v + 1 + carry) / 10)
        } else {
            digits[i] = (v + carry) % 10
            carry = Math.floor((v + carry) / 10)
        }
        if (carry <= 0) break
    }
    if (carry) {
        digits.unshift(carry)
    }
    return digits
};
