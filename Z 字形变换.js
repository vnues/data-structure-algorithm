let s = "PAYPALISHIRING"
let numRows = 3

function convert( s,  numRows) {
      if(numRows < 2) return s;
      let rows =[]
      // ! numRows有多少层 就根据层数顺序打印
      for(let i = 0; i < numRows; i++) rows.push([]);
      let i = 0, flag = -1
      // ! 核心解题步骤
      for(let k=0;k<s.length;k++){
        rows[i].push(s[k])
        // 第一层或其他层
        if(i == 0 || i == numRows -1) flag = - flag; //  ! 在达到 ZZ 字形转折点时，执行反向 注意是转折点
        i += flag // 更新当前字符 c 对应的行索引
      }

      let res = []
      for(let row=0;row<rows.length;row++){
        res.push(rows[row].join(''))
      }
      return res.join('')
  }

  console.log(convert(s,numRows)) // PAHNAPLSIIGYIR


  /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // 只有一行
  if(numRows<2){
      return s
  }
 let rows = []
 // 创建行数 用来存储对应的字符
 for(let i=0;i<numRows;i++){
     rows.push([])
 }
 let flag = -1
 let i=0
 for(let k=0;k<s.length;k++){
     // 根据规律观察
     // 最长走完numRows.length就要拐弯
     // 最短是走一步
     // 用flag为-1控制拐弯（因为Z字形的拐弯是向上的）  flag1是直走 按顺序遍历
    rows[i].push(s[k])
    // i等于0是直走
    // 等于2 index+1是到了 numRows层数 要向上拐弯
    if(i===0 || i===numRows-1){flag=-flag}
    i+=flag
 }
  let res = []
  for(let row=0;row<rows.length;row++){
      res.push(rows[row].join(''))
    }
  return res.join('')
};