/*
 * @Author: zhouzhishou
 * @Date: 2022-02-24 16:37:33
 * @LastEditTime: 2022-02-24 17:10:13
 * @Description: 965. 单值二叉树  https://leetcode-cn.com/problems/univalued-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = function (root): boolean {
    if (root === null) return false
    let queue = [root]
    let element = root.val
    while (queue.length !== 0) {
        let node = queue.shift()
        if (element !== node.val) return false
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return true
};