/*
 * @Author: zhouzhishou
 * @Date: 2022-03-06 14:05:57
 * @Description: 并查集 Quick Find 查找(Find)的时间复杂度O(1) 合并的时间复杂度O(n)
 */

import { IUnioFind } from './Declare'

class UnioFind_QF implements IUnioFind<number> {
    parents: number[] = []
    constructor(parents: number[]) {
        this.makeSet(parents)
    }
    makeSet(parents: number[]) {
        for (let i = 0; i < parents.length; i++) {
            this.parents[parents[i]] = parents[i]
        }
    }
    /**
     * 找到v所在的根节点
     */
    find(v: number) {
        return this.parents[v]
    }
    /**
     * 让v1 所在集合的所有元素都指向v2 的根节点
     */
    union(v1: number, v2: number) {
        // v1的父节点
        let p1 = this.find(v1)
        // v2的父节点
        let p2 = this.find(v2)
        if (p1 === p2) return
        this.parents[v1] = p2
        for (let i = 0; i < this.parents.length; i++) {
            // 如果其他集合的父节点是v1的父节点则都更新成v2的父节点
            if (this.parents[i] === p1) {
                this.parents[i] = p2
            }
        }

    }
    /**
     * 集合v1和集合v2是否在同一个集合
     */
    isSame(v1: number, v2: number): boolean {
        let p1 = this.find(v1)
        let p2 = this.find(v2)
        if (p1 === p2) return true
        return false
    };
}

export default UnioFind_QF
