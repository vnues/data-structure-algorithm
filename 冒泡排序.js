const arr = [-19, 78, 0, 23, -567, 70]

// 注意外层那层循环代表是总共需要排序几次
// 内层是真正做排序转化
// 如果是数组本身就是有序 我们应该还要做一层优化
function BubbleSort(arr) {
  let temp = null
  for (let i = 0; i < arr.length - 1; i++) {
    // arr.length-1-i 不能用j替代 因为j是变化的
    for ( let j = 0; j < arr.length-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

BubbleSort(arr)

console.log(arr)