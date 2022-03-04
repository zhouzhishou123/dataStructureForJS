/*
 * @Author: zhouzhishou
 * @Date: 2022-03-04 01:18:34
 * @Description: 面试题 01.06. 字符串压缩 https://leetcode-cn.com/problems/compress-string-lcci/
 */

/**
 * @param {string} S
 * @return {string}
 */
 var compressString = function(S) {
     if(S.length === 0) return S
     let str = ''
     let char = S[0]
     let count = 1 //计算字符重复几次
     for(let i=1;i<S.length;i++){
         if(S[i] === char){
             count++
             continue
         }
         str+= char + count
         char = S[i] // a
         count = 1
     }
     str += char+count
     if(str.length >= S.length) return S
     return str
};

