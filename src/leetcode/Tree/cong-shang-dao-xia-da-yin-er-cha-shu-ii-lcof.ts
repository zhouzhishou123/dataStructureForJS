/*
 * @Author: zhouzhishou
 * @Date: 2022-02-23 12:48:02
 * @LastEditTime: 2022-02-24 16:38:34
 * @Description: 剑指 Offer 32 - II. 从上到下打印二叉树 II https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 */

import { TreeNode, INode } from '../../util/TreeNode'

/**
 * @param {TreeNode} root
 * @return {number[][]}
         3
     9       20
 null null 15   7 
 */
  // []
  let node9 = new TreeNode(9,null,null)
  let node7 = new TreeNode(7,null,null)
  let node15 = new TreeNode(15,null,null)
  let node20 = new TreeNode(20,node15,node7)
  let node3 = new TreeNode(3,node9,node20)

const levelOrder = function<T>(root:INode<T>): T[][] {
    if(root === null) return []
    let node: INode<T> = root
    let queue: INode<T>[] = [node]
    let result:T[][] = []
    // 保存每层节点的数量
    let levelNodeSize = queue.length
    // 保存每层节点
    let levelNode: T[] = []
    while(queue.length !== 0){
        let _node: INode<T>  = queue.shift()
        levelNodeSize--
        levelNode.push(_node.key)
        if(node.left) {
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        node = queue[0]
        if(levelNodeSize === 0){
            levelNodeSize = queue.length
            result.push(levelNode)
            levelNode = []
        }
    }
    return result
};

console.log(levelOrder<number>(node3));