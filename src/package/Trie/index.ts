/*
 * @Author: zhouzhishou
 * @Date: 2022-02-13 00:57:34
 * @Description: 字典树 前缀树 单词查找树
 */

interface ITrie<V> {
    size: () => number
    isEmpty: () => boolean
    clear: () => void
    contains: (str: string) => boolean
    add: (str: string, val: V) => V
    // get:(str: string)=>V
    remove: (str: string) => V
    startWidth: (prefix: string) => boolean
}
interface INode<V> {
    children: Map<string, INode<V>>
    parent: INode<V>
    char:string
    value: V
    word: boolean //是否为一个完整的单词
}

class Node<V> implements INode<V> {
    children: Map<string, INode<V>> = null
    parent: INode<V>
    char:string
    value: V
    word: boolean
    constructor(parent: INode<V>) {
        this.parent = parent
    }
}

class Trie<V> implements ITrie<V> {
    length: number = 0
    root: Node<V> = null
    /**
     * @param {*}
     * @return {*}
     * @Description: 
     */
    size(): number {
        return this.length
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 
     */
    isEmpty(): boolean {
        return this.length === 0
    }
    // get(str: string){
    //     return ''
    // }
    /**
     * @param {*}
     * @return {*}
     * @Description: 
     */
    clear(): void {
        this.length = 0
        this.root = null
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 包含
     */
    contains(): boolean {
        return false
    }
    /**
     * @param {string} str
     * @param {V} val
     * @return {*}
     * @Description: 添加
     */
    add(str: string, val: V): V {

        return val
    }
    /**
     * @param {string} str
     * @return {*}
     * @Description: 删除
     */
    remove(str: string): V {
        return
    }
    /**
     * @param {string} prefix
     * @return {*}
     * @Description: 以prefix为前缀
     */
    startWidth(prefix: string): boolean {
        return false
    }
    node(key: string) {
        this.keyCheck(key)
        if (this.root === null) return null
        let node = this.root
        for (let i = 0; i < key.length; i++) {
            node = node.children.get(key[i])
            if (node === null) return null
        }
        return node.word ? node : null
    }
    private keyCheck(key: string) {
        if (key === null || key === '') throw new Error('参数异常')
    }
}

export default Trie
