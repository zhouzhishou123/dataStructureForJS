/*
 * @Author: zhouzhishou
 * @Date: 2022-02-22 12:36:34
 * @LastEditTime: 2022-02-24 16:17:46
 * @Description:  111. 二叉树的最小深度 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */

import BinarySearchTree from '../../package/Tree/BinarySearchTree'

let binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(3)
binarySearchTree.insert(9)
binarySearchTree.insert(20)
binarySearchTree.insert(15)
binarySearchTree.insert(7)
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
    if(root===null) return 0
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

console.log(minDepth(binarySearchTree.root));
