/*
 * @Author: zhouzhishou
 * @Date: 2022-03-31 21:10:10
 * @Description: 红黑树
 */

/**
 * 红黑树的性质
 * 1. 节点是RED或者是BRACK
 * 2. 根节点是BLACK
 * 3. 叶子节点（外部节点，空节点）都是BLACK
 * 4. RED节点的子节点都是BLACK
 *    RED节点的父节点都是BLACK
 *    从根节点到叶子节点的所有路径上不能有两个连续的RED节点  
 * 5. 从任一节点到叶子节点的所有路径都包含相同数目的BLACK节点
 */
import { ICompareFn, defaultCompare } from '../../util/comparator'
import BinarySearchTree from './BinarySearchTree'
import {Node, INode, IRBNode } from '../../util/TreeNode'


class RBNode<T> extends Node<T> {
    color: boolean = RBTree.RED
    constructor(key: T, parent: RBNode<T>) {
      super(key, parent)
    }
  }


class RBTree<T> extends BinarySearchTree<T> {
    static RED: boolean = false
    static BLACK: boolean = false
    constructor(compareFn = defaultCompare) {
        super(compareFn)
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 给节点染色
     */
    color(node: INode<T>, color: boolean): IRBNode<T> {
        return null
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 红色节点
     */
    red(node: INode<T>): IRBNode<T> {
        return this.color(node, RBTree.RED)
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 黑色节点
     */
    black(node: INode<T>): IRBNode<T> {
        return this.color(node, RBTree.BLACK)
    }
    /**
     * @param {IRBNode} node
     * @return {*}
     * @Description: 节点颜色
     */
    colorOf(node: IRBNode<T>): boolean {
        return node === null ? RBTree.BLACK : node.color
    }
    /**
     * @param {IRBNode} node
     * @return {*}
     * @Description: 黑色节点
     */
    isBlack(node: IRBNode<T>): boolean {
        return this.colorOf(node) === RBTree.BLACK
    }
    /**
     * @param {IRBNode} node
     * @return {*}
     * @Description: 红色节点
     */
    isRed(node: IRBNode<T>): boolean {
        return this.colorOf(node) === RBTree.RED
    }
      
}

export default RBTree