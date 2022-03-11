/*
 * @Author: zhouzhishou
 * @Date: 2021-06-04 23:29:05
 * @Description: 
 */


import { ICompareFn, defaultCompare } from './comparator'

/**
 * @description: 阶乘
 * @param {number} num
 * @return {*}
 */
export function factorial(num: number): number {
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

/**
 * @description: 判断数组是不是有序的 默认升序
 * @param {T} arr
 * @param {boolean} asc
 * @return {*}
 */
export function isOrder<T>(arr: T[], asc: boolean = true, compareFn: ICompareFn<T> = defaultCompare): boolean {
  if (arr.length <= 1) return true
  for (let begin = 1; begin < arr.length; begin++) {
    if (compareFn(arr[begin - 1], arr[begin]) > 0 && asc) return false
    if (compareFn(arr[begin - 1], arr[begin]) < 0 && !asc) return false
  }
  return true
}

/**
 * @description: 对有序数组二分查找并返回相应的索引 [begin, end)
 * @param {T} arr
 * @param {T} v
 * @param {ICompareFn} compareFn
 * @return {*}
 */
export function binarySearch<T>(arr: T[], v: T, compareFn: ICompareFn<T> = defaultCompare): number {
  if (!isOrder(arr) && !isOrder(arr, false)) throw new Error('Array is not ordered')
  if (arr.length === 0 || !isOrder(arr)) return -1
  let begin = 0
  let end = arr.length
  while (end > begin) {
    let mid = (begin + end) >> 1
    if (compareFn(v, arr[mid]) > 0) {
      begin = mid + 1
    } else if (compareFn(v, arr[mid]) < 0) {
      end = mid
    } else {
      return mid
    }
  }
  return -1
}