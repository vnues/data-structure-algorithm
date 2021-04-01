function minDepth( root) {
  if (root == null) return 0;
  let q = [];
  q.push(root);
  // root 本身就是一层，depth 初始化为 1
  let depth = 1;

  while (q.length) {
      let sz = q.length;
      /* 将当前队列中的所有节点向四周扩散 */
      for (let i = 0; i < sz; i++) {
          let cur = q.shift(); // 队列 先进先出
          /* 判断是否到达终点 */
          if (cur.left == null && cur.right == null) 
              return depth;
          /* 将 cur 的相邻节点加入队列 */
          if (cur.left != null)
              q.push(cur.left); // 推入队列
          if (cur.right != null) 
              q.push(cur.right); // 推入队列
      }
      /* 这里增加步数 */
      depth++;
  }
  return depth;
}