/*
 * @Author: zhouzhishou
 * @Date: 2021-05-10 10:48:02
 * @LastEditTime: 2022-02-24 15:22:25
 * @Description: 二叉搜索树
 */
import BinaryTree from '../Tree/BinaryTree'
import {ICompareFn,defaultCompare} from '../../util/comparator'
import {INode,IBinarySearchTree,Node} from '../../util/TreeNode'

class BinarySearchTree<T> extends BinaryTree<T> implements IBinarySearchTree<T>  {
  compareFn: ICompareFn<T>; // 节点值的比较函数
  constructor(compareFn = defaultCompare) {
    super()
    this.compareFn = compareFn;
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
    let cmp = 0;
    let node = this.root;
    while (node !== null) {
      cmp = this.compareFn(key, node.key);
      if (cmp === 0) return node;
      if (cmp > 0) node = node.right;
      if (cmp < 0) node = node.left;
    }
    return null;
  }
  reBalance(){}
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
      this.reBalance()
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
  remove(key: T): void {
    let node = this.search(key);
    if (node === null) return;
    this.length--;
    // 删除度为1或者0的节点
    function deleteNode(node: INode<T>) {
      let replaceNode = node.left ? node.left : node.right;
      // 度为 1
      if (replaceNode) {
        // 更改 parent指向
        replaceNode.parent = node.parent;
        if (node.parent === null) {
          this.root = replaceNode;
        }
        if (node === node.parent.left) {
          node.parent.left = replaceNode;
        } else {
          node.parent.right = replaceNode;
        }
      } else {
        // 度为 0
        if (node.parent === null) this.root = null; //叶子节点根节点
        if (node === node.parent.right) node.parent.right = null; // 叶子节点
        if (node === node.parent.left) node.parent.left = null;
      }
    }

    if (node.hasTwoNode()) {
      // 度为2的节点
      // 1. 找到后继节点
      let successorNode: INode<T> = this.successorNode(node);
      // 2. 后继节点的值覆盖当前要删除的额节点值
      node.key = successorNode.key;
      //3. 删除后继节点 (度为1或者0)
      return deleteNode(successorNode);
    }
    deleteNode(node);
  }
}

export default BinarySearchTree;
