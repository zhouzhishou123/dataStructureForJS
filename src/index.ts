/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:35:19
 * @Description:
 */

import BubbleSort from './Algorithms/Sort/BubbleSort'
import SelectionSort from './Algorithms/Sort/SelectionSort'
import HeapSort from './Algorithms/Sort/HeapSort'
import InsertSort from './Algorithms/Sort/InsertSort'
import { genRandomNums, binarySearch, isOrder } from './util/index'

let arr = genRandomNums(10, 100, 15)
let insertSort = new InsertSort(arr)

console.log(insertSort);

