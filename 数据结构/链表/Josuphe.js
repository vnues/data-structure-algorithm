class Josuphe {
    first = null // 第一个节点不能动 如果需要后移通过辅助节点 这点很重要
    addBoy(nums) {
        // 参数校验
        if (nums < 1) {
            throw Error("nums参数不正确")
        }
        let curBoy = null
        // 形成单链表
        // 如何形成单链表:很简单头结点的next指向自身，后面加入的节点相当于
        // 依次添加到链条上
        // 编号从1开始
        for (let i = 1; i <= nums; i++) {
            const boy = new Boy(i)
            if (i === 1) {
                // 如何形成单链表:很简单头结点的next指向自身，后面加入的节点相当于
                this.first = boy
                this.first.next = this.first
                curBoy = this.first
            } else {
                curBoy.next = boy
                boy.next = this.first
                console.log(curBoy.next)
                curBoy = boy //继续后移
            }
        }
        console.log(this.first)

    }
    // 谁出圈
    // startNo 表示第几个开始报数
    // countNum表示报几次
    // 总的英雄个数
    countBoy(startNo, countNum, nums) {
        // 对参数做校验 ---- 正常程序都会走的一个步骤
        if (!this.first || startNo < 1 || startNo > nums) {
            throw new Error("传入的参数不正确")
        }
        let helper = this.first // 定义一个辅助指针，帮助英雄出圈
        // 让helper首先指向最后一个英雄节点(也可以理解first的上一个节点)
        // 注意了最后的节点根据first来确定的(first不一定是头结点的next节点，自定义的，根据用户来选择)

        // while (helper.next.no !== this.first.no) {
        //     helper = helper.next
        // }
        while (true) {
            if (helper.next.no === this.first.no) {
                break;
            }
            helper = helper.next
        }

        // 报数之前，初始化位置
        for (let i = 0; i < startNo - 1; i++) {
            this.first = this.first.next
            helper = helper.next
        }

        // 循环报数
        while (true) {
            // 不是helper.next
            // 当helper和first的重合说明只剩下一个
            if (helper.no === this.first.no) {
                break;
            }
            // 报数移动
            for (let j = 0; j < countNum - 1; j++) {
                this.first = this.first.next
                helper = helper.next
            }
            // 这时候first指向的节点就是要出圈的小孩节点
            this.first = this.first.next
            helper.next = this.first
        }
        console.log("最后留在圈中的小孩编号为:", this.first.no)
    }
    display() {
        if (!this.first) {
            console.log("链表为空")
            return
        }
        let curBoy = this.first
        while (true) {
            if (curBoy.no === this.first.no) {
                break;
            }
            console.log("boy的编号", curBoy.no)
            curBoy = curBoy.next
        }
    }
}

// 节点Boy类
class Boy {
    no // 编号
    next = null // 指向下一个节点
    constructor(no) {
        this.no = no
    }
}


const josuphe = new Josuphe()
const num = 3
josuphe.addBoy(num)
josuphe.countBoy(1, 2, num)