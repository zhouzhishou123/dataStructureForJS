/*
 * @Author: zhouzhishou
 * @Date: 2021-05-13 14:45:29
 * @LastEditTime: 2021-05-13 15:08:44
 * @Description: https://leetcode-cn.com/problems/invert-binary-tree/ 226. 翻转二叉树
 */

import { TreeNode,INode } from '../../util/TreeNode'

export const invertTree = function<T> (root:INode<T>) {
    if(root === null) return root
    /**
     * 遍历所有的子节点 左右节点交换位置
     */
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
};