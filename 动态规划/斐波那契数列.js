// 1 1 2 3 5 8 13 31 44 75

// 用斐波那契来理解动态规划 非常美妙啊

const fib = (n) => {
    let dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i < n + 1; i++) {
        dp[i] = dp[i - 2] + dp[i - 1]
    }
    return dp[n]
}


// const arr = []
// for (let i = 0; i < 100; i++) {
//     arr.push(fib(i))
// }

// console.log(arr)


// 递归暴力解决

const fibRecursion = (n) => {
    if (n === 0 || n === 1) {
        return 1
    }
    return fibRecursion(n - 1) + fibRecursion(n - 2) // 存在重复计算的情况
}

const arr1 = []
for (let i = 0; i < 50; i++) {
    arr1.push(fibRecursion(i))
}

console.log(arr1)