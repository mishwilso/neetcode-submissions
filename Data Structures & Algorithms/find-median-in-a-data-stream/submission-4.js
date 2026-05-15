class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue();
        this.big = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.small.size() && num < this.small.front()){
            this.small.enqueue(num);
        } else {
            this.big.enqueue(num);
        }

        if (this.small.size() > this.big.size() + 1){
            this.big.enqueue(this.small.dequeue());
        }

        if (this.big.size() > this.small.size() + 1){
            this.small.enqueue(this.big.dequeue());
        }

        console.log(`Big: ${this.big}`);
        console.log(`Small: ${this.small}`);

        console.log(this.big)
        console.log(this.small)
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() === this.big.size()){
            return ((this.small.front() + this.big.front()) / 2);
        }

        if (this.small.size() > this.big.size()) {
            return this.small.front();
        } 

        return this.big.front();
    }
}
