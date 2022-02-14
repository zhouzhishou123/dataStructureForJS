/*
 * @Author: zhouzhishou
 * @Date: 2021-06-04 23:29:05
 * @Description: 
 */

export function factorial(num:number){
    if(num === 1) return num
    return factorial(num - 1) * num
  }