class DoublyListNode {
    constructor(key = 0, val = 0, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        // Dummy Double linked list
        this.head = new DoublyListNode();
        this.tail = new DoublyListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // remove note
    _remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
        console.log(`Removing: ${node.val}`)
    }

    // add not to front
    _add(node){
        console.log(`Adding: ${node.val}`)
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        // little confusing but just remember- head is dummy data not an important val
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // Complex - update the linked list to move the key val to the front
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);
        this._remove(node);
        this._add(node);

        // Basic return whats in cache
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // if val in list modify
        if (this.cache.has(key)){
            const node = this.cache.get(key);
            node.val = value;
            this._remove(node);
            this._add(node);
        } else {
            // add the val to the list if new
            const node = new DoublyListNode(key, value);
            this.cache.set(key, node);
            this._add(node);
        }

        // remove val from list if too long
        if (this.cache.size > this.capacity) {
            console.log(`Too large, size: ${this.cache.size}/${this.capacity}`);
            this.cache.delete(this.tail.prev.key);
            this._remove(this.tail.prev);
        }
        

        // check if we go voer capacity - if so- remove tail.prev
    }
}


