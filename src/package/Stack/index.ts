/*
 * @Author: zhouzhishou
 * @Date: 2021-05-12 17:13:15
 * @LastEditTime: 2021-05-12 17:30:15
 * @Description: 栈
 */

class Stack<T> {
    elements: T[] =[]
    length:number = this.elements.length
    /**
     * @description: 添加一个（或几个）新元素到栈顶。
     * @param {*}
     * @return {*}
     */    
    push(...args: T[]):number{
        let length = this.elements.push(...args)
        this.length = length
       return length
    }
    /**
     * @description: 移除栈顶的元素，同时返回被移除的元素。
     * @param {*}
     * @return {*}
     */    
    pop(): T{
        let ele = this.elements.pop()
        this.length = this.elements.length
        return ele
    }
    /**
     * @description: 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。 
     * @param {*}
     * @return {*}
     */    
    peek():T{
        return this.elements[this.elements.length-1]
    }
    /**
     * @description: 如果栈里没有任何元素就返回true，否则返回false。
     * @param {*}
     * @return {*}
     */    
    isEmpty():boolean{
        return this.size() === 0
    }
    /**
     * @description: 移除栈里的所有元素。 
     * @param {*}
     * @return {*}
     */    
    clear():void{
        this.elements = []
        this.length = 0
    }
    /**
     * @description: 返回栈里的元素个数。该方法和数组的length属性很类似。
     * @param {*}
     * @return {*}
     */    
    size():number{
        return this.length
    }
}

export default Stack