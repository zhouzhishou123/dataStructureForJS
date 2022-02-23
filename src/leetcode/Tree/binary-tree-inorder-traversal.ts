/*
 * @Author: zhouzhishou
 * @Date: 2022-02-22 14:10:43
 * @LastEditTime: 2022-02-23 12:41:35
 * @Description: 94. 二叉树的中序遍历 https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */
import { TreeNode, INode } from '../../util/TreeNode'


let node3 = new TreeNode(3, null, null)
let node2 = new TreeNode(2, node3, null)
let node1 = new TreeNode(1, null, node2)



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal1 = function <T>(root: INode<T>): T[] {
    let result: T[] = []
    function traversal(root: INode<T>) {
        if (root === null) return null
        traversal(root.left)
        result.push(root.val)
        traversal(root.right)
    }
    traversal(root)
    return result
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal2 = function <T>(root: INode<T>): T[] {
    if (root === null) return []
    let result: T[] = []
    let stack: INode<T>[] = []
    let node = root
    while (true) {
        if (node !== null) {
            stack.push(node)
            node = node.left
        } else if (stack.length === 0) {
            return result
        } else {
            let s = stack.pop()
            result.push(s.val)
            node = s.right
        }
    }
}

console.log(inorderTraversal2<number>(node1));