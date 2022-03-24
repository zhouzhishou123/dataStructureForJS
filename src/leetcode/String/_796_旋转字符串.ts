/*
 * @Author: zhouzhishou
 * @Date: 2022-03-24 22:54:30
 * @Description: https://leetcode-cn.com/problems/rotate-string/
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s: string, goal: string): boolean {
    if (s === null || goal === null) return false
    if (s.length !== goal.length) return false
    goal = goal + goal
    let begin = 0
    while (begin <= s.length) {
        let str = goal.slice(begin, begin + s.length)
        if (str === s) return true
        begin++
    }
    return false
};
