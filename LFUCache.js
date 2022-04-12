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
            return obj.value;
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
                const keysArr = Array.from(this.cache.keys());
                let min = Infinity;
                let deleteKey;
                keysArr.forEach(k => {
                    const obj = this.cache.get(k);
                    if (min > obj.freq) {
                        min = obj.freq;
                        deleteKey = k;
                    }
                });
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
            const value = this.cache.get(key);
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
            return obj.value;
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
                const keysArr = Array.from(this.cache.keys());
                let min = Infinity;
                let deleteKey;
                keysArr.forEach(k => {
                    const obj = this.cache.get(k);
                    if (min > obj.freq) {
                        min = obj.freq;
                        deleteKey = k;
                    }
                });
                this.cache.delete(deleteKey);
                this.cache.set(key, {
                    freq: 1,
                    value,
                })
            } else {
                this.cache.set(key, {
                    freq: 1,
                    value,
                })
            }
        }
    }
}