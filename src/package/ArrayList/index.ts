/*
 * @Author: zhouzhishou
 * @Date: 2021-04-18 21:05:37
 * @Description: 动态数组接口设计
 */

// type IArrayList = {
//     size: number
// }


class ArrayList<T> {
    /**
     * @Description: 存储所有的元素
     */    
    private elements: T[] = []
    /**
     * @Description: 元素的数量
     */  
    private length: number = 0

    private ELEMENT_NOT_FOUND:number = -1
    //数组的容量
    private DEFAULT_CAPACITY: number = 10
    //动态扩容
    private ensureCapacity(capacity:number) {
        const oldCapacity = this.elements.length;
        if(capacity <= oldCapacity) return
        // 新容量系数1.5
        let newCapacity = oldCapacity + (oldCapacity >> 1) 
        const newElements = new Array(newCapacity)
        for(let i=0;i<this.length;i++){
            newElements[i] = this.elements[i]
        }
        this.elements = newElements
    }

    constructor(capacity: number = 10){
        capacity = capacity > 10 ? capacity : this.DEFAULT_CAPACITY
        this.elements = new Array(capacity)
    }
   /**
    * @param {*}
    * @return {*}
    * @Description: 数组的长度
    */ 
   public size():number{
       return this.length
    }
    
   /**
    * @param {*}
    * @return {*}
    * @Description: 判断数组是否为空
    */   
   public isEmpty():boolean{
       return !!this.length
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
     */    
    public includes(element:T):boolean{
        return this.indexOf(element) !== this.ELEMENT_NOT_FOUND
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 将一个或多个元素添加到数组的末尾，并返回该数组的新长度(该方法修改原有数组)
     */    
    public push(...args: T[]):number{
        this.ensureCapacity(this.length + args.length)
        for(let i=0;i<args.length;i++){
            this.elements[this.length++] = args[i];
        }
        return this.length
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
     * 每次向右整体移动一位
     */    
    public unshift(...args:T[]):number{
        this.ensureCapacity(this.length + args.length)
        for(let i=0; i<args.length;i++){
            for(let j = this.length; j > 0; j--){
                   this.elements[j] = this.elements[j-1]
            }
            this.elements[0] = args[i]
            this.length++;
        }
        return this.length
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 获取某个位置的值
     */    
    public get(index:number):T{
        if(index < 0 || index >= this.length){
            throw new RangeError(`Parameter must be between 0 and ${this.length}`)
        }
        return this.elements[index]
    }
    /**
     * @param index
     * @param element
     * @return 原来的元素
     * @Description: 设置某个位置的值
     */    
    public set(index:number, element:T):T{ 
        if(index < 0 || index >= this.length){
            throw new RangeError(`Parameter must be between 0 and ${this.length}`)
        }
        const old = this.elements[index]
        this.elements[index] = element
        return old
     }
    /**
     * @param {*}
     * @return {*}
     * @Description: 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度
     * 1 2 3 4 5 整体向左移动一位
     */ 
    public pop():T{
        let old = this.elements[this.length-1]
        for(let i=0; i<this.length;i++){
            this.elements[i] = this.elements[i+1]
        }
        this.length--;
        return old
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
     * 1 2 3 4 5 整体向左移动一位
     */    
    public shift():T{
        const old = this.elements[0]
        for(let i = 1;i< this.length; i++){
            this.elements[i-1] = this.elements[i]
        }
        this.length--;
        return old;
    }
    
    /**
     * @param {T} element
     * @return {*} 获取该元素的索引
     */    
    public indexOf(element:T):number{
        for(let i=0; i<this.length;i++){
            if(element === this.elements[i]) return i;
        }
        return -1
    }
    /**
     * @Description: 清空所有的值
     */    
    public clear():void{
        this.length = 0
    }
}

export default ArrayList