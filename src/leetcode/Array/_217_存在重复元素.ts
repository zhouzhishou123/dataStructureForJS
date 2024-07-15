
// https://leetcode.cn/problems/contains-duplicate/
// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
// [1,2,3,1] true [1,2,3,4] false [1,1,1,3,3,4,3,2,4,2] true
function containsDuplicate(nums: number[]): boolean {
    if(nums == null) return false
    if(nums.length < 2 ) return false
    let map = {}
    map[nums[0]] = 1

    for(let i=1;i<nums.length; i++){
        if(map[nums[i]]) return true
        map[nums[i]] = 1
    }
    return false
};