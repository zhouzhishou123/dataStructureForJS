/*
 * @Author: zhouzhishou
 * @Date: 2022-02-24 14:35:39
 * @LastEditTime: 2022-02-24 17:57:02
 * @Description: AVL树
 */

import { IAVLTree } from '../../util/TreeNode'
import BinarySearchTree from './BinarySearchTree'

class AVLTree<T> extends BinarySearchTree<T> implements IAVLTree<T> {
    height: number
    constructor(){
        super()
        this.height = 0
    }
    reBalance(){}
}

export default AVLTree