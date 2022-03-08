/*
 * @Author: zhouzhishou
 * @Date: 2022-03-08 13:54:19
 * @LastEditTime: 2022-03-08 14:58:12
 * @Description: 
 */
import UnioFind_QU from './UnionFind_QU'

class UnioFind_QU_R extends UnioFind_QU {
    // 树的高度
    ranks:number[] = []
    constructor(parents: number[]){
        super(parents)
        for(let i=0;i<parents.length;i++){
            this.ranks[parents[i]] = 1
        }
    }
    /**
    * 让size小的根节点指向size大的根节点
    */
    union(v1: number, v2: number) {
        let p1 = this.find(v1)
        let p2 = this.find(v2)
        // 跟组织一样则说明在一个集合
        if(p1 === p2) return
        if(this.ranks[p1] === this.ranks[p2]){
            // 更新v1的根节点
            this.parents[v1] = p2
            // 更新v2根节点的高度
            this.ranks[p2]+=1
        }else if(this.ranks[p1] > this.ranks[p2]){
            this.parents[v2] = p1
        }else {
            this.parents[v1] = p2
        }
    }
}

export default UnioFind_QU_R