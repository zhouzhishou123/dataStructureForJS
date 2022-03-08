/*
 * @Author: zhouzhishou
 * @Date: 2022-03-06 14:23:18
 * @Description: 并查集的接口定义
 */
export interface IUnioFind<V> {
    /**
     * 查找v所属的集合的根节点
     */
    find:(v:V)=> void
    /**
     * 合并v1 v2所属的集合
     */
    union:(v1: V, v2:V)=> void
    /**
     * v1 v2是否在同一个集合
     */
    isSame:(v1:V,v2:V)=> boolean
}

export interface INode<V> {
    value: V
    rank: number
    parent: INode<V>
}