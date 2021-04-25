/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// ! 竟然是区间 说明右边肯定比左边大  还是闭区间
 var merge = function (intervals) {

  intervals.sort(function (a, b) { return a[0] - b[0]; });
  console.log('区间排序后:',intervals) //  [ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 15, 18 ] ]
  // 排序好了 如何合并？
  for (let i = 0; i < intervals.length - 1; i++) {

      const start = intervals[i][1];
      console.log('start',start)
      const [end] = intervals[i + 1];
      console.log('end',end)
      // start >= end 就可以合并 第一个区间的末尾数大于第二个区间的第一个数就可以进行合并了吗 看看规律
      // ! 根据发现你确实可以合并
      if (start >= end) {
          // 重新合并区间
          const data = [...intervals[i], ...intervals[i + 1]];
          // 重新声明区间
          const item = [Math.min(...data), Math.max(...data)];
          //  替换区间 删除两个 把新的区间更新上去
          intervals.splice(i, 2, item);
          i--;
      }
  }
  return intervals;
};


let intervals = [[1,3],[2,6],[8,10],[15,18]]

console.log(merge(intervals))