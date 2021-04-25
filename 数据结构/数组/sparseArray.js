/*
  11 11 3

  1  2  1

  2  3  2

  4  5  1
*/

// 稀疏数组也只是针对于二维以上的，一维的本身就是要初始化这么长的长度

// 将普通数组转为稀疏数组

// 初始化二维数组

const length = 12
const arr = new Array(length).fill(0).map(x => new Array(length).fill(0))

arr[1][2] = 2

arr[2][3] = 2

arr[4][5] = 1

let sum = 0;

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length; j++) {
    if (arr[i][j]) {
      sum++
    }
  }
}

console.log(arr)

// 创建对应的二维稀疏数组

const sparseArr = new Array(sum + 1).fill(0).map(x => new Array(sum).fill(0))

sparseArr[0][0] = length
sparseArr[0][1] = length
sparseArr[0][2] = sum

let count = 0

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length; j++) {
    if (arr[i][j]) {
      count++
      sparseArr[count][0] = i
      sparseArr[count][1] = j
      sparseArr[count][2] = arr[i][j]
    }
  }
}

console.log(sparseArr)

// 二维稀疏数组转为二维数组


const arr1 = new Array(sparseArr[0][0]).fill(0).map(x => new Array(sparseArr[0][1]).fill(0))


for (let i = 1; i < sum + 1; i++) {
  arr1[sparseArr[i][0]][sparseArr[i][1]] = sparseArr[i][2]
}

console.log(arr1)


// 保存到磁盘上  时间换空间