/**
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */

function Permutation(str) {
    const result = []
    queue = str.split("")
    PermutationCore(queue, result)
    return result
}

function PermutationCore(queue, result, temp = "", current = "") {
    current += temp
    // 递归终止条件
    if (queue.length === 0) {
        result.push(current)
        return
    }
    // 这个是有序的
    for (let i = 0; i < queue.length; i++) {
        // 先以a为开头排序 然后b为开头 最后c为开头
        // 这个排列通过shift来调整
        temp = queue.shift() // 进行排列前的准备
        PermutationCore(queue, result, temp, current)
        queue.push(temp) // 为了不影响后续的排列 放回去 不过是往后放
        /**
         * temp = queue.shift()
         * queue.push(temp) 
         * 这两个是调整顺序
         * 至于for循环 是解决这种情况 abc acb bc ==> cb
         * 想想for循环暴力法 没有调整位置确实很难搞
         */
    }
}

console.log(Permutation('ab'))