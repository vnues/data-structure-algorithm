function levelOrder(root){
  if(!root){
    return null
  }
  let queue = []
  let level = []
  queue.push(root) // 开始搜索
  while(queue.length){
    let size = queue.length
    let curLevel = []
    for(let i=0;i<size;i++){
      let cur = queue.shift()
      curLevel.push(cur.val)
      // ! 如何判断终点
      // 这里不需要终点 因为我们要遍历整颗树  注意BFS 没有用递归  终点不是递归的base case
      if(cur.left){
        queue.push(cur.left)
      }
      if(cur.right){
        queue.push(cur.right)
      }
    }
    level.push(curLevel)
  }
  return level
}