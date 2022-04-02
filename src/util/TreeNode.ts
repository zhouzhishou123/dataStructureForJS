/*
 * @Author: zhouzhishou
 * @Date: 2021-05-13 14:53:10
 * @LastEditTime: 2022-03-31 22:05:31
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
  createNode: (key: T, parent: AVLNode<T> | null) => AVLNode<T>
  afterAdd: (node: AVLNode<T>) => void
  reBalance: (node: AVLNode<T>) => void
  rotateLeft: (node: AVLNode<T>) => void
  rotateRight: (node: AVLNode<T>) => void
}

export interface IAVLNode<T> extends INode<T> {
  height: number // AVL树的高度
  balanceFactor: () => number
  updateHeight: () => void
  tallerChild: () => AVLNode<T>
}

export interface IRBNode<T> extends INode<T> {
  color: boolean
}

/**
 * @param {*}
 * @return {*}
 * @Description: 二叉搜索树的节点
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
  isLeftChild(): boolean {
    return this.parent !== null && this === this.parent.left
  }
  /**
   * @param {*}
   * @return {*}
   * @Description: 父节点的右子节点
   */
  isRightChild(): boolean {
    return this.parent !== null && this === this.parent.right
  }
  /**
   * @param {*}
   * @return {*}
   * @Description: 兄弟节点
   */
  sibling(): INode<T> {
    if (this.isRightChild()) {
      return this.parent.left
    }
    if (this.isLeftChild()) {
      return this.parent.right
    }
    return null
  }
}

/**
 * @param {*}
 * @return {*}
 * @Description: AVL树的节点
 */
export class AVLNode<T> extends Node<T> implements IAVLNode<T> {
  height: number = 1
  constructor(key: T, parent: INode<T> | null) {
    super(key, parent)
  }
  /**
   * @param {*}
   * @return {*}
   * @Description: 
   */
  balanceFactor(): number {
    let leftHeight = this.left === null ? 0 : (this.left as AVLNode<T>).height
    let rightHeight = this.right === null ? 0 : (this.right as AVLNode<T>).height
    return leftHeight - rightHeight
  }
  /**
   * @param {*}
   * @return {*}
   * @Description: 
   */
  updateHeight(): void {
    let leftHeight = this.left === null ? 0 : (this.left as AVLNode<T>).height
    let rightHeight = this.right === null ? 0 : (this.right as AVLNode<T>).height
    this.height = Math.max(leftHeight, rightHeight) + 1
  }
  /**
   * @param {*}
   * @return {*}
   * @Description: 
   */
  tallerChild(): AVLNode<T> {
    let leftHeight = this.left === null ? 0 : (this.left as AVLNode<T>).height
    let rightHeight = this.right === null ? 0 : (this.right as AVLNode<T>).height
    if (leftHeight > rightHeight) return (this.left as AVLNode<T>)
    if (leftHeight < rightHeight) return (this.right as AVLNode<T>)
    return this.isLeftChild() ? (this.left as AVLNode<T>) : (this.right as AVLNode<T>)
  }
}

export interface IHeap<T> {
  clear: () => void
  add: (e: T) => void
  get: () => T
  remove: () => void
  replace: (e: T) => void
  size: () => number
  isEmpty: () => boolean
}

export function TreeNode<T>(val: T, left?: INode<T>, right?: INode<T>) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
