var MaxQueue = function() {
   this.queue1=[] // 主队列 辅助队列
   this.queue2=[]
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  return this.queue2[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue1.push(value)
  while(this.queue2.length&&this.queue2[this.queue2.length-1]<value){
    this.queue2.pop()
  }
  this.queue2.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  let value =this.queue1.shift()
  if(this.queue2.length&&this.queue2[0]===value){
    this.queue2.shift()
  }
  return value
};
