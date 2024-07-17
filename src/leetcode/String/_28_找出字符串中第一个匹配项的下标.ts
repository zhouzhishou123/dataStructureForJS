// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
// 如果 needle 不是 haystack 的一部分，则返回  -1 。
// haystack = "leetcode", needle = "leeto" -1
// haystack = "sadbutsad", needle = "sad"  0
function strStr(haystack: string, needle: string): number {
    if(haystack == null || needle == null) return -1
    if(haystack.length < needle.length) return -1
    if(haystack.length === needle.length && haystack !== needle) return -1
    for(let i=0;i<= haystack.length - needle.length; i++){
        if(needle === haystack.substr(i, needle.length)) return i
    }
    return -1
};