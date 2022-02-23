/*
 * @Author: zhouzhishou
 * @Date: 2022-02-22 12:36:34
 * @LastEditTime: 2022-02-22 13:39:30
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

    // 求二叉树节点的高度
    function height(node){
        if(node === null) return 0
        return Math.max(height(node.left), height(node.right)) + 1
    }
    return height(root)
};

console.log(minDepth(binarySearchTree.root));
