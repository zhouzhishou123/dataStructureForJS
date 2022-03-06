/*
 * @Author: zhouzhishou
 * @Date: 2022-02-24 16:20:21
 * @LastEditTime: 2022-02-24 16:31:03
 * @Description: 637. 二叉树的层平均值 https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
 */


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root):number[] {
    if(root=== null) return []
    let queue = [root]
    let levelNodeSize = queue.length
    let length = queue.length
    let result = []
    let sum = 0
    while( queue.length !==0 ) {
      let node = queue.shift()
      sum+= node.val
      levelNodeSize--
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
      if(levelNodeSize === 0){
          result.push(sum / length)
          levelNodeSize = queue.length
          length = queue.length
          sum = 0
      }
    }
    return result
};