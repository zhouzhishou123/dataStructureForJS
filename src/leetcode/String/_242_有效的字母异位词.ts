/*
 * @Author: zhouzhishou
 * @Date: 2022-03-25 12:05:31
 * @Description: https://leetcode-cn.com/problems/valid-anagram/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s:string, t:string):boolean {
     if(s.length !== t.length) return false
     let arr = []
     for(let i=0; i<s.length;i++){
         let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
         if(arr[index] === undefined) {
             arr[index] = 1
         } else {
            arr[index]+=1
         }
     }

     for(let i=0;i<t.length;i++){
        let index = t[i].charCodeAt(0) - 'a'.charCodeAt(0)
        if(arr[index] === undefined) return false
        if(--arr[index] <0) return false
     }
     return true
};
