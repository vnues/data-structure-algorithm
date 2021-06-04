const Size = [4, 2, 5, 3, 1]
const Dir = [1, 1, 0, 0, 0]

// 请完成以下接口来计算还剩下几条鱼？
function solution(size,dir){
  let stack=[]
  // 0 表示向左游，1 表示向右游
  let left =0
  let right=1
  for(let i=0;i<size.length;i++){
    let curFish=size[i]
    let curFishDir=dir[i]
    let hasEat = false
    // 自己画图看下规律
    // 栈中的鱼向右 当前鱼向左 可能会被吃到
    while(stack.length&&dir[stack[stack.length-1]]===right&&curFishDir===left){
      if(size[stack[stack.length-1]]>curFish){
        hasEat = true
        break
      }
      //  如果栈中的鱼较小，那么会把栈中的鱼吃掉，栈中的鱼被消除，所以需要弹栈
      stack.pop()
    } 
    // 如果新来的鱼，没有被吃掉，那么压入栈中。
    if (!hasEat) {
            stack.push(i);
      }
  }
  return stack.length
}

console.log(solution(Size,Dir))