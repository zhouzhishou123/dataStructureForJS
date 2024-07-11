// 暴力解法
export function lengthOfLongestSubstring(s: string): number {
  if (s == null) return 0;
  if (s.length < 2) return s.length;
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    let str = s.slice(i, 1);
    for (let j = i + 1; j < s.length; j++) {
      // 如果当前字符和上一个字符相同跳过本次循环
      if (s[j] === s[j - 1]) break;
      // 如果当前的字符出现过
      if (str.includes(s[j])) break;
      str = s.slice(i, j + 1);
    }
    if (str.length > len) {
      len = str.length;
    }
  }
  return len;
}

