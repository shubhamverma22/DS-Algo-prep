class Deque {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return !Boolean(this.items.length);
    }

    addFront(elem) {
        this.items.unshift(elem);
    }

    addBack(elem) {
        this.items.push(elem);
    }

    removeFront() {
        this.items.shift();
    }

    removeBack() {
        this.items.pop();
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const d = new Deque();
console.log(d.isEmpty());
d.addBack(43);
d.addFront(5);
d.addFront(35);
console.log(d.size());
// d.removeBack(43);
console.log('d', d)
