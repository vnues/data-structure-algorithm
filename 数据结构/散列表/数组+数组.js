class HashTable {
    constructor() {
        this.table = new Array(137)
        this.buildChains();
    }
    // put(data) {
    //     let pos = this.betterHash(data)
    //     this.table[pos] = data
    // }
    buildChains() {
        for (var i = 0; i < this.table.length; ++i) {
            this.table[i] = new Array();
        }
    }
    put(key, data) {
        var pos = this.betterHash(key);
        var index = 0;
        if (this.table[pos][index] == undefined) {
            this.table[pos][index] = key;
            this.table[pos][index + 1] = data;
        }
        else {
            while (this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = key;
            this.table[pos][index + 1] = data;
        }
    }
    get(key) {
        var index = 0;
        var pos = this.betterHash(key);
        if (this.table[pos][index] = key) {
            return this.table[pos][index + 1];
        }
        else {
            index += 2;
            while (this.table[pos][index] != key) {
                index += 2;
            }
            return this.table[pos][index + 1];
        }
        return undefined;
    }
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i)
        }
        return total % this.table.length
    }
    // 难的是实现散列函数 解决碰撞💥
    // 直接定址法
    betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        return parseInt(total);
    }
    // showDistro() {
    //     var n = 0;
    //     for (var i = 0; i < this.table.length; ++i) {
    //         if (this.table[i][0] != undefined) {
    //             print(i + ": " + this.table[i]);
    //         }
    //     }
    // }
    showDistro() {
        let n = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(i, ":", this.table[i])
            }
        }
    }

}

var hTable = new HashTable();
// var someNames = ["David", "Jennifer", "Donnie", "Raymond",
//     "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];  // 这里key是名称 value是下标 便于我们的测试
// for (var i = 0; i < someNames.length; ++i) {
//     hTable.put(someNames[i], i);
// }
// hTable.showDistro();

// console.log(hTable.get("David")) // 0 


// 这样看不方便 我们用JS到Map数据结构跟我们实现的散列表做对比


// const map={
//     name:"vnues",
//     age:20,
//     height:180
// }

// 实现不了的是 const map={xxxx} 为什么可以写成这样读法结构 因为JS 内置了对这种数据结构的语法支持
hTable.put("name", "vnues")
hTable.put("age", "20") // 相当于obj.xxx 后面用代理优化下操作
hTable.put("height", 180)

// console.log(hTable.get("name"))

// 用代理实现一下

hTable = new Proxy(hTable, {
    get: function (target, propKey) {
        return target.get(propKey)
    },
    set: function (target, prop, value) {
        target.put(prop, value)
    }
})

hTable.phone = "18824699373"

console.log(hTable.name) // 这样就很方便封装了

console.log(hTable.phone)