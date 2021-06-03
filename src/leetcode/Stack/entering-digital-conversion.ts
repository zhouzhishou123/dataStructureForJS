/*
 * @Author: zhouzhishou
 * @Date: 2021-06-03 20:47:24
 * @Description: 数制间的相互转换 将数字n转换为以b（2-9）为基数的数字
 * 1. 最高位为 n % b 将此位压入栈
 * 2. 使用n/b 代替 n
 * 3. 重复步骤1和2，直到n等于0且没有余数
 * 4. 持续将栈内元素弹出 直到栈为空 一次将这些元素排列就得到转换后数字的字符串形式
 */

  export default function mulBase(num:number, base:number):string{
      const stack = []
      let result: string = ''
      while(num > 0 ){
        let mod = num % base
        stack.push(mod)
        num = Math.floor(num / base)
      }
      while(stack.length > 0){
          let peek = stack.pop()
          result+=peek
      }
      return result
  } 




 