class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        this.min = Math.min(val, this.min);
        this.minStack.push(this.min);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()

        // last item in minstack or infinity if empty
        this.min = this.minStack[this.minStack.length - 1] || Infinity;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
