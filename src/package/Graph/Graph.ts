/*
 * @Author: zhouzhishou
 * @Date: 2022-02-28 21:29:56
 * @Description: 图
 */

// 顶点的接口定义
interface IVertex<V, W> {
    value: V // 顶点的值
    fromEdges: Set<Edge<V, W>> // 入度
    toEdges: Set<Edge<V, W>> // 出度
}

// 边的接口定义
interface IEdge<V, W> {
    from: Vertex<V, W> // 开始的顶点
    to: Vertex<V, W> // 到达的顶点
    weight: W // 权重
}

// 顶点
class Vertex<V, W> implements IVertex<V, W> {
    value: V
    fromEdges: Set<Edge<V, W>> = new Set()
    toEdges: Set<Edge<V, W>> = new Set()
    constructor(value: V) {
        // 初始化必须有一个顶点
        this.value = value
    }
}

// 边
class Edge<V, W> implements IEdge<V, W> {
    from: Vertex<V, W>
    to: Vertex<V, W>
    weight: W
    constructor(from = null, to = null, weight = null) {
        this.from = from
        this.to = to
        this.weight = weight
    }
}


interface IGraph<V, W> {
    addVertex: (v: V) => void //添加一个顶点
    addEdge: (from: V, to: V, weight?: W) => void // 添加一条边
    removeVertex: (v: V) => Vertex<V, W> // 删除一个顶点
    removeEdge: (from: V, to: V) => void // 删除一条边
    edgeSize: () => number // 包含的所有边
    verticesSize: () => number // 包含的所有顶点
}

class Graph<V, W> implements IGraph<V, W> {
    // 存放所有的顶点
    private vertices: Map<V, Vertex<V, W>> = new Map()
    // 存放所有的边
    private edges: Set<Edge<V, W>> = new Set()
    /**
     * @param {*}
     * @return {*}
     * @Description: 添加顶点
     */
    addVertex(v: V): void {
        if (this.vertices.has(v)) return
        this.vertices.set(v, new Vertex(v))
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 增加一条边
     */
    addEdge(from: V, to: V, weight: W): void {
        // debugger
        // 获取边的起点
        let fromVertex = this.vertices.get(from)

        // 如果起点为空那么创建一个顶点
        if (!fromVertex) {
            fromVertex = new Vertex(from)
            this.vertices.set(from, fromVertex)
        }
        // 获取边的终点
        let toVertex = this.vertices.get(to)
        // 如果终点为空那么创建一个顶点
        if (!toVertex) { //终点为空
            toVertex = new Vertex(to)
            this.vertices.set(to, toVertex)
        }

        let fromEdge = fromVertex.toEdges // 起点的出度
        let toEdge = toVertex.fromEdges // 终点的入度
        let fromEdgeItem = this.getFromEdge(fromEdge, from)
        let toEdgeItem = this.getToEdge(toEdge, to)
        // 如果刚开始没有一条边则创建一条边
        if (fromEdgeItem === null || toEdgeItem === null) {
            this.createEdge(fromVertex, toVertex, weight, fromEdge, toEdge)
        } else if (fromEdgeItem !== toEdgeItem) { // // 起点的出度 != 终点的入度和之前创建的边不同
            this.createEdge(fromVertex, toVertex, weight, fromEdge, toEdge)
        }
    }

    private createEdge(fromVertex: Vertex<V, W>, toVertex: Vertex<V, W>, weight: W, fromEdge: Set<Edge<V, W>>, toEdge: Set<Edge<V, W>>) {
        let edge: Edge<V, W> = new Edge(fromVertex, toVertex, weight)
        fromEdge.add(edge)
        toEdge.add(edge)
        this.edges.add(edge)
    }
    private getToEdge(set: Set<any>, to: V) {
        let iterator = set.values()
        for (let item of iterator) {
            if (item.to.value === to) {
                return item
            }
        }
        return null
    }
    private getFromEdge(set: Set<any>, from: V) {
        let iterator = set.values()
        for (let item of iterator) {
            if (item.from.value === from) {
                return item
            }
        }
        return null
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 删除顶点返回删除的顶点
     */
    removeVertex(value: V): Vertex<V, W> {
        let vertex = null
        if (this.vertices.has(value)) {
            vertex = this.vertices.get(value)
            // 删除入度的边
            vertex.fromEdges.clear()
            // 删除出度的边
            vertex.toEdges.clear()
            // 删除edges的边
            this.removeEdgeByVertex(value)
            // 删除顶点
            this.vertices.delete(value)
        }
        return vertex
    }
    /**
     * @param {V} value
     * @return {*}
     * @Description: 删除以value为顶点的所有边
     */
    private removeEdgeByVertex(value: V): void {
        let toEdgeIterator = this.edges.values()
        for (let item of toEdgeIterator) {
            // 找到所有以value出入度的边并删除
            if (item.from.value === value || item.to.value === value) {
                this.edges.delete(item)
            }
        }
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 删除一条边并返回
     */
    removeEdge(from: V, to: V): Edge<V, W> {
        let fromVertex = this.vertices.get(from)
        let toVertex = this.vertices.get(to)
        // 起点和终点同时存在才删除 from -> to
        if (fromVertex && toVertex) {
            // 删除from顶的出度 toEdges
            let toEdges = fromVertex.toEdges
            let toEdgesItem = this.getEdgeFromVertex(toEdges, from, to)
            if (toEdgesItem !== null) toEdges.delete(toEdgesItem)
            // 删除to顶点的入度 TODO
            let fromEdges = fromVertex.fromEdges
            let fromEdgesItem = this.getEdgeFromVertex(fromEdges, from, to)
            if (fromEdgesItem !== null) fromEdges.delete(fromEdgesItem)

            // 删除edges的边
            let edgesItem = this.getEdgeFromVertex(this.edges, from, to)
            if (edgesItem) this.edges.delete(edgesItem)

            return toEdgesItem
        }
        return null
    }
    // 根据顶点获取一条边
    private getEdgeFromVertex(edges: Set<Edge<V, W>>, from: V, to: V) {
        let iterator = edges.values()
        for (let item of iterator) {
            if (item.from.value === from && item.to.value === to) {
                return item
            }
        }
        return null
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 所有边的数量
     */
    edgeSize(): number {
        return this.edges.size
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 所有顶点的数量
     */
    verticesSize(): number {
        return this.vertices.size
    }
    /**
     * @param {V} value
     * @param {function} callback
     * @return {*}
     * @Description: 广度优先遍历
     */
    BFS(value: V, callback: (v: Vertex<V, W>) => void): void {
        let vertex = this.vertices.get(value)
        if (!vertex) return
        let set: Set<Vertex<V, W>> = new Set()
        let queue = [vertex]
        set.add(vertex)
        while (queue.length > 0) {
            let _vertex = queue.shift()
            callback(_vertex)
            let toEdgesIterator = _vertex.toEdges.values()
            for (let item of toEdgesIterator) {
                if (set.has(item.to)) continue
                queue.unshift(item.to)
                set.add(item.to)
            }
        }
    }
    /**
     * @param {V} value
     * @param {function} callback
     * @return {*}
     * @Description: 深度优先遍历
     */
    DFS(value: V, callback: (v: Vertex<V, W>) => void, set: Set<Vertex<V, W>> = new Set()): void {
        let vertex = this.vertices.get(value)
        if (!vertex) return
        callback(vertex)
        set.add(vertex)
        let toEdgesIterator = vertex.toEdges.values()
        for (let item of toEdgesIterator) {
            if (set.has(item.to)) continue
            this.DFS(item.to.value, callback, set)
        }
    }
}

export default Graph