/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:35:19
 * @Description: 
 */

import BinarySearchTree from "./package/Tree/BinarySearchTree";

const binarySearchTree = new BinarySearchTree()
let arr = [7, 4, 9, 2, 1, 3, 5, 8, 11, 10, 12]
for(let i=0;i<arr.length;i++){
    binarySearchTree.insert(arr[i])
}
console.log(binarySearchTree.size(), '====binarySearchTree=====');
console.log(binarySearchTree, '====binarySearchTree=====');

console.log(binarySearchTree.search(11));
