/*
 * @Author: zhouzhishou
 * @Date: 2022-03-06 14:05:57
 * @Description: 并查集
 */


 /*
    1. Quick Find
       查找(Find)的时间复杂度O(1)
       合并的时间复杂度O(n)

 */

 /*
    2. Quick Union
        查找(Find)的时间复杂度O(logn) 可以优化到O(α(n)),α(n)
        合并的时间复杂度O(n)
 */

import {IUnioFind} from './Declare'

class UnioFind<V> implements IUnioFind<V> {
    find: (v: V) => void;
    union: (v1: V, v2: V) => void;
    isSame: (v1: V, v2: V) => boolean;
}
export default UnioFind
