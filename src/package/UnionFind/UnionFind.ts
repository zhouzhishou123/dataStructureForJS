/*
 * @Author: zhouzhishou
 * @Date: 2022-03-06 14:05:57
 * @Description: 并查集
 */

import { IUnioFind, INode } from './Declare'

class Node<T> implements INode<T> {
    value: T;
    rank: number;
    parent: INode<T>;
    constructor(value: T) {
        this.value = value
        // 根节点指向自身
        this.parent = this
        this.rank = 1
    }
}

class UnioFind<V> implements IUnioFind<V> {
    parents: Map<V, Node<V>> = new Map()
    constructor(parents: V[]) {
        for (let i = 0; i < parents.length; i++) {
            this.makeSet(parents[i])
        }
    }
    /**
     * @description: 添加一个元素v 这个元素单独属于一个仅有它自己的集合 
     * @param {V} v
     * @return {*}
     */
    makeSet(v: V): void {
        this.parents.set(v, new Node(v))
    }
    /**
     * @description: 找到v所在集合的根节点
     * @param {V} v
     * @return {*}
     */
    find(v: V): Node<V> {
        let value = this.parents.get(v)
        if (!value) return
        while (value !== value.parent) {
            value = value.parent
        }
        return value
    };
    /**
     * @description: 把元素v1所在的集合与元素v2所在的集合合并为一个
     * @param {V} v1
     * @param {V} v2
     * @return {*}
     */
    union(v1: V, v2: V): void {
        let p1 = this.find(v1)
        let p2 = this.find(v2)
        if (p1 === p2) return
        if (p1.rank === p2.rank) {
            p1.parent = p2
        } else if (p1.rank > p2.rank) {
            p2.parent = p1
        } else {
            p1.parent = p2
        }
    };
    isSame(v1: V, v2: V): boolean {
        let p1 = this.find(v1)
        let p2 = this.find(v2)
        if (p1 === p2) return true
        return false
    };
}

export default UnioFind
