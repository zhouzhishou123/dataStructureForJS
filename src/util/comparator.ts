/*
 * @Author: zhouzhishou
 * @Date: 2022-02-24 14:45:58
 * @LastEditTime: 2022-02-24 14:45:59
 * @Description: 
 */
export type ICompareFn<T> = (a: T, b: T) => number;

export enum CompareResult {
  LESS_THAN = -1,
  EQUAL = 0,
  BIGGER_THAN = 1
}

export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) return CompareResult.EQUAL;
  if (a > b) return CompareResult.BIGGER_THAN;
  if (a < b) return CompareResult.LESS_THAN;
}