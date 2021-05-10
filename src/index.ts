/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:35:19
 * @Description: 
 */

import BinarySearchTree from "./package/Tree/BinarySearchTree";

const binarySearchTree = new BinarySearchTree()

binarySearchTree.insert(8)
binarySearchTree.insert(6)
binarySearchTree.insert(9)
binarySearchTree.insert(5)
binarySearchTree.insert(7)
console.log(binarySearchTree.size(), '====binarySearchTree=====');
console.log(binarySearchTree, '====binarySearchTree=====');
