/*
 * @Author: zhouzhishou
 * @Date: 2022-02-21 19:00:47
 * @LastEditTime: 2022-02-21 19:16:17
 * @Description: 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先 https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 */
import {INode} from '../../util/TreeNode'

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function<T>(root: INode<T>, p: INode<T>, q: INode<T>): INode<T> {
    if(root === null) return root
};