/*
 * @Author: zhouzhishou
 * @Date: 2022-02-13 00:57:34
 * @Description: 字典树 前缀树 单词查找树
 */

interface ITrie<V> {
    size:()=> number
    isEmpty:()=> boolean
    clear:()=> void
    contains:(str: string)=> boolean
    add:(str:string, val:V)=> V
    remove:(str:string)=> V
    startWidth: (prefix: string)=> boolean
}
interface INode<V> {
    key: string
    value:V
    word: boolean
}

  class Node<V> implements INode<V> {
    key: string
    value: V
    word: boolean
}

class Trie<V> implements ITrie<V> {
    length:number = 0
    size(){
        return this.length
    }
    isEmpty(){
        return this.length === 0
    }
    clear(){

    }
    contains(){
        return false
    }
    add(str:string, val:V):V{
        return val
    }
    remove(str:string):V{
        return 
    }
    startWidth(prefix:string){
        return false
    }
}

export default Trie
