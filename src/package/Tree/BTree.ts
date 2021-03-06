/*
 * @Author: zhouzhishou
 * @Date: 2022-02-25 22:49:49
 * @Description: B树
 */
/*
    B树是一种平衡的多路搜索树，多用于文件系统、数据库的实现

    m阶B树的性质 (m>=2) 一个节点最多有m个字节点
     假设一个节点存储的元素个数为X
        1.根节点 1<= x <= m-1
        2.非根节点 Math.ceil(m / 2)-1 <= x <=m-1
            3.如果有子节点，子节点个数 y= x + 1
            4.根节点： 2 <= y <= m
            5.非根节点 Math.ceil(m / 2) <= y <= m
 */


/**
 *n代合并的超级节点，最多拥有2^n个字节点
  
 */