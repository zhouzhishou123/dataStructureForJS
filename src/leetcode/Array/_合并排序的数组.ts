/*
 * @Author: zhouzhishou
 * @Date: 2022-03-18 13:14:59
 * @LastEditTime: 2022-03-18 15:55:37
 * @Description: 面试题 10.01. 合并排序的数组 https://leetcode-cn.com/problems/sorted-merge-lcci/
 */
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A: number[], m: number, B: number[], n: number): void {
  if (A.length === 0 && B.length === 0) return;
  let ai = m - 1,
    bi = n - 1,
    i = m + n - 1;
  while (bi >= 0) {
    if (ai >= 0 && A[ai] > B[bi]) {
      A[i--] = A[ai--];
    } else {
      A[i--] = B[bi--];
    }
  }
};
/**
 * 输入:
A = [5,6,7,0,0,0], m = 3
B = [1,2,3],       n = 3

输出: [1,2,2,3,5,6]
 */

/**
A = [1,2,3,0,0,0] ai=2 bi=2 i=5
B = [2,5,6]

A = [1,2,3,0,0,6] ai=2 bi=1 i=4
B = [2,5,6]

A = [1,2,3,0,5,6] ai=2 bi=0 i=3
B = [2,5,6]

A = [1,2,3,3,5,6] ai=1 bi=0 i=2
B = [2,5,6]

A = [1,2,2,3,5,6] ai=1 bi=-1 i=1
B = [2,5,6]
 */

function indexOf(text: string, pattern: string) {
  if (pattern === "") return -1;
  if (pattern.length > text.length) return -1;
  let plen = pattern.length,
    pi = 0;
  for (let ti = 0; ti < text.length - pattern.length; ti++) {
    pi = 0;
    while (pi < plen) {
      if (pattern[pi] !== text[pi + ti]) break;
      pi++;
    }
    if (pi === plen) return ti;
  }
  return -1;
}
