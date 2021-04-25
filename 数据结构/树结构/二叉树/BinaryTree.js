class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
    setLeft(left) {
        this.left = left
    }
    setRight(right) {
        this.right = right
    }
    // 前序查找
    preOrderSearch(no) {
        if (no === this.data.no) {
            return this
        }
        let result = null
        if (this.left) {
            result = this.left.preOrderSearch(no)
        }
        if (result) {
            return result
        }
        if (this.right) {
            result = this.right.preOrderSearch(no)
        }
        return result
    }
    // 中序查找
    midOrderSearch(no) {
        // 递归函数不会共用no变量 很简单 因为词法作用域 
        // 不是在这里定义函数 而是调用函数 调用自身
        let result = null
        if (this.left) {
            result = this.left.midOrderSearch(no)
        }
        if (result) {
            return result
        }
        if (no === this.data.no) {
            return this
        }
        if (this.right) {
            result = this.right.midOrderSearch(no)
        }
        return result
    }
    // 后序查找
    postOrderSearch(no) {
        let result = null
        if (this.left) {
            result = this.left.postOrderSearch(no)
            if (result) {
                return result
            }
        }
        if (this.right) {
            result = this.right.postOrderSearch(no)
            if (result) {
                return result
            }
        }
        if (no === this.data.no) {
            return this
        }
    }
    // 前序遍历
    preOrder() {
        console.log(this.data.no, this.data.name)
        if (this.left) {
            this.left.preOrder()
        }
        if (this.right) {
            this.right.preOrder()
        }
    }
    // 中序遍历
    midOrder() {
        if (this.left) {
            this.left.midOrder()
        }
        console.log(this.data.no, this.data.name)
        if (this.right) {
            this.right.midOrder()
        }
    }
    // 后序遍历
    postOrder() {
        if (this.left) {
            this.left.postOrder()
        }
        if (this.right) {
            this.right.postOrder()
        }
        console.log(this.data.no, this.data.name)
    }
    // 删除节点
    /**
     * 规定：叶子节点直接删除
     * 非叶子节点删除子树
     * 如何删除：应该找到节点的父节点 类似链表的前一个节点
     */
    delOrder(no) {
        // this作用就是当前指针
        if (this.left) {
            if (this.left.data.no === no) {
                this.left = null
                return // 删除成功 返回🔙
            }
            this.left.delOrder(no) // 左子树（也包括左右）遍历
        }
        // 这样子写更容易理解些
        // if(this.left){
        //     this.left.delOrder(no)
        // }
        if (this.right) {
            if (this.right.data.no === no) {
                console.log(this.right.data.no)
                this.right = null
                return // 删除成功 返回🔙
            }
            this.right.delOrder(no) // 右子树（也包括左右）遍历
        }
    }
    // delOrder1(no) {
    //     if (this.data.no === no) {
    //         // this是不能被赋值的 只读
    //         // 只能回去试试链表的删除 (不考虑链接 如果全部删除后面剩下的链表)
    //         this = null
    //         return
    //     }
    //     if (this.left) {
    //         this.left.delOrder1(no)
    //     }
    //     if (this.right) {
    //         this.right.delOrder1(no)
    //     }
    // }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    setRoot() {
        this.root = root
    }
    preOrder() {
        if (this.root) {
            this.root.preOrder()
        }
    }
    midOrder() {
        if (this.root) {
            this.root.midOrder()
        }
    }
    postOrder() {
        if (this.root) {
            this.root.postOrder()
        }
    }
    preOrderSearch(no) {
        if (this.root) {
            return this.root.preOrderSearch(no)
        }
    }
    midOrderSearch(no) {
        if (this.root) {
            return this.root.midOrderSearch(no)
        }
    }
    postOrderSearch(no) {
        if (this.root) {
            return this.root.postOrderSearch(no)
        }
    }
    delOrder(no) {
        if (this.root) {
            // 刚好删除的是root根节点
            if (this.root.data.no === no) {
                this.root = null
            } else {
                this.root.delOrder(no)
            }
        }
    }
    delOrder1(no) {
        if (this.root) {
            // 刚好删除的是root根节点
            if (this.root.data.no === no) {
                this.root = null
            } else {
                this.root.delOrder1(no)
            }

        }
    }
}

let root = new Node({ no: 'A' })
let node2 = new Node({ no: 'B' })
let node3 = new Node({ no: 'C', })
let node4 = new Node({ no: 'D' })
let node5 = new Node({ no: 'E' })
let node6 = new Node({ no: 'F' })
let node7 = new Node({ no: 'G' })
let node8 = new Node({ no: 'H' })
let node9 = new Node({ no: 'I' })
let node10 = new Node({ no: 'J' })





root.setLeft(node2)
root.setRight(node5)
node2.setRight(node3)
node3.setRight(node4)
node5.setLeft(node6)
node5.setRight(node7)
node7.setLeft(node8)
node8.setRight(node9)
node9.setLeft(node10)

const tree = new BinaryTree()


tree.setRoot(root)

// 进行遍历

// tree.preOrder() // 1 2 3 4 5


// tree.midOrder() // 2 1 4 3 5


tree.postOrder() // 2 4 5 3 1


// 进行查找

// console.log(tree.preOrderSearch(5))

// console.log(tree.midOrderSearch(5))

// console.log(tree.postOrderSearch(4))

// tree.delOrder(2)
// tree.delOrder1(2)
// tree.preOrder()

// 删除节点







// 递归是拆成更小的单元去解决问题 但是记住得及时阻止
// 分析递归的时候不要陷入进去

/**
 **
 分享今天三个大神教我的解决递归的三个问题：
1 实现最基本情况的解法
2 如何划分成更小规模的子问题
3 得到子问题返回的结果，如何组合成所求结果 (及时返回 这是边界条件的判断)
 */

 // 体会不到 多练就是