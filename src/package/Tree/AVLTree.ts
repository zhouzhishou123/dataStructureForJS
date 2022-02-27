/*
 * @Author: zhouzhishou
 * @Date: 2022-02-24 14:35:39
 * @LastEditTime: 2022-02-25 22:39:15
 * @Description: AVL树
 */

import { AVLNode, IAVLTree } from '../../util/TreeNode'
import BinarySearchTree from './BinarySearchTree'

class AVLTree<T> extends BinarySearchTree<T> implements IAVLTree<T> {
    constructor(compareFn: any) {
        super(compareFn)
    }
    /**
     * @param {T} key
     * @param {AVLNode} parent
     * @return {*}
     * @Description: 
     */    
    createNode(key: T, parent: AVLNode<T> | null): AVLNode<T> {
        return new AVLNode(key, parent)
    }
    /**
     * @param {AVLNode} node
     * @return {*}
     * @Description: 
     */    
    private isBalanced<T>(node: AVLNode<T>): boolean {
        return Math.abs(node.balanceFactor()) <= 1
    }
    /**
     * @param {AVLNode} node
     * @return {*}
     * @Description: 
     */    
    updateHeight(node: AVLNode<T>) {
        let avlNode = node
        avlNode.updateHeight()
    }
    /**
     * @param {any} node
     * @return {*}
     * @Description: 
     */    
    afterAdd(node: any): void {
        while ((node = node.parent) !== null) {
            if (this.isBalanced(node)) {
                // 更新高度
                this.updateHeight(node)
            } else {
                //恢复平衡
                this.reBalance(node)
                break;
            }
        }
    }
    /**
     * @param {any} node
     * @return {*}
     * @Description: 
     */    
    afterRemove(node: any): void {
        while ((node = node.parent) !== null) {
            if (this.isBalanced(node)) {
                // 更新高度
                this.updateHeight(node)
            } else {
                //恢复平衡
                this.reBalance(node)
            }
        }
    }
    /**
     * @param {*} node
     * @return {*}
     * @Description: 
     */
    reBalance(grand: AVLNode<T>): void {
        let parent = grand.tallerChild()
        let node = parent.tallerChild()
        if (parent.isLeftChild()) { // L
            if (node.isLeftChild()) {  // LL
                this.rotateRight(grand)
            } else { //LR
                this.rotateLeft(parent)
                this.rotateRight(grand)
            }
        } else { // R
            if (node.isLeftChild()) { // RL
                this.rotateRight(parent)
                this.rotateLeft(grand)
            } else { //RR
                this.rotateLeft(grand)
            }
        }
    }
    /**
     * @param {*} node
     * @return {*}
     * @Description: 左旋转
     */
    rotateLeft(grand: AVLNode<T>): void {
        let parent = grand.right
        let child = parent.left
        grand.right = child
        parent.left = grand

        this.afterRotate(grand,parent as AVLNode<T>,child as AVLNode<T>)
    }
    /**
     * @param {*} node
     * @return {*}
     * @Description: 右旋转
     */
    rotateRight(grand: AVLNode<T>): void {
        let parent = grand.left
        let child = parent.right
        grand.left = child
        parent.right = grand

        this.afterRotate(grand,parent as AVLNode<T>,child as AVLNode<T>)
    }
    /**
     * @param {AVLNode} grand
     * @param {AVLNode} parent
     * @param {AVLNode} child
     * @return {*}
     * @Description: 
     */    
    private afterRotate(grand: AVLNode<T>,parent: AVLNode<T>,child: AVLNode<T>){
        parent.parent = grand.parent
        if(grand.isLeftChild()){ // 修改parent为父节点
            grand.parent.left = parent
        }else if(grand.isRightChild()) {
            grand.parent.right = parent
        }else { // 根节点
            this.root = parent
        }
        // 更新child的父节点
        if(child!==null){
            child.parent = grand
        }

        // 更新grand的父节点
        grand.parent = parent

        //更新高度
        this.updateHeight(grand)
        this.updateHeight(parent as AVLNode<T>)
    }
}

export default AVLTree