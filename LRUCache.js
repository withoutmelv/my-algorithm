class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
        } else {
            return null;
        }
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            this.cache.set(key, value);
        } else {
            if (this.cache.size >= this.capacity) {
                const firstKey = Array.from(this.cache.keys());
                this.cache.delete(firstKey[0]);
                this.cache.set(key, value);
            } else {
                this.cache.set(key, value);
            }
        }
    }
}