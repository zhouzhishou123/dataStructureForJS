/*
 * @Author: zhouzhishou
 * @Date: 2022-03-02 22:41:33
 * @Description: 415. 字符串相加 https://leetcode-cn.com/problems/add-strings/
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1: string, num2: string): string {
    if (num1.length === 0 && num2.length === 0) return ''
    let num1Len = num1.length
    let num2Len = num2.length
    let p = num1Len - 1
    let sum = 0
    let str = ''
    if (num1Len > num2Len) {
        for (let i = 0; i < num1Len - num2Len; i++) {
            num2 = '0' + num2
        }
    } else if (num1Len < num2Len) {
        for (let i = 0; i < num2Len - num1Len; i++) {
            num1 = '0' + num1
        }
        p = num2Len - 1
    }

    while (p >= 0) {
        sum += (num1[p] as any) * 1 + (num2[p] as any) * 1
        if (sum >= 10) {
            str = (sum - 10) + str
            sum = 1
        } else {
            str = sum + str
            sum = 0
        }
        p--
    }
    if (sum === 1) {
        str = '1' + str
    }

    return str
};


addStrings('11', '123')