/*
 * @Author: zhouzhishou
 * @Date: 2021-04-30 16:33:32
 * @LastEditTime: 2021-05-07 14:44:00
 * @Description: 
 */


interface List<T> {
    clear: ()=> void
    size: ()=> number
    isEmpty:()=> boolean
    includes:(element:T)=> boolean
}

export default List