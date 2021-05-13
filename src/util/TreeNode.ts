/*
 * @Author: zhouzhishou
 * @Date: 2021-05-13 14:53:10
 * @LastEditTime: 2021-05-13 14:55:20
 * @Description:
 */

export interface INode<T> {
    val:T
    left: INode<T>
    right: INode<T>
}



export function TreeNode<T>(val:T, left: INode<T>, right: INode<T>) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
