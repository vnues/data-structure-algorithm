/*
选择排序
选择排序(Selection sort)是一种简单直观的排序算法。
其基本思想是：首先在未排序的数列中找到最小(or最大)元素，
然后将其存放到数列的起始位置；
接着，再从剩余未排序的元素中继续寻找最小(or最大)元素，
然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。
*/

// 可以根据最大值和最小值
// 选择排序和冒泡排序也是一样 一轮循环选出最小的 
// 不要想到什么排序，想想一个一维数组是怎么找到最大或者最小值 也是一个一个比较出来（区别于冒泡，冒泡最大的特点是把最大或者最小得出来的结果往后推，往末尾推）
// 还有选择排序与冒泡排序不同的是 选取的数是往前推的 
function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // 设置默认值
        let min = arr[i] // 一轮循环下来的最小数
        let minIndex = i // 一轮循环下来的最小数的下标
        // 选出这一轮循环的最小值
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j]
                minIndex = j
            }
        }
        if (minIndex !== i) {
            arr[minIndex] = arr[i]
            arr[i] = min
        }
    }
}


// 融合两个有序数组，这里实际上是将数组 arr 分为两个数组
function mergeArray(arr, first, mid, last, temp) {
    let i = first;
    let m = mid;
    let j = mid + 1;
    let n = last;
    let k = 0;
    while (i <= m && j <= n) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= m) {
        temp[k++] = arr[i++];
    }
    while (j <= n) {
        temp[k++] = arr[j++];
    }
    for (let l = 0; l < k; l++) {
        arr[first + l] = temp[l];
    }
    return arr;
}
// 递归实现归并排序
function mergeSort(arr, first, last, temp) {
    if (first < last) {
        let mid = Math.floor((first + last) / 2);
        // debugger
        mergeSort(arr, first, mid, temp);    // 左子数组有序
        // mergeSort(arr, mid + 1, last, temp);   // 右子数组有序
        arr = mergeArray(arr, first, mid, last, temp);
    }
    return arr;
}

// example
let arr = [8, 4, 5, 7, 1, 3, 6, 2];
let temp = new Array();
let SortedArr = mergeSort(arr, 0, arr.length - 1, temp);
console.log(SortedArr);

