/*
 * @Author: zhouzhishou
 * @Date: 2022-03-13 18:45:15
 * @Description: 面试题 10.05. 稀疏数组搜索 https://leetcode-cn.com/problems/sparse-array-search-lcci/
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words: string[], s: string): number {
    let begin = 0
    let end = words.length
    let mid = 0
    // while (end > begin) {
    mid = (end + begin) >> 1
    // 如果mid位置是空字符串
    if (words[mid] === '') {
        let midNextWord = words[mid + 1]
        // 可以向右也可以向左
        while (midNextWord === '') {
            mid += 1
            midNextWord = words[mid]
        }
    }
    search(mid, words)
    // }
    function search(mid, words) {
        debugger
        if (words[mid].charCodeAt(0) > s.charCodeAt(0)) { // mid位置的字符大于s字符
            end = mid
        } else if (words[mid].charCodeAt(0) < s.charCodeAt(0)) {
            begin = mid + 1
            let midNextWord = words[begin]
            // 如果mid+1位置字符是空字符串向后搜索
            while (end > begin &&  begin < words.length && midNextWord === '') {
                midNextWord = words[++begin]
            }
        } else  {
            if(words[mid] === s){
                return mid
            }else{
                
            }
        }
    }
    return -1
};

let words = ["at", "", "", "", "ball", "", "", "", "", "car", "", "", "dad", "", ""], s = "ball"

console.log(findString(words, s));
