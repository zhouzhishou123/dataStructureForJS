/*
 * @Author: zhouzhishou
 * @Date: 2022-02-28 11:23:05
 * @LastEditTime: 2022-03-03 18:28:32
 * @Description: 1382. 将二叉搜索树变平衡 https://leetcode-cn.com/problems/balance-a-binary-search-tree/
 */


interface INode<T> {
    val: T
    left: INode<T>
    right: INode<T>
    parent: INode<T>
    isLeaf: () => boolean
    hasTwoChild: () => boolean
    isRightNode: () => boolean
    isLeftNode: () => boolean
}

class TreeNode<T> implements INode<T> {
    val: T
    left: INode<T>
    right: INode<T>
    parent: INode<T>
    constructor(val: T, parent: INode<T>, left = null, right = null) {
        this.val = val
        this.parent = parent
        this.left = left
        this.right = right
    }
    //叶子节点
    isLeaf() {
        return this.left === null && this.right === null
    }
    // 只有一个左节点
    isLeftNode() {
        return this !== null && this.left !== null && this.right === null
    }
    // 只有一个右子节点
    isRightNode() {
        return this !== null && this.left === null && this.right !== null
    }
    // 有两个子节点
    hasTwoChild() {
        return this.left !== null && this.right !== null
    }
}

class BST<T> {
    size: number
    comparator: (a: T, b: T) => number
    root: INode<T>
    constructor(comparator = (a: any, b: any) => (a - b) as number) {
        this.size = 0
        this.root = null
        this.comparator = comparator
    }
    afterAdd(node: INode<T> | TreeNode<T> ) { }
    // 创建节点
    createNode(val: T, parent) {
        return new TreeNode(val, parent)
    }
    // 添加
    create(val: T) {
        if (this.root === null) {
            this.root = this.createNode(val, null)
            this.size++
            this.afterAdd(this.root)
        } else {
            let node = this.root
            let parent: INode<T>
            let compare = 0
            while (node !== null) {
                parent = node
                compare = this.comparator(val, node.val)
                if (compare > 0) {
                    node = node.right
                } else if (compare < 0) {
                    node = node.left
                } else {
                    node.val = val
                    return
                }
            }
            node = this.createNode(val, parent)
            this.size++
            if (compare > 0) {
                parent.right = node
            } else {
                parent.left = node
            }
            this.afterAdd(node)
        }
    }
    afterRemove(node: INode<T> | TreeNode<T>) { }
    // 删除
    remove(val: T): INode<T> {
        let node = this.search(val)
        if (node === null) return node
        // 删除叶子节点
        if (node.isLeaf()) {
            // 如果节点是根节点
            if (node.parent === null) {
                this.root = null
            }
            if (node.parent.left === node) {
                node.parent.left = null
            }
            if (node.parent.right === node) {
                node.parent.right = null
            }
            this.afterRemove(node)
            this.size--
        } else if (node.hasTwoChild()) {
            //后继节点
            let successorNode = this.successorNode(val)
            node.val = successorNode.val
            node.right = successorNode.right
            if (successorNode.right) {
                successorNode.right.parent = node
            }
            successorNode = null
            this.afterRemove(node)
            this.size--
        } else { // 删除度为1的节点
            if (node.isLeftNode()) {
                node.val = node.left.val
            }
            if (node.isRightNode) {
                node.val = node.right.val
            }
            this.afterRemove(node)
            this.size--
        }

        return node
    }
    //前驱节点
    /**
     *            12
               5      16
            2     10   
     */
    precusorsNode(val: T): INode<T> {
        let node = this.search(val)
        if (node === null) return node
        let leftNode = node.left
        let precusorsNode: INode<T>
        if (leftNode === null) {
            while (node !== null) {
                if (node.parent.right === node) {
                    precusorsNode = node.parent
                    break
                }
                node = node.parent
            }
        } else {
            while (leftNode !== null) {
                precusorsNode = leftNode
                leftNode = leftNode.right
            }
        }
        return precusorsNode
    }
    /**
     * 后继节点
     */
    successorNode(val: T): INode<T> {
        let node = this.search(val)
        if (node === null) return node
        let rightNode = node.right
        let successorNode: INode<T>
        if (rightNode === null) {
            while (node !== null) {
                if (node.parent.left === node) {
                    successorNode = node.parent
                    break
                }
                node = node.parent
            }
        } else {
            while (rightNode !== null) {
                successorNode = rightNode
                rightNode = rightNode.left
            }
        }
        return successorNode
    }
    // 修改
    update(val: T, newVal: T) {
        let node = this.search(val)
        if (node === null) return
        // 有可能就不是二叉搜索树
        node.val = newVal
        // TODO
    }
    // 查找
    search(val: T) {
        let node = this.root
        while (node !== null) {
            if (node.val === val) {
                return node
            }
            if (node.val > val) {
                node = node.left
            } else {
                node = node.right
            }
        }
        return null
    }
}

