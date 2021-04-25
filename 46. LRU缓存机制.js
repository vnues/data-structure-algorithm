/**
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 * 获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 */
/**
 * 解题思路
 * 用一个Map数据结构就行
 * 需要特别注意的是，Map 的遍历顺序就是插入顺序。
 * 不需要数组 map本身遍历的顺序就是根据顺序插入的
 * 位于头部是使用次数很少的  尾部是最近使用的 需要这样理解
 */
class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = new Map();
	}
	get(key) {
		const cache = this.cache;
		if (cache.has(key)) {
			const value = cache.get(key);
			cache.delete(key);
			cache.set(key, value);
			return value;
		}
		return -1;
	}
	put(key, value) {
		const cache = this.cache;
		if (cache.has(key)) {
			cache.delete(key);
			cache.set(key, value);
		} else {
			const cache = this.cache;
			if (this.capacity === cache.size) {
				// 超过限制 删除第一个
				cache.delete(cache.keys().next().value);
			}
			cache.set(key, value);
		}
	}
}
