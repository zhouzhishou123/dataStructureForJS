/*
 * @Author: zhouzhishou
 * @Date: 2022-02-23 19:25:05
 * @LastEditTime: 2022-02-23 19:45:27
 * @Description: 993. 二叉树的堂兄弟节点 https://leetcode-cn.com/problems/cousins-in-binary-tree/
 */

import { TreeNode, INode } from '../../util/TreeNode'

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function (root:INode<number>, x:number, y:number):boolean {
    if(root === null) return false
    if(!(root.right && root.left)) return false
};
