/*
 * @Author: zhouzhishou
 * @Date: 2022-02-24 13:50:03
 * @LastEditTime: 2022-02-24 15:01:45
 * @Description: 
 */
import { INode, ITree } from '../../util/TreeNode'

class Tree<T> implements ITree<T>{
    root: INode<T>
    length: number
    constructor() {
        this.root = null
        this.length = 0
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
    getHeight(node: INode<T> = this.root): number {
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
    precursorNode(node: INode<T> = this.root) {
        if (node === null) return node;
        if (node.left === null) {
            let parent = node.parent;
            while (parent !== null && parent.left === node) {
                node = node.parent;
            }
            return parent;
        } else {
            let _node = node.left;
            while (_node.right !== null) {
                _node = _node.right;
            }
            return _node;
        }
    }
    /**
     * 获取后继节点
     * node.right !==null node.right.left.left.left.left...
     * node.right === null node.parent..... node在parent的左子树
     */
    successorNode(node: INode<T> = this.root) {
        if (node === null) return node;
        if (node.right === null) {
            let parent = node.parent;
            while (parent !== null && parent.right === node) {
                node = node.parent;
            }
            return parent;
        } else {
            let _node = node.right;
            while (_node.left !== null) {
                _node = _node.left;
            }
            return _node;
        }
    }
}

export default Tree