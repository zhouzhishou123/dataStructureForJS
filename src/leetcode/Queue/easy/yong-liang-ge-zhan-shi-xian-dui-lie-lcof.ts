/*
 * @Author: zhouzhishou
 * @Date: 2022-02-19 23:26:03
 * @Description: 剑指 Offer 09. 用两个栈实现队列 https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */

var CQueue = function() {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value)
};

/**
 * @return {number}
 */ 
CQueue.prototype.deleteHead = function() {
    if(this.inStack.length<=0 && this.outStack.length<=0) return -1
    if(this.outStack.length <= 0){
        let ele = this.inStack.shift()
        this.outStack.push(ele)
    }
    return this.outStack.shift()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

