const num = [3,2,1,5,6,4] 
const  k = 2

console.log(findKthLargest(num,6))

// 可以使用堆排序来解决这个问题——建立一个大顶堆，做k−1 次删除操作后，堆顶元素就是我们要找的答案
// ! 因为大顶堆的 最大数的肯定是在顶 如果我们再删除k-1次数 然后再调整大顶堆
// 建堆的好处就是可以操作K次就拿到结果 而不是全部排序后再去拿到结果
// 尤其要搞懂「建堆」、「调整」和「删除」的过程
function findKthLargest(nums,  k) {
    let heapSize = nums.length;
    buildMaxHeap(nums, heapSize); // 构建大顶堆
    // ! 删除k-1操作 就是相当于下沉 nums.length - k + 1次
    // 比如k是nums.length 第k大  数组6个元素排序 5个排好就行 所以i>=0
    for (let i = nums.length - 1; i >= nums.length - k + 1; --i) {
        swap(nums, 0, i); // 进行下沉 也就是交换 大顶堆 大的放后面
        --heapSize; 
        maxHeapify(nums, 0, heapSize);
    }
    // !要找的目标值不进行下沉就行 在堆顶获取到
    console.log(nums)
    return nums[0]; // nums ===> [ 5, 3, 4, 1, 2, 6 ]
}

 // ! 自下而上构建大顶堆 ===>从最后一个非叶子节点构建再到根节点
 // 非叶子节点
function buildMaxHeap(a,  heapSize) {
    // heapSize / 2 表示有多少个非叶子节点
    for (let i = Math.floor(heapSize / 2)-1; i >= 0; --i) {
        maxHeapify(a, i, heapSize);
    } 
}

// ! 自上而下的「调整」
function maxHeapify(a,  i,  heapSize) {
     // 左子节点和右子节点
     let l = i * 2 + 1, r = i * 2 + 2, largest = i;
    if (l < heapSize && a[l] > a[largest]) {
        largest = l;
    } 
    if (r < heapSize && a[r] > a[largest]) {
        largest = r;
    }
    if (largest != i) {
        swap(a, i, largest);
        maxHeapify(a, largest, heapSize);
    }
}


function swap(a,  i,  j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}


// 堆排序的步骤
// 1.构造初始堆 给定无序序列结构 如下：注意这里的操作用数组
// 2.此时从最后一个非叶子节点开始调整，从左到右，从上到下进行调整 ===> let i = Math.floor(heapSize / 2)-1
// 3.将堆顶元素与末尾元素进行交换 ===>进行下沉操作