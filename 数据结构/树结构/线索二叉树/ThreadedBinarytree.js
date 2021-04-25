
// 复用之前的二叉树 因为线索化二叉树就是在二叉树上做修改的
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
        this.leftType = 0
        this.rightType = 0
    }
    setLeft(left) {
        this.left = left
    }
    setRight(right) {
        this.right = right
    }
}

class ThreadedBinarytree {
    constructor() {
        this.root = null
        this.pre = null
    }
    setRoot() {
        this.root = root
    }
    // 中序线索化这个节点
    /**
     * 只有空指针才需要线索化
     * (-) left如果不为空则指向左子节点，否则指向前驱节点 节点属性标记leftType 0表示左子节点 1表示前驱节点
     * (二) right如果不为空则指向右子节点，否则指向后继节点 节点属性标记rightType 0表示右子节点 1表示后继节点
     * (三) 需要一个pre指针与当前节点做连接 （连接前驱节点或者后继节点）
     */
    threadedNodes(node) {
        // node为空不能线索化
        if (!node) {
            return
        }
        // 线索化左子树
        // 注意不应该判空 因为就是处理空指针状态的
        this.threadedNodes(node.left)
        // 线索化当前左节点
        if (node.left === null) {
            node.left = this.pre
            node.leftType = 1
        }
        /**
         * 前驱节点和后继节点：是相对的概念 以该节点的后继节点来说 
         * 该节点相对于后继节点就是前驱节点 所以我们连接到后驱节点可以通过 
         * 找到该后驱节点的前驱节点 通过这样前驱节点（该节点）主动连接后继节点 
         * 这样就实现了线索化后驱节点
         */
        // 线索化右子节点
        if (this.pre !== null && this.pre.right === null) {
            this.pre.right = node
            this.pre.rightType = 1
        }
        // pre指针前进一位
        this.pre = node
        // 线索化右子树
        this.threadedNodes(node.right)
    }
    // 中序遍历线索化二叉树
    midorder() {
        // 中序遍历的 8 3 10 1 14 6  
        // <=== 原理看这里 8这个节点的后继节点（right指针->后继节点）输出谁
        // 指针走的是往后继节点方向走
        // left前驱节点的作用是为了确定具体节点
        let node = this.root
        while (node !== null) {
            while (node.leftType === 0) {
                node = node.left
            }
            // leftNode为1的情况直接输出
            console.log("左子节点或者右子节点:", node.data.no)
            while (node.rightType === 1) {
                node = node.right
            }
            // node.rightNode为0的情况直接输出
            console.log("父节点:", node.data.no)
            node = node.right
        }
    }
}


const root = new Node({ no: 1, name: "tom" })
const node2 = new Node({ no: 3, name: "jack" })
const node3 = new Node({ no: 6, name: "smith" })
const node4 = new Node({ no: 8, name: "mary" })
const node5 = new Node({ no: 10, name: "king" })
const node6 = new Node({ no: 14, name: "dim" })


root.left = node2
root.right = node3
node2.left = node4
node2.right = node5
node3.left = node6

const threadedtree = new ThreadedBinarytree()

threadedtree.setRoot(root)

threadedtree.threadedNodes(threadedtree.root)

// const leftNode = node5.left

// const rightNode = node5.right


// console.log(leftNode.data.no) // 3

// console.log(rightNode.data.no) // 1


// 中序遍历的 8 3 10 1 14 6 


// console.log(node6.left.data.no) // 1

// console.log(node6.right.data.no) // 6




// 因为我们已经是以中序方式线索化它们的 （形成了链条）  

// 我们来看如何遍历。对于一个结点，首先找到他的首结点（最左下结点），然后每次循环后，寻找这个结点的后继。
// 8 3 10 1 14 6 
// 线索化二叉树 有了前驱后继的节点概念  ====>所以我们先找到一个首节点 然后想着找到节点的后继节点就行  就是这个思路  nice(*^▽^*)
// 什么是后继节点（一个节点的后一个节点称为后继节点） 右子节点也是后继节点啊  理解这句话很重要



threadedtree.midorder()  // 8 3 10 1 14 6