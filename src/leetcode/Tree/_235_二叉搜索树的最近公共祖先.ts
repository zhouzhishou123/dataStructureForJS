/*
 * @Author: zhouzhishou
 * @Date: 2022-03-20 15:40:03
 * @Description: https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

import { TreeNode } from '../../util/TreeNode'
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function <T>(root: TreeNode<T>, p: TreeNode<T>, q: TreeNode<T>): TreeNode<T> {
    if (root === null || root === p || root === q) return root
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    // p和q在左右子树
    if (left !== null && right !== null) return root
    // p和q都在左子树 或者 p和q都在右子树
    return left !== null ? left : right
};