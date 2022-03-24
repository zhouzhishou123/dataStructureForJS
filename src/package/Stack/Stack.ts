/*
 * @Author: zhouzhishou
 * @Date: 2022-03-24 21:05:25
 * @Description: 栈
 */




/**
 * 利用栈求左右两边第一个比他大的值 （单调递减栈）
 */

function parentIndex(nums: number[]) {
    if (nums === null || nums.length === 0) return nums
    /**
     * 遍历所有的元素
     * 栈底到栈顶是单调递减的
     */
    let lis = [], ris = [], stack = []
    for (let i = 0; i < nums.length; i++) {
        lis[i] = -1
        ris[i] = -1
        while (stack.length !== 0 && nums[i] > nums[stack[stack.length - 1]]) {
            ris[stack.pop()] = i
        }
        if (stack.length) {
            lis[i] = stack[stack.length - 1]
        }
        stack.push(i)
    }
    let pis = []
    for(let i=0; i<nums.length;i++){
        if(lis[i] === -1 && ris[i]===-1){
            pis[i] =-1
            continue
        }
        if(lis[i] === -1){
            pis[i] = ris[i]
        }else if(ris[i]===-1){
            pis[i] = lis[i]
        }else if(nums[lis[i]]< nums[ris[i]]){
            pis[i] = lis[i]
        }else {
            pis[i] = ris[i]
        }
    }
    return pis
}

console.log(parentIndex([3, 2, 1, 6, 0, 5]));
