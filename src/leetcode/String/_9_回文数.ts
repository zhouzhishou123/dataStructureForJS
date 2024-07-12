// https://leetcode.cn/problems/palindrome-number/description/
/**
 * 双指针
 * @param x 
 * @returns 
 */
function isPalindrome(x: number): boolean {
  if (x == null || x < 0) return false;
  let str = x + "";
  if (str.length < 2) return true;
  let begin = 0,
    end = str.length - 1;
  while (begin < end) {
    if (str[begin++] !== str[end--]) return false;
  }
  return true;
}
