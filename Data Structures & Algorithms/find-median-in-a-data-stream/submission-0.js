class MedianFinder {
    constructor() {
        this.smallVals = new MaxPriorityQueue();
        this.largeVals = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.smallVals.enqueue(num);

        // check to see if the added val should be on small or large
        if (this.smallVals.size() && this.largeVals.size()){
            if(this.smallVals.front() > this.largeVals.front()){
                let val = this.smallVals.dequeue();
                this.largeVals.enqueue(val);
            }
        }

        // balance arrays to be equal
        if (this.smallVals.size() - this.largeVals.size() > 1){
            let val = this.smallVals.dequeue();
            this.largeVals.enqueue(val);
        } else if (this.largeVals.size() - this.smallVals.size() > 1) {
            let val = this.largeVals.dequeue();
            this.smallVals.enqueue(val);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.smallVals.size() > this.largeVals.size()){
            return this.smallVals.front();
        } else if (this.largeVals.size() > this.smallVals.size()){
            return this.largeVals.front();
        } else {
            let a = this.largeVals.front();
            let b = this.smallVals.front();
            return (a + b) / 2;
        }
    }
}
