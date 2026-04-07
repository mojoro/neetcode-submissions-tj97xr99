class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.oldest = {'key': null, 'next': null, 'prev': null}
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.get(key)) return -1
        const accessNode = this.cache.get(key)[1];
        if (accessNode.next && accessNode.prev) {
            let prev = accessNode.prev;
            let next = accessNode.next;
            prev.next = next;
            next.prev = prev;
            accessNode.next = null;
            this.recent.next = accessNode;
            accessNode.prev = this.recent;
            this.recent = this.recent.next;

        } else if (!accessNode.prev && accessNode.next) {
            this.oldest = this.oldest.next;
            this.oldest.prev = null;

            accessNode.next = null;
            this.recent.next = accessNode;
            accessNode.prev = this.recent;

            this.recent = this.recent.next;
        }
        return this.cache.get(key)[0]
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.get(key)){
            let node = this.cache.get(key)[1]
            this.cache.set(key, [value, node])
            this.get(key);
        }
        else if (this.cache.size == 0) {
            this.oldest = {'key': key, 'next': null, 'prev': null}
            this.recent = this.oldest;
            this.cache.set(key, [value, this.recent]);
        }
        else if (this.cache.size < this.capacity) {
            let temp = {'key': key, 'next': null, 'prev': this.recent}
            this.cache.set(key, [value, temp]);
            this.recent.next = temp;
            this.recent = temp;
        }
        else if (this.cache.size == this.capacity && this.capacity > 1) {
            console.log(this.oldest.key)
            this.cache.delete(this.oldest.key);
            this.oldest = this.oldest.next;
            this.oldest.prev = null;
            let temp = {'key': key, 'next': null, 'prev': this.recent};
            this.cache.set(key, [value, temp]);
            this.recent.next = temp;
            this.recent = this.recent.next;
        } else {
            this.cache.delete(this.oldest.key)
            this.cache.set(key, [value, {}]);

        }
    }
}
