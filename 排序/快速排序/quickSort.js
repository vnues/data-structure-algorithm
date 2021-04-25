/**
 * 递归 自底向下来看
 */
function quickSort(list) {
    // 结束条件
    if (list.length == 0) {
        return [];
    }
    var lesser = []; // pivot 小
    var greater = []; // pivot 大 
    var pivot = list[0]; // 0 很重要这个位置
    // i从1开始
    // 不然就无限循环
    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]); // [3 5]
        } else {
            greater.push(list[i]); // []
        }
    }
    // 这个链接顺序 决定排序效果
    // 解释了快排的思想
    // 最小的递归单位 要明白这个概念 （也就是返回值 我们只关注而这个 千万不要陷入进去递归）
    return quickSort(lesser).concat(pivot, quickSort(greater));

}


let arr = [12, 3, 5, 11, 8, 9]



arr = quickSort(arr)

console.log(arr) //[ 3, 5, 8, 9, 11, 12 ]