/*
 * @Author: zhouzhishou
 * @Date: 2022-02-11 21:47:43
 * @Description: 
 */
//  堆：一种树状的结构数据 （二叉堆）
// 性质： 任意节点的值总是>=(<=) 子节点的值
// 如果任意节点的值总是 >=子节点的值 称为：最大堆、大根堆、大顶堆 最大值在根节点
// 如果任意节点的值总是 <=子节点的值 称为：最小堆、小根堆、小顶堆 最小值在根节点

/*
    size: 元素的数量
    isEmpty 是否为空
    clear 清空
    add 添加元素
    get 获取堆顶元素
    remove 删除堆顶元素
    replace 删除堆顶元素的同时插入一个新元素
*/ 

interface Heap<T> {
    clear: ()=> void
    add:(e:T)=> void
    get:()=> T
    remove:()=> void
    replace:(e:T)=> void
    size: ()=> number
    isEmpty:()=> boolean
}

export default Heap