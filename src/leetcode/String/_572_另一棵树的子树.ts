/*
 * @Author: zhouzhishou
 * @Date: 2022-03-25 01:08:45
 * @Description: https://leetcode-cn.com/problems/subtree-of-another-tree/
 */

import { TreeNode } from '../../util/TreeNode'

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (root === null || subRoot === null) return false
    return postSerialize(root, []).includes(postSerialize(subRoot, []))
};

// 序列化二叉树
function postSerialize(root, arr) {
    if (root.left) {
        postSerialize(root.left, arr)
    } else {
        arr.push('#!')
    }
    if (root.right) {
        postSerialize(root.right, arr)
    } else {
        arr.push('#!')
    }
    arr.push(root.val + '!')
    return arr.join('')
}


let root = new TreeNode(3)
root.right = new TreeNode(5)
root.left = new TreeNode(4)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(2)


let subRoot = new TreeNode(4)
subRoot.left = new TreeNode(1)
subRoot.right = new TreeNode(2)
