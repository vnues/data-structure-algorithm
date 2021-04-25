class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    // 查找要删除的node
    search(value) {
        if (value === this.value) {
            return this
        } else if (value < this.value) {
            // 左边
            if (!this.left) {
                return null
            }
            return this.left.search(value)
        } else {
            // 右边
            if (!this.right) {
                return null
            }
            return this.right.search(value)
        }
    }
    // 查找要删除的node的节点
    searchParent(value) {
        if ((this.left && this.left.value === value) || (this.right && this.right.value === value)) {
            return this
        } else {
            if (value < this.value && !this.left) {
                return this.left.searchParent(value) // 向左边查找
            } else if (value > this.value && this.right) {
                return this.right.searchParent(value) // 向右边查找
            } else {
                return null // 没有找到
            }
        }
    }
    // 并不是单单根据根节点的root.val来比较的 而通过每层的树节点进行层层比较 以前的想法是错误❌的
    add(node) {
        if (!node) {
            return
        }
        // 节点的添加是有顺序的
        // 判断传入的节点的值，和当前子树的根节点的值的关系
        if (node.value < this.value) {
            if (!this.left) {
                this.left = node
            } else {
                this.left.add(node)
            }
        } else {
            if (!this.right) {
                this.right = node
            } else {
                this.right.add(node)
            }
        }
    }
    infixOrder() {
        if (this.left) {
            this.left.infixOrder()
        }
        console.log(this.value)
        if (this.right) {
            this.right.infixOrder()
        }
    }

}

class BinarySortTree {
    constructor() {
        this.root = null
    }
    searchParent(value) {
        if (!this.root) {
            return null
        } else {
            return this.root.searchParent(value)
        }
    }
    search(value) {
        if (!this.root) {
            return null
        } else {
            return this.root.search(value)
        }
    }
    add(node) {
        if (!this.root) {
            this.root = node
        } else {
            this.root.add(node)
        }
    }
    /**
  *  删除节点的第一种情况
  * 删除叶子节点
  * 1.需求先去找到要删除的节点 targetNode
  * 2.找到targetNode的父节点parent
  * 3.确定targetNode是parent的左子节点 还是右子节点
  * 4.根据前面的情况来对应删除
  */
    /**
     * 删除只有一颗子树的节点
     * 1.需求先去找到要删除的节点 targetNode
     * 2.找到targetNode的父节点 parent
     * 3.确定targetNode的子节点是左子节点还是右子节点
     * 4.targetNode是parent的左子节点还是右子节点
     * 5.如果targetNode有左子节点
     * 5.1如果targetNode是parent的左子节点
     * parent.left=targetNode.left
     * 5.2如果targetNode是parent的右子节点
     * parent.right=targetNode.left
     * 6.如果targetNode有右子节点
     * 6.1如果targetNode是parent的右子节点
     * parent.left=targetNode.right
     * 6.2如果targetNode是parent的右子节点
     * parent.right=targetNode.right
     */
    // 删除节点
    delNode(value) {
        if (!this.root) {
            return
        } else {
            const targetNode = this.search(value)
            if (!targetNode) {
                return
            }
            // 该二叉排序树只有一个节点(当前要删除的节点)
            if (!this.root.left && !this.root.right) {
                root = null
                return
            }
            // 找到父节点 通过父节点来删除目标节点
            const parent = this.searchParent(value)
            if (!targetNode.left && !targetNode.right) {
                if (parent.left && parent.left.value === value) {
                    // 左子节点
                    parent.left = null
                } else if (parent.right && parent.right.value === value) {
                    // 右子节点
                    parent.right = null
                }
            } else if (targetNode.left && targetNode.right) {
                // 存在左子节点和右子节点

            } else {
                // 只存在一个节点
            }
        }
    }

    // 中序遍历
    infixOrder() {
        if (this.root) {
            this.root.infixOrder()
        } else {
            console.log("二叉排序树为空，不能遍历")
        }
    }

}



const node1 = new Node(7)
const node2 = new Node(3)
const node3 = new Node(10)
const node4 = new Node(12)
const node5 = new Node(5)
const node6 = new Node(1)
const node7 = new Node(9)
const tree = new BinarySortTree()
tree.add(node1)
tree.add(node2)
tree.add(node3)
tree.add(node4)
tree.add(node5)
tree.add(node6)
tree.add(node7)


tree.delNode(12)
tree.delNode(9)


tree.infixOrder()



// 前序中序后序的命名 是父节点的顺序

// 1 3 5 7 9 10 12  确实中序遍历对于二叉搜索树 输出是有序的