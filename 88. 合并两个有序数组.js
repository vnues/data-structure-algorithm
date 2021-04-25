/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let l3 = []
    // 双指针
    let n1 = 0
    let n2 = 0
    while (n1 < n && n2 < m) {
        if (nums1[n1] > nums2[n2]) {
            l3.push(nums2[n2])
            n2++
        } else {
            l3.push(nums1[n1])
            n1++
        }
    }
    if (n2 < n) {
        // 说明nums2有剩余
        for (let i = n2; i < n; i++) {
            l3.push(nums2[i])
        }
    }

    if (n1 < m) {
        // 说明nums1有剩余
        for (let i = n1; i < m; i++) {
            l3.push(nums1[i])
        }
    }
    return l3
};

let nums1 = [4, 0, 0, 0, 0, 0]
let m = 1
let nums2 = [1, 2, 3, 4]
let n = 3

console.log(merge(nums1, m, nums2, n)) // [1,2,2,3,5,6]   1 2 3 2 5 6