/*
 * @Author: zhouzhishou
 * @Date: 2022-02-28 21:29:56
 * @Description: 图
 */
// 顶点的接口定义
interface IVertex<V, W> {
    value: V
    fromEdges: Set<Vertex<V, W>> // 入度
    toEdges: Set<Vertex<V, W>> // 出度
}

// 边的接口定义
interface IEdge<V, W> {
    from: Set<Vertex<V, W>>
    to: Set<Vertex<V, W>>
    weight: W
}
 
// 顶点
class Vertex<V, W>  implements IVertex<V, W> {
    value: V
    fromEdges
    toEdges
    constructor(value: V){
        this.value = value
    }
}

// 边
class Edge<V, W> implements IEdge<V, W> {
    from
    to
    weight
    constructor(from,to, weight = null){
        this.from = from
        this.to = to
        this.weight = weight
    }
}


interface IGraph<V, W> {
    edge: Edge<V, W>
    vertex: Vertex<V, W>
    addVertex:(v: V)=> void //添加顶点
    addEdge:(from: V, to: V, weight?: W)=> void //添加边
    removeVertex:(v: V)=> void // 删除边
    removeEdge:(from: V,to: V)=> void
    edgeSize:()=> number
    verticesSize:()=> number
}

class Graph<V, W> implements IGraph<V, W> {
    // 存放所有的顶点
    private vertices:Map<V, Vertex<V, W>> = new Map()
    // 存放所有的边
    private edges: Set<Edge<V, W>> = new Set()
    edge
    vertex
    /**
     * @param {*}
     * @return {*}
     * @Description: 添加顶点
     */    
    addVertex(v: V): void{
        if(this.vertices.has(v)) return
        this.vertices.set(v,new Vertex(v))
    }
    addEdge(from: V,to: V, weight:W) {
        let fromVertex = this.vertices.get(from)
        if(fromVertex === null){ //起点为空
            fromVertex = new Vertex(from)
            this.vertices.set(from, fromVertex)
        }
        let toVertex = this.vertices.get(to)
        if(toVertex === null){ //终点为空
            toVertex = new Vertex(to)
            this.vertices.set(to, toVertex)
        }
        //TODO 缺少判断逻辑 顶点的出度 = 另一个顶点的入度

        let edge = new Edge(from, to, weight)
    }
    removeVertex(){}
    removeEdge(){}
    /**
     * @param {*}
     * @return {*}
     * @Description: 所有边的数量
     */    
    edgeSize(){
        return this.edges.size
    }
    /**
     * @param {*}
     * @return {*}
     * @Description: 所有顶点的数量
     */    
    verticesSize(): number{
        return this.vertices.size
    }
}

