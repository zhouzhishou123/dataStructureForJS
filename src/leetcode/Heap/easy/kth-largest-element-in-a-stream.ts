/*
 * @Author: zhouzhishou
 * @Date: 2022-02-26 19:22:05
 * @Description: 703. 数据流中的第 K 大元素 https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  if (nums.some((item) => Array.isArray(item))) {
    nums = nums.flat(Infinity)
  }
  this.elements = []
  this.k = k
  for (let i = 0; i < nums.length; i++) {
    if (i < this.k) {
      // 创建一个最小堆
      this.add(nums[i])
    } else if (nums[i] > this.elements[0]) {
      // 替换堆顶元素
      this.elements[0] = this.elements[i]
      this.siftDown(0)
    }
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.elements.length === 0) {
    this.elements[0] = val
  } else if (this.elements.length < this.k) {      
    this.elements.push(val)
    this.siftUp(this.elements.length - 1)
  } else {
    if (val > this.elements[0]) {
      this.elements[0] = val
      this.siftDown(0)
    }
  }
  return this.elements[0]
}

KthLargest.prototype.siftDown = function (index) {
  let ele = this.elements[index]
  let half = Math.floor(this.elements.length / 2)
  while (index < half) {
    let childIndex = 2 * index + 1 // 左节点索引
    let child = this.elements[childIndex] // 左节点
    let rightIndex = childIndex + 1
    if (rightIndex < this.elements.length) {
      // 如果存在右节点
      let rightNode = this.elements[rightIndex]
      if (rightNode < child) {
        child = rightNode
        childIndex = rightIndex
      }
    }
    if (child >= ele) return
    this.elements[index] = child
    index = childIndex
  }
  this.elements[index] = ele
}

KthLargest.prototype.siftUp = function (index) {
  let ele = this.elements[index]
  //根节点循环结束
  while (index > 0) {
    // 父元素的索引
    let pIndex = Math.floor((index - 1) / 2)
    if (ele >= this.elements[pIndex]) return
    // 新添加的元素小于父元素
    if (ele < this.elements[pIndex]) {
      this.elements[index] = this.elements[pIndex]
      index = pIndex
    }
  }
  this.elements[index] = ele
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
let kthLargest = new KthLargest(3, [[2, [0]], [-1], [1], [-2], [-4], [3]]) // return 4
console.log(kthLargest);
