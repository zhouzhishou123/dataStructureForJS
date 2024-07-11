/*
 * @Author: zhouzhishou
 * @Date: 2022-03-28 16:17:41
 * @Description: 
 */
function treeData<T>(data: T[]) {
    if (data.length === 0) return data
    let root = []
    conversionTree(data, 0, root)
    return root
}

function conversionTree<T>(data: any[], index:number, root:T[]) {
    // 如果只有一个元素
    if (index >= data.length) return
    // 找到第一个元素
    let first = data[index]
    let id = first.id
    if (first.pid === '') { root.push(first) }
    let children = data.filter(item => item.pid === id)
    first.label = first.name
    first.children = children ? children : []
    conversionTree(data, index + 1, root)
}


export function list2tree(list){
    let tree = []
    list.forEach(outer=>{
        if(!outer.pid){
            tree.push(outer)
        }
       list.forEach(inner=>{
        if(inner.id === outer.id) return;
        if(inner.pid === outer.id){
            outer.children = outer.children || []
            outer.children.push(inner)
        }
       })
    })

    return tree
}