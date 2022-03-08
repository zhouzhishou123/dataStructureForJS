/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:35:19
 * @Description:
 */
import UnioFind from './package/UnionFind/UnionFind'

let c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let unioFind = new UnioFind(c)


unioFind.union(0, 1)
unioFind.union(2, 1)
unioFind.union(3, 4)
unioFind.union(1, 4)

console.log(unioFind);
