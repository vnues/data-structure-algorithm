// 阶解题思路
// 挑选的基准值为数组中间的值
// 中间值就把数组分成了两组
// 左边一组，从左到右，挨个与 基准值 比较，找出比基准值大的值
// 右边一组，从右到左，挨个与 基准值 比较，找出比基准值小的值
// 左右两边各找到一个值，那么就让这两个值进行交换
// 然后继续找，直到左右两边碰到，这一轮就结束。这一轮就称为快速排序
// 继续对分出来的小组(左右分组 然后再进行排序 一轮下来 类似冒泡 确定了顺序 只不过是每轮都拆分了2个组进行排序)，进行上述的快速排序操作，直到组内只剩下一个数时，则排序完成
// 自上而下递归实际就是多个组了

const arr = [-9, 78, 0, 23, -567, 70]

function quickSort(arr, left, right) {
  let l = left;
  let r = right
  let pivot = Math.floor((left + right) / 2)
  console.log(pivot)
  while (l < r) {
    while (arr[l] < arr[pivot]) {
      l++
    }
    while (arr[r] > arr[pivot]) {
      r--
    }
    if (l >= r) {
      // 说明没有找到
      break
      // 就不会继续下面的赋值
    }
    let temp = null
    temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    r--;
    l++;
  }
  // 当一轮找完后，没有找到，则是中间值时，
  // 需要让他们穿插而过，也就是重新分组，中间值不再参与分组
  // 否则，在某些情况下，会进入死循环
  // * 这一步很重要 拆分左右两组
  if (l == r) {
    // console.log('ok')
    l++;
    r--;
  }
  // 一轮循环过后继续操作
  // 左右两边继续排序
  // 左边
  if (left < r) {
    quickSort(arr, left, r);
  }
  // 右边
  if (right > l) {
    quickSort(arr, l, right);
  }
}

quickSort(arr, 0, arr.length - 1)

console.log(arr) // [ -9, -567, 0, 23, 78, 70 ]
