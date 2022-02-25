/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:35:19
 * @Description:
 */

// import BinaryHeap from './package/Heap/BinaryHeap'
// function compare<T>(a: T, b: T): number {
//     if (a === b) return 0;
//     if (a > b) return -1;
//     if (a < b) return 1;
//   }
// let data:number[] = [88,44,53,41,16,6,70,18,85,98,81,23,36,43,37]
// const binaryHeap = new BinaryHeap(data, compare)
// console.log(binaryHeap.elements);
import AVLTree from './package/Tree/AVLTree'

import {defaultCompare} from './util/comparator'
let avlTree = new AVLTree(defaultCompare)

avlTree.insert(13)
avlTree.insert(15)
avlTree.insert(16)
avlTree.insert(17)
avlTree.insert(18)
console.log(avlTree, '===aaa===');
