/*
 * @Author: zhouzhishou
 * @Date: 2021-05-10 10:48:02
 * @LastEditTime: 2021-05-27 16:53:42
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
  hasTwoNode: ()=> boolean
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
  hasTwoNode(){
    return this.right !== null && this.left !== null;
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
  minNode(): INode<T> {
    let node = this.root;
    if (node === null) return node;
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }
  /**
   * 求二叉树中最大节点
   */
  maxNode(): INode<T> {
    let node = this.root;
    if (node === null) return node;
    while (node && node.right) {
      node = node.right;
    }
    return node;
  }

  /**
   * @description: 查找key的节点
   * @param {T} key
   * @return {*}
   */

  search(key: T): INode<T> {
    let cmp = 0
    let node = this.root
    while(node!== null){
     cmp = this.compareFn(key, node.key);
     if(cmp===0) return node
     if(cmp > 0) node = node.right
     if(cmp < 0) node = node.left
    }
    return null;
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
   * 1. 删除叶子节点
   *    1. node.parent.left = null
   *    2. node.parent.right = null
   *    3. root = null
   * 2. 删除度为1的节点
   *    1. node是左子节点 child.parent = node.parent node.parent.left = child
   *    2. node是右子节点 child.parent = node.parent node.parent.right = child
   *    3. node是根节点 root=child child.parent = null
   * 3. 删除度为2的节点
   *    1. 用前驱节点或者后继节点覆盖原节点的值
   *    2. 删除前驱或者后继节点 (度为1或者0)
   */
  remove(key: T){
    let node = this.search(key)
    if(node === null) return
    this.length--
    // 删除度为1或者0的节点
    function deleteNode(node: INode<T>){
      let replaceNode = node.left ?  node.left : node.right
      // 度为 1
      if(replaceNode){
        // 更改 parent指向
        replaceNode.parent = node.parent
        if(node.parent === null) {
          this.root = replaceNode
        }
        if(node === node.parent.left){
          node.parent.left = replaceNode
        }else {
          node.parent.right = replaceNode
        }
      }else {
        // 度为 0
        if(node.parent === null) this.root = null //叶子节点根节点
        if(node === node.parent.right) node.parent.right = null // 叶子节点
        if(node === node.parent.left) node.parent.left = null
      }
    }

    if(node.hasTwoNode()){ // 度为2的节点
      // 1. 找到后继节点
      let successorNode:INode<T> = this.successorNode(node)
      // 2. 后继节点的值覆盖当前要删除的额节点值
      node.key = successorNode.key
      //3. 删除后继节点 (度为1或者0)
     return deleteNode(successorNode)
    }
    deleteNode(node)
  }
  /**
   * 前序遍历
   */
  preOrderTraverse(callback: (key: T) => any, node: INode<T> = this.root): void {
    function traverse(node: INode<T>) {
      if (node === null) return;
      callback(node.key);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(node);
  }
  /**
   * 中序遍历
   */
  inOrderTraverse(callback: (key: T) => any, node: INode<T> = this.root): void {
    function traverse(node: INode<T>) {
      if (node === null) return;
      traverse(node.left);
      callback(node.key);
      traverse(node.right);
    }
    traverse(node);
  }
  /**
   * 后序遍历
   */
  postOrderTraverse(callback: (key: T) => any, node: INode<T> = this.root): void {
    function traverse(node: INode<T>) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      callback(node.key);
    }
    traverse(node);
  }
  /**
   * 层序遍历
   */
  levelOrderTraverse(callback: (key: T) => any, node: INode<T> = this.root): void {
    if (node === null) return;
    const queue: INode<T>[] = [node]; //队列
    while (queue.length) {
      let node = queue.pop();
      callback(node.key);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
  }
  /**
   * 获取前驱节点
   * node.left !==null node.left.right.right.right.right...
   * node.left === null node.parent..... node在parent的右子树 
   */
   precursorNode(node:INode<T> = this.root){
     if(node === null) return node
     if(node.left === null){
       let parent = node.parent
       while(parent!==null && parent.left === node){
         node = node.parent
       }
       return parent
     }else {
      let _node = node.left
      while(_node.right !== null){
        _node = _node.right
      }
      return _node
     }
   }
   /**
   * 获取后继节点
   * node.right !==null node.right.left.left.left.left...
   * node.right === null node.parent..... node在parent的左子树 
   */
   successorNode(node:INode<T> = this.root){
    if(node === null) return node
    if(node.right === null){
      let parent = node.parent
      while(parent!==null && parent.right === node){
        node = node.parent
      }
      return parent
    }else {
     let _node = node.right
     while(_node.left !== null){
       _node = _node.left
     }
     return _node
    }
   }
}

export default BinarySearchTree;
