/*
 * @Author: zhouzhishou
 * @Date: 2021-05-13 14:53:10
 * @LastEditTime: 2022-02-24 15:26:05
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

export interface IBinarySearchTree<T> {
  compareFn: ICompareFn<T>;
  insert: (key: T) => void;
  remove: (key: T) => void
  minNode: (node: INode<T>) => INode<T>
  maxNode: (node: INode<T>) => INode<T>
  search: (key: T) => INode<T>
}

export interface IAVLTree<T> {
  height: number // AVL树的高度
  balanceFactor?: number // 平衡因子
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
}


export function TreeNode<T>(val:T, left: INode<T>, right: INode<T>) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
