/*
 * @Author: zhouzhishou
 * @Date: 2022-02-19 19:02:06
 * @Description: 面试题 03.04. 化栈为队 https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/
 */

/**
 * @param {*}
 * @return {*}
 * @Description: 实现一个MyQueue类，该类用两个栈来实现一个队列。
 */
/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
     this.inStack = []
     this.outStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */

// 2 1
MyQueue.prototype.push = function(x) {
    this.inStack.unshift(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.outStack.length <= 0 && this.inStack.length > 0){
            let ele = this.inStack.pop()
            this.outStack.push(ele)
    }
    return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.inStack.length === 0 && this.outStack.length === 0) return null;
    if(this.outStack.length <= 0 && this.inStack.length > 0){
            let ele = this.inStack.pop()
            this.outStack.push(ele)
    }
    return this.outStack[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !(this.inStack.length + this.outStack.length)
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


