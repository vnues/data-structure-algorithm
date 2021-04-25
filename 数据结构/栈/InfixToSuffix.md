# 我的理解

数据--->数据结构（决定如何存储）->磁盘


# 我的写法:
```javascript
// 100+((112+3)×4)-5123231 先扫描进数组
const s = '100+((112+3)×4)-5123231' // 中缀表达式
const list = []
let index = 0 // 扫描的下标
let keepNum = '' // 保存多位数

while (index < s.length) {
    let str = s[index]
    // 非数字字符
    if (str.charCodeAt() < 48 || str.charCodeAt() > 57) {
        list.push(str)
    } else if (str.charCodeAt() >= 48 && str.charCodeAt() <= 57) {
        keepNum += str
        if (index + 1 < s.length && (s[index + 1].charCodeAt() < 48 || s[index + 1].charCodeAt() > 57) || index + 1 === s.length) {
            list.push(keepNum)
            keepNum = ''
        }
    }
    index++
}

// 实际韩老师的写法比较简洁，里面单独套一层循环来解决多位数 这样少了判断next是否是运算符,终止条件不同
// 所以以后遇到多位数 不管外层如何再套一层while循环 注意不要用for 因为for最外层还控制了i++ 并不是i都是我们控制

```

# IF的写法总结

  两个IF是可以先后执行的，单IF ELSEIF 就只能执行一个！
  判断什么时候写 else 或者else if 还是再写一个if你应该考虑的不是条件是补集而是因为你进了if就不会进else 或者else if




