/**
 * 划分一个整形数组，把负数放在左边，零放在中间，正数放在右边
 */

const arr = [9, 1, 0, 2, 4, -1, 0, 19, 6, -12, 8, -11, 0]
const sort = function (arr) {
    // 声明两个指针 === 双指针解法
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        // 扫描遍历，发现正数出现在负数前面，就调换位置
        if (arr[low] <= 0) {
            low++
        } else {
            const temp = arr[high]
            arr[high] = arr[low]
            arr[low] = temp
            high--
        }
    }
    // 再来处理0和负数的情况
    let slow = 0
    let fast = 1
    while (arr[fast] <= 0) {
        if (arr[fast] < arr[slow]) {
            const temp = arr[slow]
            arr[slow] = arr[fast]
            arr[fast] = temp
            slow++
            fast++
        } else {
            // 剩下的情况肯定是0
        }
    }
}

sort(arr)



/**
 * 划分一个整形数组，把负数放在左边，零放在中间，正数放在右边
 */
const arr = [9, 1, 0, 2, 4, -1, 0, 19, 6, -12, 8, -11, 0]
const sort = function (arr) {
    // 声明三个指针
    let low = 0
    let mid = 0 // 以mid作为当前指针
    let high = arr.length - 1
    while (mid <= high) {
        if (arr[mid] < 0) {
            // 负数一直往左边靠
            const temp = arr[low]
            arr[low] = arr[mid]
            arr[mid] = temp
            mid++
            low++
        } else if (arr[mid] === 0) {
            mid++
        } else {
            // 这里最后操作就是把正数往右边一直靠
            const temp = arr[high]
            arr[high] = arr[mid]
            arr[mid] = temp
            high--
        }
    }
}

sort(arr)