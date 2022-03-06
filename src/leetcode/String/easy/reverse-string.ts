/*
 * @Author: zhouzhishou
 * @Date: 2022-03-02 01:12:35
 * @Description: 344. 反转字符串 https://leetcode-cn.com/problems/reverse-string/
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s:string[]): void {
     if(s.length === 0) return
     let start = 0
     let end = s.length - 1
     while(start !== end){
         if(s[start] !== s[end]){
            [s[start], s[end]] = [s[end], s[start]]
         }
         if(start +1 === end) return
         start++
         end--
     }
};

reverseString(["H","a","n","n","a","h"])