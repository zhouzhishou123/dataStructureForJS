/*
 * @Author: zhouzhishou
 * @Date: 2022-03-03 16:15:43
 * @LastEditTime: 2022-03-03 17:23:10
 * @Description: 集合 无序不重复
 */

type Key = string | symbol | number

type Obj = {
    key?: any
}
interface ISet {
    length: number
    size: () => number
    has: (key: Key) => boolean
    add: (value: Obj[keyof Obj]) => void
    clear: () => void
    delete: (value: Obj[keyof Obj]) => void
    forEach: (fn: (v: Obj[keyof Obj]) => void) => void
    values: () => void
    unionSet: (target: ISet) => void
    intersectionSet: (target: ISet) => void
    differenceSet: (target: ISet) => void
}



class Set implements ISet {
    length: number = 0
    private obj: Obj = {}

    size() {
        return this.length
    }

    has(key: Key) {
        if (Object.prototype.hasOwnProperty.call(this.obj, key)) return true
        return false
    }

    add(value: Obj[keyof Obj]) {
        if (this.has(value)) return
        this.obj[value] = value
        this.length++
    }

    clear() {
        this.obj = {}
        this.length = 0
    }

    delete(value: Obj[keyof Obj]) {
        if (this.has(value)) {
            delete this.obj[value]
            this.length--
        }
    }

    forEach(callback) {
        for (let key in this.obj) {
            if (this.has(key)) {
                callback(this.obj[key])
            }
        }
    }

    values() {
        return Object.values(this.obj)
    }

    // 和target做并集
    unionSet(target: ISet) {
        let union: ISet = new Set()
        this.forEach(v => union.add(v))
        target.forEach(v => union.add(v))
        return union
    }

    // 和target做交集
    intersectionSet(target: ISet) {
        let intersection = new Set()
        this.forEach(v => {
            if (target.has(v)) {
                intersection.add(v)
            }
        })
        return intersection
    }

    // 和target做差集
    differenceSet(target) {
        let difference = new Set()
        this.forEach(v => {
            if (!target.has(v)) {
                difference.add(v)
            }
        })
        return difference
    }
}

export default Set
