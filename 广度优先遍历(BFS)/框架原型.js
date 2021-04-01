// 计算从起点 start 到终点 target 的最近距离
function BFS( start,  target) {
   let q=[]; // 核心数据结构
   let visited=new Set(); // 避免走回头路

  q.push(start); // 将起点加入队列
  visited.add(start);
  let step = 0; // 记录扩散的步数

  while (!q.length) {
      let sz = q.length;
      /* 将当前队列中的所有节点向四周扩散 */
      for (let i = 0; i < sz; i++) {
          let cur = q.shift();
          /* 划重点：这里判断是否到达终点 */
          if (cur === target)
              return step;
          /* 将 cur 的相邻节点加入队列 */
          for (Node x : cur.adj())
          if (x not in visited) {
              q.offer(x);
              visited.add(x);
          }
      }
      /* 划重点：更新步数在这里 */
      step++;
  }
}