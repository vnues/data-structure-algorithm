/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// 交集 下标相加最小
// 
var findRestaurant = function (list1, list2) {
    const map = {}
    const arr = []
    let min = null
    // list1是长度较小的数组
    if (list1.length > list2.length) {
        [list1, list2] = [list2, list1]
    }
    for (let i = 0; i < list1.length; i++) {
        map[list1[i]] = i + 1
    }
    for (let i = 0; i < list2.length; i++) {
        if (map[list2[i]]) {
            // 注意不能写成!min
            if (min === null) {
                // 默认找到第一个的为下标相加最小
                min = map[list2[i]] + i - 1
                arr.push(list2[i])
            } else {
                if (map[list2[i]] + i - 1 === min) {
                    arr.push(list2[i])
                }
            }
        }
    }
    return arr
};



function foo() {
    let y = 1
    {
      let x = 2
      function bar(params) {
        debugger
        return y
      }
    }
    console.log('a', y)
    return bar
  }
  const fn = foo()
  console.log('b', fn())