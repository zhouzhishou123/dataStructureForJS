/*
 * @Author: zhouzhishou
 * @Date: 2022-03-03 13:48:12
 * @LastEditTime: 2022-03-03 16:14:21
 * @Description: 集合 无序不重复
 */

class Set<T> {
    length: number = 0
    private map: Map<T, T> = new Map()

    size() {
        return this.length
    }

    has(key: T) {
        if (this.map.has(key)) return true
        return false
    }
    add(value: T) {
        if (this.has(value)) return
        this.map.set(value, value)
        this.length++
    }
    clear() {
        this.map.clear()
        this.length = 0
    }
    delete(value:T) {
        if (this.has(value)) {
            this.map.delete(value)
            this.length--
        }
    }
    forEach(callback) {
        return this.map.forEach(callback)
     }
    values() {
        return this.map.values()
     }
}

export default Set


let set = new Set()