class AVLTree<T> extends BST<T>{
    constructor(comparator) {
        super(comparator)
    }
    // 创建节点
    createNode(val: T, parent) {
        return new AVLTreeNode(val, parent)
    }
    // 添加节点后调用此函数
    afterAdd(node) {
        let parent = node.parent
        while (parent !== null) {
            if (parent.isBalanced()) {
                // 更新高度
                this.updateHeight(parent)
            } else {
                this.reBalanced(parent)
                break;
            }
            parent = parent.parent
        }
    }
    afterRemove(node) {
        let parent = node.parent
        while (parent !== null) {
            if (parent.isBalanced()) {
                // 更新高度
                this.updateHeight(parent)
            } else {
                this.reBalanced(parent)
            }
            parent = parent.parent
        }
    }
    reBalanced(grand) {
        let parent = grand.tallerChild()
        let node = parent.tallerChild()
        if (parent.isParentRight() && node.isParentRight()) { // RR 左旋转
            this.rotateLeft(grand)
        } else if (parent.isParentLeft() && node.isParentLeft()) { // LL 右旋转
            this.rotateRight(grand)
        } else if (parent.isParentRight() && node.isParentLeft()) { // RL         
            this.rotateRight(parent)
            this.rotateLeft(grand)
        } else {
            this.rotateLeft(parent)
            this.rotateRight(grand)
        }
    }
    rotateLeft(grand) {
        let parent = grand.right
        let child = parent.left
        parent.left = grand
        grand.right = child
        this.afterRotae(grand, parent, child)
    }
    rotateRight(grand) {
        let parent = grand.left
        let child = parent.right

        grand.left = child
        parent.right = grand
        this.afterRotae(grand, parent, child)
    }
    afterRotae(grand, parent, child) {
        // 修改parent的父节点
        parent.parent = grand.parent
        if (grand.isParentLeft()) {
            grand.parent.left = parent
        } else if (grand.isParentRight()) {
            grand.parent.right = parent
        } else {
            this.root = parent
        }

        grand.parent = parent
        if (child) {
            child.parent = grand
        }
        this.updateHeight(grand)
        this.updateHeight(parent)
    }
    updateHeight(node) {
        node.updateHeight()
    }
}

interface IAVLTreeNode {
    height: number
}

class AVLTreeNode<T> extends TreeNode<T> {
    height: number = 1
    constructor(val: T, parent, left = null, right = null) {
        super(val, parent, left, right)
    }
    // 是否平衡
    isBalanced() {
        let leftHeight = this.left ? (this.left as AVLTreeNode<T>).height : 0
        let rightHeight = this.right ? (this.right as AVLTreeNode<T>).height : 0
        return Math.abs(leftHeight - rightHeight) <= 1
    }
    updateHeight() {
        // 叶子节点初始化高度为 1
        let leftHeight = this.left ? (this.left as AVLTreeNode<T>).height : 0
        let rightHeight = this.right ? (this.right as AVLTreeNode<T>).height : 0
        this.height = Math.max(leftHeight, rightHeight) + 1
    }
    tallerChild() {
        let leftHeight = this.left ? (this.left as AVLTreeNode<T>).height : 0
        let rightHeight = this.right ? (this.right as AVLTreeNode<T>).height : 0
        if (leftHeight > rightHeight) {
            return this.left
        } else if (leftHeight < rightHeight) {
            return this.right
        } else { // 高度相同
            if (this.isLeftNode()) { // 节点是父节点的左子节点
                return this.left
            } else { //节点是父节点的左子节点
                return this.right
            }
        }
    }
    //节点是父节点的左子节点
    isParentLeft() {
        return this.parent !== null && this.parent.left === this
    }
    //节点是父节点的右子节点
    isParentRight() {
        return this.parent !== null && this.parent.right === this
    }
}


const avlTree = new AVLTree((a, b) => a - b)
avlTree.create(100)
avlTree.create(120)
avlTree.create(98)
avlTree.create(95)

// avlTree.create(17)
// avlTree.create(11)

avlTree.remove(120)

console.log(avlTree);

