// https://leetcode.cn/problems/longest-common-prefix/description/
/**
 * strs = ["flower","flow","flight"] fl
 * strs = ["dog","racecar","car"] ""
 * @param strs
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs == null || !strs.length) return "";
  let commonPrefix = "";
  const [firstStr] = strs;
  let minLen = Math.min(...strs.map((str) => str.length));
  for (let i = 0; i < minLen; i++) {
    let chat = firstStr[i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== chat) return commonPrefix;
    }
    commonPrefix += chat;
  }
  return commonPrefix;
}
