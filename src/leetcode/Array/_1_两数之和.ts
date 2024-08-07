/*
 * @Author: zhouzhishou
 * @Date: 2022-03-25 19:21:11
 * @Description: https://leetcode-cn.com/problems/two-sum/
 */

// 暴力法
function _twoSum(nums: number[], target: number): [number, number] {
  if (nums.length < 1) return [-1, -1];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    for (let j = i + 1; j < len; j++) {
      let diff = target - num;
      if ((nums[j] === diff)) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

/**[2,7,11,15] 9
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// {2 0}
var twoSum = function (nums: number[], target: number): [number, number] {
  if (nums.length < 1) return [-1, -1];
  let map = new Map(); // 可以换成对象
  map.set(nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    let difference = target - nums[i];
    if (map.has(difference)) {
      return [map.get(difference), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
};

// console.log(twoSum([3, 3], 6));

console.log(_twoSum([-1,-2,-3,-4,-5], -8));

