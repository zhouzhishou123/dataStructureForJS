/*
 * @Author: zhouzhishou
 * @Date: 2022-03-20 20:52:55
 * @Description: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */


const letterArray = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
]
// const map = new Map()
// map.set('2', ['a', 'b', 'c'])
// map.set('3', ['d', 'e', 'f'])
// map.set('4', ['g', 'h', 'i'])
// map.set('5', ['j', 'k', 'l'])
// map.set('6', ['m', 'n', 'o'])
// map.set('7', ['p', 'q', 'r', 's'])
// map.set('8', ['t', 'u', 'v'])
// map.set('9', ['w', 'x', 'y', 'z'])

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits: string): string[] {
    if (digits === '' || digits === null) return []
    // 存储全部选择的字符
    const list = []
    // 存储每一层选择的字符
    const charList = []
    DFS(0, digits, charList, list)
    return list;
};


/**
 * @param {number} idx
 * @return {*}
 * @Description: 正在搜索第idx层
 */
function DFS(idx: number, digits: string, charList: string[], list: string[]): void {
    if (idx === digits.length) {
        list.push(charList.join(''))
        return
    }
    const char = letterArray[digits[idx] - "2"]
    // 枚举这层的所有字符
    for (let i = 0; i < char.length; i++) {
        charList[idx] = char[i]
        DFS(idx + 1, digits, charList, list)
    }
}

console.log(letterCombinations('23'));