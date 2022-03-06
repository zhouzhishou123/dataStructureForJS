/*
 * @Author: zhouzhishou
 * @Date: 2022-02-23 17:41:40
 * @LastEditTime: 2022-02-23 18:39:26
 * @Description: 104. 二叉树的最大深度 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */

import { TreeNode, INode } from '../../util/TreeNode'

/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth1 = function<T>(root: INode<T>):number {
    if(root === null) return 0
    return Math.max(maxDepth1(root.right), maxDepth1(root.left)) + 1
};



const maxDepth2 = function<T>(root: INode<T>):number{
    if(root === null) return 0
    let node: INode<T> = root
    let height:number = 0
    let queue: INode<T>[]= [node]
    let levelNodeSize = queue.length
    while(queue.length !== 0){
        queue.shift()
        levelNodeSize--
        if(node.right){
            queue.push(node.right)
        }
        if(node.left){
            queue.push(node.left)
        }
        node = queue[0]
        if(levelNodeSize === 0){
            levelNodeSize = queue.length
            height++
        }
    }
    return height
}