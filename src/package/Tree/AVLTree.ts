/*
 * @Author: zhouzhishou
 * @Date: 2022-02-24 14:35:39
 * @LastEditTime: 2022-02-25 01:31:58
 * @Description: AVL树
 */

import {INode,AVLNode ,IAVLTree} from '../../util/TreeNode'
import BinarySearchTree from './BinarySearchTree'
class AVLTree<T> extends BinarySearchTree<T> implements IAVLTree<T> {
    constructor(compareFn){
        super(compareFn)
    }
    createNode(key: T, parent: AVLNode<T> | null){
        return new AVLNode(key, parent)
    }
    private isBalanced<T>(node): boolean{
        return Math.abs(node.balanceFactor()) <=1
    }
    updateHeight(node){
        let avlNode = node
        avlNode.updateHeight()
    }
    afterAdd(node: INode<T>): void{
        while((node=node.parent) !== null){
            if(this.isBalanced(node)){
                // 更新高度
                this.updateHeight(node)
            }else {
                //恢复平衡
                this.reBalance(node)
                break;
            }
        }
    }
    /**
     * @param {*} node
     * @return {*}
     * @Description: 
     */    
    reBalance(grand): void{
        let parent = grand.tallerChild()
        let node = parent.tallerChild()
        if(parent.isLeftChild()){ // L
            if(node.isLeftChild()){  // LL
                this.rotateRight(grand) 
            }else { //LR
                this.rotateLeft(parent)
                this.rotateRight(grand)
            }
        }else { // R
            if(node.isLeftChild()){ // RL
                this.rotateRight(parent)
                this.rotateLeft(grand)
            }else { //RR
                this.rotateLeft(grand)
            }
        }
    }
    /**
     * @param {*} node
     * @return {*}
     * @Description: 左旋转
     */    
    private rotateLeft(node): void{

    }
    /**
     * @param {*} node
     * @return {*}
     * @Description: 右旋转
     */    
    private rotateRight(node): void{

    }
}

export default AVLTree