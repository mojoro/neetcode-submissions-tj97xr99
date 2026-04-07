class MinStack {
    constructor() {
        this.stack = []
        this.minStack = [];
        this.minValue = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.minValue = this.minValue < val ? this.minValue : val;
        this.minStack.push(this.minValue);
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
        this.minValue = this.minStack[this.minStack.length - 1];
        this.stack.pop()
        return null;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
