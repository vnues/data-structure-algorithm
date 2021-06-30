/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  cosnt map={}
  for(let str of strs){
    let array = Array.from(str)
    array.sort((a,b)=>a-b)
    let key=array.toString()
    let list = map[key] ? map[key]:[]
    list.push(str)
    map[key]=list
  }
  return [...map.values()]
};