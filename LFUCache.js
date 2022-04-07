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
                const keysArr = Array.from(this.cache.keys());
                let deleteKey;
                let min = Infinity;
                for (let i = 0; i < keysArr.length; i++) {
                    const obj = this.cache.get(keysArr[i]);
                    if (min > obj.freq) {
                        deleteKey = keysArr[i];
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