/*
 * @Author: zhouzhishou
 * @Date: 2021-06-03 21:44:35
 * @Description: 判断给定字符串是否是回文（从前往后和从后往前是一样的）
 * dad racecar
 * 1. 将字符串按从左至右的顺序压入栈
 * 2. 将栈中元素弹出直至栈为空 拼接元素组成新的字符串
 * 3. 比较新的字符串和原来的字符串
 */

export default function isPalindrome(word: string): boolean {
  if (typeof word !== "string") return false;
  const stack: string[] = [];
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  let newWord: string = "";
  while (stack.length > 0) {
    let peek = stack.pop();
    newWord += peek;
  }
  if (newWord === word) return true;
  return false;
}

// 将空字符串定义为有效的回文串 。
function _isPalindrome(s: string): boolean {
  if ((s = s.trim()).length <= 1) return true;
  let begin = 0,
    end = s.length - 1;
  while (begin < end) {

    while(s[begin] && !/[a-zA-Z0-9]/g.test(s[begin])){
        begin++;
    }
    while(s[end] && !/[a-zA-Z0-9]/g.test(s[end])){
        end--;
    }

    if(begin > end) return true // 处理特殊情况".,"

    if (s[begin].toLowerCase() !== s[end].toLowerCase()) return false;

    begin++
    end--
  }
  return true;
}

