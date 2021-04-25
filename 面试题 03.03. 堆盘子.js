/**
     * @param {number} cap
     */
var StackOfPlates = function (cap) {
  this.cap = cap // 栈的范围
  this.stack = []
};

/** 
* @param {number} val
* @return {void}
*/
StackOfPlates.prototype.push = function (val) {
  if (this.cap === 0) return
  if (this.stack.length && this.stack[this.stack.length - 1]&&this.stack[this.stack.length - 1].length < this.cap) {
      this.stack[this.stack.length - 1].push(val)
  } else {
      this.stack.push([val])
  }
};

/**
* @return {number}
*/
// pop 栈 先进后出 或者说后进先出 所以每次取stack.length-1 这个子栈
StackOfPlates.prototype.pop = function () {
  // 将出栈的操作放在两个检查栈的操作之间，检查栈的操作是while循环剔除那些空的栈。
  if (!this.stack.length) return -1
  let val = this.stack[this.stack.length - 1].pop()
  if (this.stack.length && !this.stack[this.stack.length - 1].length)this.stack.splice(this.stack.length - 1,1) // 删除空的子栈
  return val
};

/** 
* @param {number} index
* @return {number}
*/
StackOfPlates.prototype.popAt = function (index) {
  if (index >= this.stack.length) return -1
  let val = this.stack[index].pop()
  if (index < this.stack.length && !this.stack[index].length) {
      this.stack.splice(index, 1) // 删除空的子栈
  }
  return val || -1
};