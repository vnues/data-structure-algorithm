// 使用递归
class MiGong {
    constructor() {
        this.map = new Array(8).fill(0).map(x => new Array(7).fill(0))
    }
    // 创建地图
    createMap() {
        for (let i = 0; i < 7; i++) {
            this.map[0][i] = 1;
            this.map[7][i] = 1

        }
        for (let j = 0; j < 8; j++) {
            this.map[j][0] = 1;
            this.map[j][6] = 1
        }
        this.map[3][1] = 1
        this.map[3][2] = 1
        this.map[1][2] = 1
        this.map[2][2] = 1
    }
    // 约定: 当 map[i][j] 为 0 表示该点没有走过 当为 1 表示墙 ; 2 表示通路可以走 ; 3 表示该点已经走过，但是走不通
    findTheWay(row, col) {
        // 终止条件 终点
        if (this.map[6][5] === 2) {
            return true
        } else {
            if (this.map[row][col] === 0) {
                // 表明这个点可以走
                // 这里我们假设这个点可以走通
                this.map[row][col] = 2;
                // 按照上面的约定找路
                if (this.findTheWay(row - 1, col)) {
                    // 改变策略试一下
                    // 向上走
                    return true;
                } else if (this.findTheWay(row, col + 1)) {
                    // 向右走
                    return true;
                } else if (this.findTheWay(row + 1, col)) {
                    // 向下走
                    return true;
                } else if (this.findTheWay(row, col - 1)) {
                    // 向左走
                    return true;
                } else {
                    //表示该点已经走过，但是走不通,表明这个点是死路
                    this.map[row][col] = 3;
                    return false;
                }
            } else {
                return false
            }
        }
    }
    display() {
        console.table(this.map)
    }
}


const miGong = new MiGong()
miGong.createMap()
// miGong.display()
miGong.findTheWay(1, 1)
miGong.display()
// 最短路径可以通过改变 上右下左 这四种寻找方式统计出来 （但是感觉有点怪怪的 是这样算的吗）
// 递归的使用就是用到了栈,所以栈这种数据结构特别有用
// 以前理解递归是A包住了B B包住了C 其实这样理解不正确 应该要用栈的思想 去理解 先入后出   压入栈
// 所以写递归之前 应该先写出终止条件 再用栈的思想去理解它