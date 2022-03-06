/*
 * @Author: zhouzhishou
 * @Date: 2022-02-24 11:32:35
 * @LastEditTime: 2022-02-24 13:30:29
 * @Description: 110. 平衡二叉树 https://leetcode-cn.com/problems/balanced-binary-tree/
 */

import BinarySearchTree from "../../package/Tree/BinarySearchTree";
let bst = new BinarySearchTree()
let arr = [16, 18, 7, 3]
arr.forEach(item=> {
    bst.insert(item)
})

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = function(root) {
    if (root === null) return true;
    function height(node){
        if (node === null) return 0;
        return 1 + Math.max(height(node.left), height(node.right));
    }
    const queue = [root]; //队列
    while (queue.length) {
      let node = queue.pop();
      let abs = Math.abs(height(node.right)-height(node.left))
      if(abs > 1) return false
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    return true
};

