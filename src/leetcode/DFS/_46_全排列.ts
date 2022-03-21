/*
 * @Author: zhouzhishou
 * @Date: 2022-03-21 00:06:12
 * @Description: 
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums: number[]): number[] {
    if (nums.length === 0) return []
    let permutationList = []
    let list = []
    let used = []
    DFSpermutation(0, nums, list, permutationList, used)
    return permutationList
};

function DFSpermutation(index, nums, list, permutationList, used): void {
    if (index === nums.length) {
        permutationList.push([...list])
        return
    }
    for (let i = 0; i < nums.length; i++) {
        // if(used[i] === true) continue
        if(list.includes(nums[i])) continue
        // used[i] = true
        // list[index] = nums[i]
        list.push(nums[i])
        DFSpermutation(index + 1, nums, list, permutationList, used)
        // used[i] = false
        list.pop()
    }
}

console.log(permute([1,2,3]));
