/*
插入排序 打扑克牌场景
是对于欲排序的元素以插入的方式找寻该元素的适当位置，以达到排序的目的
插入排序的基本思想是：把n个待排序的元素看成为一个有序表和无序表，
开始时候有序表中只包含一个元素，无序表中包含有n-1个元素，排序过程中每次从无序列表中取出第一个元素，
把它与有序列表的元素依次比较，插入到适当的位置
*/
// 核心关键点就是拿无序列表的第一个元素插入到有序列表（这个过程需要一一比较） 插入要考虑到数组元素的后移
// 从小到大处理
// 直接插入排序(Straight Insertion Sort)的基本思想是：把n个待排序的元素看成为一个有序表和一个无序表。
// 开始时有序表中只包含1个元素，
// 无序表中包含有n-1个元素，排序过程中每次从无序表中取出第一个元素，将它插入到有序表中的适当位置，使之成为新的有序表，重复n-1次可完成排序过程。
// https://www.cnblogs.com/qingergege/p/7406622.html
// https://zhuanlan.zhihu.com/p/35328552
function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        insertVal = arr[i]
        insertPreIndex = i - 1
        // 当前插入的元素与无序列表的比较
        // 主要的就是比较和后移，但要注意，要将待排序的元素多存一份，因为后移时，会占据该元素的位置。
        while (insertPreIndex >= 0 && insertVal < arr[insertPreIndex]) {
            //（你可以这样理解 插入排序是先不管三七二十一，先插入后比较）
            // 因为你插入需要腾出一个位置
            arr[insertPreIndex + 1] = arr[insertPreIndex] // 后移
            insertPreIndex--
        }
        if (insertPreIndex + 1 != i) {
            arr[insertPreIndex + 1] = insertVal
        }
    }
}
