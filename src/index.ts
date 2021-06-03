/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:35:19
 * @Description:
 */

//5 的阶乘

function factorial(num:number){
  if(num === 1) return num
  return factorial(num - 1) * num
}
