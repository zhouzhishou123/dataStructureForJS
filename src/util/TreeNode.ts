/*
 * @Author: zhouzhishou
 * @Date: 2021-05-13 14:53:10
 * @LastEditTime: 2022-02-21 19:13:08
 * @Description:
 */

export interface INode<T> {
    val?:T
    key?:T
    left: INode<T>
    right: INode<T>
    parent?:INode<T>
}



export function TreeNode<T>(val:T, left: INode<T>, right: INode<T>) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
