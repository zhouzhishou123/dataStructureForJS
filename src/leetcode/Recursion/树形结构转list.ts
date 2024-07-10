interface ITree {
    id: number;
    text: string;
    parentId: number;
    children?: ITree[]
}

//前序遍历
export function tree2list(list:ITree[], arr = []): ITree[] | null {
    if(list == null || list.length === 0) return list;
    list.forEach(item=>{
        _l(item, arr)
    })
    return arr
}

function _l(item: ITree, arr: ITree[]) {
    arr.push(item)
    if(item.children && item.children.length > 0){
        item.children.forEach(child=> _l(child, arr))
    }
}