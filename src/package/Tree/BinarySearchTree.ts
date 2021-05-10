/*
 * @Author: zhouzhishou
 * @Date: 2021-05-10 10:48:02
 * @LastEditTime: 2021-05-10 14:31:58
 * @Description: 二叉搜索树
 */

type ICompareFn<T> = (a: T, b: T) => number;

enum CompareResult {
  LESS_THAN = -1,
  EQUAL = 0,
  BIGGER_THAN = 1
}

function defaultCompare<T>(a: T, b: T): number {
  if (a === b) return CompareResult.EQUAL;
  if (a > b) return CompareResult.BIGGER_THAN;
  if (a < b) return CompareResult.LESS_THAN;
}

interface INode<T> {
  key: T;
  left: INode<T> | null;
  right: INode<T> | null;
  parent: INode<T> | null;
}

/**
 * 每个树的子节点
 */
class Node<T> {
  key: T; // 节点值
  left: INode<T> | null = null; // 左子节点
  right: INode<T> | null = null; // 右子节点
  parent: INode<T> | null = null; // 父节点
  constructor(key: T, parent: INode<T> | null) {
    this.key = key;
    this.parent = parent;
  }
}

class BinarySearchTree<T> {
  root: INode<T> | null; // 根节点
  length: number;
  compareFn: ICompareFn<T>; // 节点值的比较函数
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
    this.length = 0;
  }
  /**
   * 树节点的个数
   */
  size(): number {
    return this.length;
  }
  insert(key: T) {
    /**
     * 根节点为空时
     */
    if (this.root === null) {
      this.root = new Node(key, null);
    } else {
      let node = this.root;
      let cmp = 0;
      let parent: INode<T> | null = this.root;
      while (node !== null) {
        parent = node;
        cmp = this.compareFn(key, node.key);
        if (cmp > 0) {
          node = node.right;
        } else if (cmp < 0) {
          node = node.left;
        } else {
          return;
        }
      }
      const newNode = new Node(key, parent);
      if (cmp > 0) {
        parent.right = newNode;
      }  else {
        parent.left = newNode;
      }
    }
    this.length++
  }
}

export default BinarySearchTree;
