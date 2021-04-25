/**
 *递归版本 
 */
// 查找满足元素的下标
// 针对于有序数组做二分查找效率会很高的
// 无序的数组怎么能用二分查找❓ 肯定用不了啊 
// const arr = [1]
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const BinarySearch = (arr, value) => {
    // 递归注意作用域啊  词法作用域
    const binarySearch = (arr, left, right, value) => {
        // 终止条件 防止爆栈
        if (left > right) {
            return -1
        }
        const mid = parseInt((left + right) / 2)
        if (value > arr[mid]) {
            // 向右递归
            return binarySearch(arr, mid + 1, right, value)
        } else if (value < arr[mid]) {
            // 向左递归
            return binarySearch(arr, left, mid - 1, value)
        } else {
            // 成立条件
            // 想要的结果
            return mid
        }
    }
    return binarySearch(arr, 0, arr.length - 1, value)
}

// console.log(BinarySearch(arr, 1)) // 0


// 用迭代的写法试试 迭代的难度稍微大一点




// 迭代版本
// 排序好的数组 ==>疯狂折半寻找  (以前以为只是折半一次哈哈哈哈哈 尴尬)
// 让arr[mid]与targetValue比较
// 算法复杂度O(logn)
const binarySearch = function (arr, value) {
    let left = 0
    let right = arr.length - 1 // 闭区间[left,right] 存在[0,0] 这种区间情况
    while (left <= right) {
        // 考虑数据溢出的情况
        let mid = left + parseInt((right - left) / 2) // 2left/2+(right-left)/2 
        // 在左边
        if (value < arr[mid]) {
            right = mid - 1
        }
        else if (value > arr[mid]) {
            // 在右边
            left = mid + 1
        } else {
            // 相等情况，也就是找到了
            return mid
        }
    }
    return -1
}

console.log(binarySearch(arr, 1211)) // 0


/**
 * 注：折半查找的前提条件是需要有序表顺序存储（即顺序表），对于静态查找表，一次排序后不再变化，
 * 折半查找能得到不错的效率。但对于需要频繁执行插入或删除操作的数据集来说，
 * 维护有序的排序会带来不小的工作量，那就不建议使用。——《大话数据结构》
 */