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


class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (this.cache.has(key)) {
            const obj = this.cache.get(key);
            this.cache.delete(key);
            obj.freq += 1;
            this.cache.set(key, obj);
        } else {
            return null;
        }
    }

    set(key, value) {
        if (this.cache.has(key)) {
            const obj = this.cache.get(key);
            this.cache.delete(key);
            obj.freq += 1;
            obj.value = value;
            this.cache.set(key, obj);
        } else {
            if (this.cache.size >= this.capacity) {
                const keyArr = Array.from(this.cache.keys());
                let min = Infinity;
                let deleteKey;
                for(let i = 0; i< keyArr.length; i++) {
                    const obj = this.cache.get(keyArr[i]);
                    if (min > obj.freq) {
                        min = obj.freq;
                        deleteKey = keyArr[i];
                    }
                }
                this.cache.delete(deleteKey);
                this.cache.set(key, {
                    freq: 1,
                    value
                });
            } else {
                this.cache.set(key, {
                    freq: 1,
                    value
                });
            }
        }
    }
}

class LRUCache{
    constructor(capacity) {
        this.capacity = capacity;
        this.data = [];
    }

    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
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
                const firstKey = Array.from(this.cache.keys())[0];
                this.cache.delete(firstKey);
                this.cache.set(key, value);
            } else {
                this.cache.set(key, value);
            }
        }
    } 
}