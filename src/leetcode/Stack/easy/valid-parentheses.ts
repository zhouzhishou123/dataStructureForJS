/*
 * @Author: zhouzhishou
 * @Date: 2022-03-02 22:23:21
 * @Description: 20. 有效的括号 https://leetcode-cn.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s:string) {
     while(s.includes('{}') || s.includes('()') || s.includes('[]')){
         s=s.replace('()', '')
         s=s.replace('[]', '')
         s=s.replace('{}', '')
     }
     return s.length === 0
};