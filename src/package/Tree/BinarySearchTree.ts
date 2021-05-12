/*
 * @Author: zhouzhishou
 * @Date: 2021-05-10 10:48:02
 * @LastEditTime: 2021-05-12 16:48:05
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
  isLeaf: () => boolean;
}

interface IBinarySearchTree<T> {
  root: INode<T>;
  length: number;
  compareFn: ICompareFn<T>;
  size: () => number;
  insert: () => void;
  preOrderTraverse: () => void;
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
  isLeaf(): boolean {
    return this.right === null && this.left === null;
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
  /**
   * 二叉树的高度
   */
  _height(node: INode<T> = this.root): number {
    if (node === null) return 0;
    return 1 + Math.max(this._height(node.left), this._height(node.right));
  }
  /**
   * 二叉树的高度
   */
  height(node: INode<T> = this.root): number {
    if (node === null) return 0;
    let height = 0; // 节点的高度
    const queue = [node];
    let levelNodeSize = queue.length; //每层节点的数量
    while (queue.length) {
      let _node = queue.shift();
      levelNodeSize--;
      if (_node.left) {
        queue.push(_node.left);
      }
      if (_node.right) {
        queue.push(_node.right);
      }
      if (levelNodeSize === 0) {
        levelNodeSize = queue.length;
        height++;
      }
    }
    return height;
  }
  /**
   * 是否为完全二叉树
   */
  isComplete(): boolean {
    const node = this.root;
    if (node === null) return false;
    const queue = [node];
    let leaf = false; // 是否为叶子节点
    while (queue.length) {
      let _node = queue.shift();
      if (leaf && !_node.isLeaf()) return false;
      if (_node.left) {
        queue.push(_node.left);
      } else {
        // 左节点为空 右节点存在
        if (_node.right) return false;
      }
      if (_node.right) {
        queue.push(_node.right);
      } else {
        // 右节点为空左节点存在 || 左右节点都为空 后面所有的节点一定叶子节点
        leaf = true;
      }
    }
    return true;
  }
  /**
   * 求二叉树中最小节点
   */
  minNode():INode<T>{
    let node = this.root
    if(node === null) return node
    while(node && node.left){
      node = node.left
    }
    return node
  }
  /**
   * 求二叉树中最大节点
   */
  maxNode():INode<T>{
    let node = this.root
    if(node === null) return node
    while(node && node.right){
      node = node.right
    }
    return node
  }
  /**
   * 查找key的节点
   */
  search(key:T):INode<T> {
     let cmp = 0
     let node = this.root
     let queue = [node]
     while(queue.length){
       let _node = queue.shift()
       cmp = this.compareFn(key, _node.key)
       if(cmp === CompareResult.EQUAL) return _node
       if(_node.left){
         queue.push(_node.left)
       }
       if(_node.right){
         queue.push(_node.right)
       }
     }
     return null
  }
  /**
   * 添加元素
   */
  insert(key: T): void {
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
          node.key = key; // 相等的就覆盖
          return;
        }
      }
      const newNode = new Node(key, parent);
      if (cmp > 0) {
        parent.right = newNode;
      } else {
        parent.left = newNode;
      }
    }
    this.length++;
  }
  /**
   * 前序遍历
   */
  preOrderTraverse(node: INode<T> = this.root): T[] {
    const res: T[] = [];
    function traverse(node: INode<T>) {
      if (node === null) return;
      res.push(node.key);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(node);
    return res;
  }
  /**
   * 中序遍历
   */
  inOrderTraverse(node: INode<T> = this.root): T[] {
    const res: T[] = [];
    function traverse(node: INode<T>) {
      if (node === null) return;
      traverse(node.left);
      res.push(node.key);
      traverse(node.right);
    }
    traverse(node);
    return res;
  }
  /**
   * 后序遍历
   */
  postOrderTraverse(node: INode<T> = this.root): T[] {
    const res: T[] = [];
    function traverse(node: INode<T>) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      res.push(node.key);
    }
    traverse(node);
    return res;
  }
  /**
   * 层序遍历
   */
  levelOrderTraverse(node: INode<T> = this.root): T[] {
    if (node === null) return [];
    const res: T[] = [];
    const queue: INode<T>[] = [node]; //队列
    while (queue.length) {
      let node = queue.pop();
      res.push(node.key);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    return res;
  }
}

export default BinarySearchTree;
