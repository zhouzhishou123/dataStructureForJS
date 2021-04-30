/*
 * @Author: zhouzhishou
 * @Date: 2021-04-30 16:33:32
 * @LastEditTime: 2021-04-30 16:37:23
 * @Description: 
 */


interface List<T> {
    clear: ()=> void
    size: ()=> number
    isEmpty:()=> boolean
    includes:()=> boolean
}

export default List