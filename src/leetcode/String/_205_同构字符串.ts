// https://leetcode.cn/problems/isomorphic-strings/
/**
 * s = "egg", t = "add" true
 * s = "foo", t = "bar" false
 * s = "paper", t = "title" true
 * s = "badc" t = "baba" false
 * 需要我们判断 s 和 t 每个位置上的字符是否都一一对应，即 s 的任意一个字符被 t 中唯一的字符对应，
 * 同时 t 的任意一个字符被 s 中唯一的字符对应。这也被称为「双射」的关系。
 * b -> b
 * a -> a
 * d -> b
 * c -> a
 * 
 * b -> b
 * a -> a
 * b -> d
 * a -> c
 * 
 * @param s 
 * @param t 
 */
function isIsomorphic(s: string, t: string): boolean {
    if(s == null || t == null) return false
    if(s.length !== t.length) return false
    let cur = 0
    let a2bMap = {}
    let b2aMap = {}
    while(cur < s.length){
        // 第一种情况 a到b的映射存在 但是又不相同则不是同构直接返回false
        if(a2bMap[s[cur]] && a2bMap[s[cur]] !== t[cur]) return false
        // 第二种情况 b到a的映射存在 但是又不相同则不是同构直接返回false
        if(b2aMap[t[cur]] && b2aMap[t[cur]] !== s[cur]) return false
        a2bMap[s[cur]] = t[cur]
        b2aMap[t[cur]] = s[cur]
        cur++
    }

    return true
};
