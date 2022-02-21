/*
 * @Author: zhouzhishou
 * @Date: 2022-02-19 17:03:40
 * @Description: 1700. 无法吃午餐的学生数量 https://leetcode-cn.com/problems/number-of-students-unable-to-eat-lunch/
 */


//student [1,1,0,0] sandwiches [0,1,0,1]

const countStudents = function(students:number[], sandwiches:number[]):number {
    if(students.length ===0 || sandwiches.length === 0) return students.length
    let pointer = 0
    while(pointer < students.length){
        // 匹配成功
        if(students[0] === sandwiches[0]){
            sandwiches.shift()
            students.shift()
            pointer = 0
        }else {
           let outStudent = students.shift()
           students.push(outStudent)
           pointer++
        }
    }
    return students.length
};