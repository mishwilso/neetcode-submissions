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
        this.small.enqueue(num);

        if (this.small.size() && this.big.size()) {
            if (this.small.front() > this.big.front()){
               this.big.enqueue(this.small.dequeue()); 
            }
        }

        if (this.small.size() > this.big.size() + 1){
            this.big.enqueue(this.small.dequeue());
        } else if (this.big.size() > this.small.size() + 1){
            this.small.enqueue(this.big.dequeue());
        }
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
