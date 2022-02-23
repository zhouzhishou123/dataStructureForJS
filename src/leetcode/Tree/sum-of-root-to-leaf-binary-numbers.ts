/*
 * @Author: zhouzhishou
 * @Date: 2022-02-23 14:09:23
 * @LastEditTime: 2022-02-23 15:24:41
 * @Description: 1022. 从根到叶的二进制数之和 https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/
 */

import { TreeNode, INode } from '../../util/TreeNode'

import BinarySearchTree from '../../package/Tree/BinarySearchTree'

let binarySearchTree = new BinarySearchTree()
let nodes = [4, 1, 5, 7, 2]
for(let i=0; i<nodes.length;i++){
    binarySearchTree.insert(nodes[i])
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumRootToLeaf = function <T>(root: INode<T>): number {
    if(root=== null) return null
    let result:number = 0
    // 找出所有的叶子节点
    let leafNodes = []
    function levelOrder(root) {
        let queue = [root]
        while (queue.length) {
            let node = queue.shift()
            if (node.right === null && node.left === null) {
                leafNodes.push(node)
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            node = queue[0]
        }
    }
    levelOrder(root)
    // 查找祖先节点值并返回
    function findAncestorVal(node){
        if(node=== null) return null
        let newNode = node
        let str = newNode.key + ''
        while(newNode.parent !== null){
            str+= newNode.parent.key
            newNode = newNode.parent
        }
        return str
    }
    // 二进制转十进制
    function binaryTurnOctal(binary){
        let isBinary = binary.split('').every(item=> item=== '0' || item=== '1')
        if(!isBinary)  {
            throw new Error('请输入二进制数')
        }
        let decimal = 0
        for(let i=0; i<binary.length;i++){
            decimal += Math.pow(2, binary.length-1-i) * binary[i] 
        }
        return decimal
    }

    for(let i=0; i<leafNodes.length; i++){
        leafNodes[i] = findAncestorVal(leafNodes[i])
        result+= binaryTurnOctal(leafNodes[i])
    }
    return result
};
