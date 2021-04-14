/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children={}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
// 这个word是一多叉树 
Trie.prototype.insert = function(word) {
  let node = this.children
  // 节点值作为key值
  for(let ch of word){
    if(!node[ch]){
      node[ch]={}
    }
    node = node[ch]
  }
  node.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.children
  for(let ch of word){
    if(!node[ch]){
      return false
    }
    node = node[ch]
  }
  return node!==undefined&&node.isEnd!==undefined

};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.children
  for(let ch of prefix){
    if(!node[ch]){
      return false
    }
    node = node[ch]
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
console.log(trie.startsWith("app")) // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True

console.log(trie)