/*
 * @Author: zhouzhishou
 * @Date: 2022-03-07 19:33:14
 * @LastEditTime: 2022-03-07 19:40:25
 * @Description: 
 */

/*
   2. Quick Union
       查找(Find)的时间复杂度O(logn) 可以优化到O(α(n)),α(n)
       合并的时间复杂度O(n)
*/

import { IUnioFind } from './Declare'

class UnioFind_QU implements IUnioFind<number> {
    parents: number[] = []
    constructor(parents: number[]) {
        this.makeSet(parents)
    }
    makeSet(parents: number[]) {
        for (let i = 0; i < parents.length; i++) {
            this.parents[parents[i]] = parents[i]
        }
    }
    find (v: number) {

    }
    /**
     * 让v1 的根节点指向v2 的根节点
     */
    union (v1: number, v2: number) {
        
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