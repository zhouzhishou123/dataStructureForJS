/*
 * @Author: zhouzhishou
 * @Date: 2022-02-16 12:34:28
 * @LastEditTime: 2022-02-16 12:38:29
 * @Description: 
 */
export interface IListNode<T> {
    val: T
    next: IListNode<T>
}

export function ListNode<T>(val:T, next:IListNode<T>) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}
