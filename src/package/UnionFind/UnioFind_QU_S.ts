/*
 * @Author: zhouzhishou
 * @Date: 2022-03-08 11:04:46
 * @LastEditTime: 2022-03-08 13:51:36
 * @Description: 
 */

import UnioFind_QU from './UnionFind_QU'

class UnioFind_QU_S extends UnioFind_QU {
    sizes: number[] = []
    constructor(parents: number[]) {
        super(parents)
        for (let i = 0; i < parents.length; i++) {
            // 初始化每个集合都只有一个元素
            this.sizes[parents[i]] = 1
        }
    }
   /**
    * 让size小的根节点指向size大的根节点
    */
    union(v1: number, v2: number) {
        let p1 = this.find(v1)
        let p2 = this.find(v2)
        if (p1 === p2) return
        if(this.sizes[p1]=== this.sizes[p2]){
            this.sizes[p2]+= this.sizes[p2]
            this.parents[p1] = p2
        }else if(this.sizes[p1] > this.sizes[p2]){
            this.sizes[p1]+=this.sizes[p2]
            this.parents[p2] = p1
        }else {
            this.sizes[p2]+=this.sizes[p1]
            this.parents[p1] = p2
        }
    }
}

export default UnioFind_QU_S