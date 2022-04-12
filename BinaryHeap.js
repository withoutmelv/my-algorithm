class BinaryHeap {
    constructor(compare) {
        this.compare = compare;
        this.data = [];
    }

    insert(value) {
        this.insertAt(this.data.length, value);
    }

    insertAt(index, value) {
        while(index > 0 && this.compare(this.data[index], this.data[Math.floor((index - 1) / 2)]) < 0) {
            this.data[index] = this.data[Math.floor((index - 1) / 2)];
            this.data[Math.floor((index - 1) / 2)] = value;
            index = Math.floor((index - 1) / 2);
        }
    }

    deleteItem(index) {
        while(index < this.data.length) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            if (left >= this.data.length) break;
            if (right >= this.data.length) {
                this.data[index] = this.data[left];
                index = left;
                break;
            }
            if (this.compare(this.data[left], this.data[right]) < 0) {
                this.data[index] = this.data[left];
                index = left;
            } else {
                this.data[index] = this.data[right];
                index = right;
            }
        }
        if (index < this.data.length - 1) {
            this.insertAt(index, this.data.pop());
        } else {
            this.data.pop();
        }
    }
}


class BinaryHeap {
    constructor(compare) {
        this.compare = compare;
        this.data = [];
    }

    insert(value) {
        this.insertAt(this.data.length, value);
    }

    insertAt(index, value) {
        while (index > 0 && this.compare(this.data[index], this.data[Math.floor((index - 1) / 2)]) < 0) {
            this.data[index] = this.data[Math.floor((index - 1) / 2)];
            this.data[Math.floor((index - 1) / 2)] = value;
            index = Math.floor((index - 1) / 2);
        }
    }

    deleteItem(index) {
        while (index < this.data.length) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            if (left >= this.data.length) break;
            if (right === this.data.length) {
                this.data[index] = this.data[left];
                index = left;
                break;
            }
            if (this.compare(this.data[left], this.data[right]) < 0) {
                this.data[index] = this.data[left];
                index = left;
            } else {
                this.data[index] = this.data[right];
                index = right;
            }
        }
        if (index < this.data.length - 1) {
            this.insertAt(index, this.data.pop());
        } else {
            this.data.pop();
        }
    }
}



class BinaryHeap {
    constructor(compare) {
        this.compare = compare;
        this.data = [];
    }

    insert(value) {
        this.insertAt(this.data.length - 1, value)
    }

    insertAt(index, value) {
        while(index > 0 && this.compare(this.data[index], this.data[Math.floor((index - 1) / 2)]) < 0) {
            this.data[index] = this.data[Math.floor((index - 1) / 2)];
            this.data[Math.floor((index - 1) / 2)] = value;
            index = Math.floor((index - 1) / 2); 
        }
    }

    deleteItem(index) {
        while(index < this.data.length) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            if (left >= this.data.length) break;
            if (right === this.data.length) {
                this.data[index] = this.data[left];
                index = left;
                break;
            }

            if (this.compare(this.data[left], this.data[right]) < 0) {
                this.data[index] = this.data[left];
                index = left;
            } else {
                this.data[index] = this.data[right];
                index = right;
            }
        }
        if (index < this.data.length - 1) {
            this.insertAt(index, this.data.pop());
        } else { // 这里只会等于，不会出现大于this.data.length - 1的情况
            this.data.pop();
        }
    }
}