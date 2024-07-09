/*
 * @Author: zhouzhishou
 * @Date: 2022-03-02 22:23:21
 * @Description: 20. 有效的括号 https://leetcode-cn.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s: string) {
  while (s.includes("{}") || s.includes("()") || s.includes("[]")) {
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }
  return s.length === 0;
};

function _isValid(s: string): boolean {
  if (s.length <= 1) return false;
  let openBrackets = ["(", "[", "{"];
  let closeBrackets = [")", "]", "}"];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      stack.push(s[i]);
    }

    if (closeBrackets.includes(s[i])) {
      if (stack.length === 0) return false;
      if (map[stack[stack.length - 1]] !== s[i]) return false;
      stack.pop();
    }
  }

  if (stack.length > 0) return false;
  return true;
}
