// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。



/**
 *  两步移动
 * 当时想到就是滑动窗口算法
 * 其实就是双指针
 * 条件：
 * x轴越长越好
 * y轴受限于较短的一边 ===>这个条件也决定了指针往那边动才好（短板效应）
 */
var maxArea = function (height) {
    let l = 0
    let r = height.length - 1
    let area = 0
    while (l < r) {
        area = Math.max(area, Math.min(height[l], height[r]) * (r - l))
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return area
}