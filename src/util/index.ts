/*
 * @Author: zhouzhishou
 * @Date: 2021-06-04 23:29:05
 * @Description: 
 */

export function factorial(num: number) {
  if (num === 1) return num
  return factorial(num - 1) * num
}

/**
 * @description: 生成随机数
 * @param {number} min
 * @param {number} max
 * @param {number} total
 * @return {*}
 */
export function genRandomNums(min: number, max: number, total: number): number[] {
  if (total < 1 || min > max) return []
  let randomNums: number[] = []
  for (let i = 0; i < total; i++) {
    // 0 - (max - min)的随机数
    let random = Math.random() * (max - min) + min
    let randomNum = Math.floor(random)
    randomNums.push(randomNum)
  }
  return randomNums
}