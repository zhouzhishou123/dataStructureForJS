/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:35:19
 * @Description:
 */

import Graph from './package/Graph/Graph'

let graph = new Graph()


graph.addEdge('V0', 'V4', 6)
graph.addEdge('V1', 'V0', 9)
graph.addEdge('V1', 'V2', 3)
graph.addEdge('V2', 'V3', 5)
graph.addEdge('V3', 'V4', 1)
graph.addEdge('V2', 'V0', 2)
// console.log(graph);

graph.BFS('V1', (v)=>{
    console.log(v);
})
