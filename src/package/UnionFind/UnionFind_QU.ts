/*
 * @Author: zhouzhishou
 * @Date: 2022-03-07 19:33:14
 * @LastEditTime: 2022-03-08 15:51:34
 * @Description: Quick Union 查找(Find)的时间复杂度O(logn) 可以优化到O(α(n)),α(n)\
 *               合并的时间复杂度O(n)
 */

import { IUnioFind } from './Declare'

class UnioFind_QU implements IUnioFind<number> {
    parents: number[] = []
    constructor(parents: number[]) {
        for (let i = 0; i < parents.length; i++) {
            this.makeSet(parents[i])
        }
    }
    makeSet(v: number) {
        this.parents[v] = v
    }
    find(v: number) {
        while(v!== this.parents[v]){
            v = this.parents[v]
        }
        return v
    }
    /**
     * 让v1 的根节点指向v2 的根节点
     */
    union(v1: number, v2: number) {
        let p1 = this.find(v1)
        let p2 = this.find(v2)
        if(p1===p2) return
        this.parents[p1] = p2
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

export default UnioFind_QU