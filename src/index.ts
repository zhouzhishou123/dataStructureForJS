/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:35:19
 * @Description: 
 */

import ArrayList from './package/ArrayList'


const arrayList = new ArrayList(10)

for(let i=0;i<30;i++){
    arrayList.push(i)
}
arrayList.clear()
console.log(arrayList);
