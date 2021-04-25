// 快慢指针
var removeElement = function (nums, val) {
    var i = 0
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j]
            i++
        }
    }
    // 为什么return i就行 而不是i+1 因为 i++缘故 理解++i i++的区别 i++是使用最多的场景 
    // 想用原来的值 一旦使用过后就+1 后面再来使用i就是+1后的值了
    return i
};