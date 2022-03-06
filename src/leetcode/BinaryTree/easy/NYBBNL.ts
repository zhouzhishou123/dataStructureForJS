/*
 * @Author: zhouzhishou
 * @Date: 2022-02-21 12:46:02
 * @LastEditTime: 2022-02-21 19:07:09
 * @Description: 剑指 Offer II 052. 展平二叉搜索树 https://leetcode-cn.com/problems/NYBBNL/
 */
import { INode } from '../../util/TreeNode'
import BinarySearchTree from '../../package/Tree/BinarySearchTree'
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

let binarySearchTree = new BinarySearchTree<number>()
binarySearchTree.insert(5)
binarySearchTree.insert(1)
binarySearchTree.insert(7)


const increasingBST = function<T>(root: INode<T>): INode<T> {
    if( root === null ) return root
    let nodes = []
    function inorderTraversal<T>(root: INode<T>){
        if(root===null) return root
        inorderTraversal(root.left)
        nodes.push(root)
        inorderTraversal(root.right)
    }
    inorderTraversal(root)
    root = nodes[0]
    for(let i = 0;i < nodes.length; i++){
        if(nodes[i].left){
            nodes[i].left = null
        }
        if(i<nodes.length-1){
            nodes[i].right = nodes[i+1]
        }else {
            nodes[i].right = null
        }
    }
    return root
};

 increasingBST(binarySearchTree.root)