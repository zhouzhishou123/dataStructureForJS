/*
 * @Author: zhouzhishou
 * @Date: 2021-05-13 14:53:10
 * @LastEditTime: 2022-02-25 01:34:30
 * @Description:
 */
import { ICompareFn } from './comparator'
export interface ITree<T> {
  root: INode<T>;
  length: number;
  size: () => number;
  preOrderTraverse: (callback: () => any, node: INode<T>) => void; // 前序遍历
  inOrderTraverse: (callback: () => any, node: INode<T>) => void; // 中序遍历
  postOrderTraverse: (callback: () => any, node: INode<T>) => void; // 后序遍历
  levelOrderTraverse: (callback: () => any, node: INode<T>) => void; // 层序遍历
  getHeight: (node?: INode<T>) => number // 节点的高度
  isComplete: () => boolean // 是否为完全二叉树
  precursorNode: (node: INode<T>) => INode<T> // 前驱节点
  successorNode: (node: INode<T>) => INode<T> // 后继节点
}

export interface INode<T> {
  key: T;
  left: INode<T> | null;
  right: INode<T> | null;
  parent: INode<T> | null;
  isLeaf: () => boolean;
  hasTwoNode: () => boolean;
}

// 二叉树树的接口
export interface IBinarySearchTree<T> {
  compareFn: ICompareFn<T>;
  insert: (key: T) => void;
  remove: (key: T) => void
  minNode: (node: INode<T>) => INode<T>
  maxNode: (node: INode<T>) => INode<T>
  search: (key: T) => INode<T>
}

// AVL树的接口
export interface IAVLTree<T> {
  createNode: (key: T, parent: AVLNode<T> | null)=> IAVLNode<T>
  afterAdd: (node: INode<T>)=> void
}

export interface IAVLNode<T> extends INode<T>{
  height: number // AVL树的高度
  balanceFactor: ()=> number
}

/**
 * 每个树的子节点
 */
export class Node<T> implements INode<T> {
  key: T; // 节点值
  left: INode<T> | null = null; // 左子节点
  right: INode<T> | null = null; // 右子节点
  parent: INode<T> | null = null; // 父节点
  constructor(key: T, parent: INode<T> | null) {
    this.key = key;
    this.parent = parent;
  }
  isLeaf(): boolean {
    return this.right === null && this.left === null;
  }
  hasTwoNode() {
    return this.right !== null && this.left !== null;
  }
  isLeftChild(){
    return this.parent!==null && this === this.parent.left
  }
  isRightChild(){
    return this.parent!==null && this === this.parent.right
  }
}

export class AVLNode<T> extends Node<T> implements IAVLNode<T> {
    height: number = 1
    constructor(key: T, parent: INode<T> | null){
      super(key, parent)
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 
     */    
    balanceFactor(): number{
      let leftHeight = this.left === null ? 0 : this.left.height
      let rightHeight = this.right === null ? 0 : this.right.height
      return leftHeight - rightHeight
  }
  /**
   * @param {*}
   * @return {*}
   * @Description: 
   */  
  updateHeight(): void{
    let leftHeight = this.left === null ? 0 : this.left.height
    let rightHeight = this.right === null ? 0 : this.right.height
    this.height = Math.max(leftHeight, rightHeight)
  }
  /**
   * @param {*}
   * @return {*}
   * @Description: 
   */  
  tallerChild(){
    let leftHeight = this.left === null ? 0 : this.left.height
    let rightHeight = this.right === null ? 0 : this.right.height
    if(leftHeight > rightHeight) return this.left
    if(leftHeight < rightHeight) return this.right
    return this.isLeftChild() ? this.left : this.right
  }
}


export function TreeNode<T>(val:T, left: INode<T>, right: INode<T>) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
